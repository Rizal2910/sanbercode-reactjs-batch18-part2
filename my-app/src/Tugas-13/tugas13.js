import Axios from "axios";
import React, {Component, useEffect, useState} from "react"
import "./DaftarBuah.css"

const Example = ()=>{

    const [daftarBuah, setDaftarBuah]= useState([
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ]);
    const [inputName, setInputName]= useState("")
    const [inputHarga, setinputHarga]= useState("")
    const [inputBerat, setinputBerat]= useState("")
     /// array tidak punya index -1
    const [indexOfForm, setIndexOfFrom]= useState (-1)    


const handleDelete=(event)=>{
    let index = event.target.value
    let newDaftarBuah = daftarBuah
    let editedDataBuah = newDaftarBuah[indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      setDaftarBuah([...newDaftarBuah])
      setIndexOfFrom(newIndex)
      
    }else{
      
      setDaftarBuah([...newDaftarBuah])
    }
    
  }
  
const handleEdit=(event)=>{
    let index = event.target.value
    let dataBuah = daftarBuah[index]
    setInputName(dataBuah.nama)
    setinputHarga(dataBuah.harga) 
    setinputBerat( dataBuah.berat)
    setIndexOfFrom(index) 
    
  }

const handleChange=(event)=>{
    // setInputName(event.target.value);

    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
      {
        setInputName(event.target.value);
        break
      }
      case "harga":
      {
        setinputHarga(event.target.value);
        break
      }
      case "berat":
      {
        setinputBerat(event.target.value);
          break
      }
    default:
      {break;}
    }
  }

const handleSubmit=(event)=>{
    // menahan submit
    event.preventDefault()

    let nama = inputName
    let harga = inputHarga.toString()
    let berat = inputBerat

  if(nama.replace(/\s/g,'')!== ""){
    let newDaftarBuah = daftarBuah
    let index = indexOfForm
    
    if (index === -1){
      newDaftarBuah = [...newDaftarBuah, {nama, harga, berat}]
    }else{
      newDaftarBuah[index] = {nama, harga, berat}
    }

    
    setDaftarBuah(newDaftarBuah)
    setInputName("")
    setinputHarga("")
    setinputBerat("")
   

  }
}

useEffect(()=>{
    Axios.get('http://backendexample.sanbercloud.com/api/fruits').then(res=>{
        let value = res.data;
        console.log(value);
        setDaftarBuah(value);
    })
})


    return(
      <>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                daftarBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>{item.harga}</td>
                      <td>{item.berat/1000} kg</td>
                      <td>
                        <button onClick={handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
          <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form onSubmit={handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" required name="name" value={inputName} onChange={handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga:
              </label>
              <input style={{float: "right"}} type="text" required name="harga" value={inputHarga} onChange={handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" required name="berat" value={inputBerat} onChange={handleChange}/>
              <br/>
              <br/>
              <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}


export default Example
