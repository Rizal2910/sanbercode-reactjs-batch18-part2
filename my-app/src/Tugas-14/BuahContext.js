import React, { useState, useEffect, createContext } from "react";
import axios from "axios"

// export const MovieContext = createContext();

// export const MovieProvider = props => {
//   const [movie, setMovie] = useState([
//     { name: "Harry Potter", lengthOfTime: 120},
//     { name: "Sherlock Holmes", lengthOfTime: 125},
//     { name: "Avengers", lengthOfTime: 130},
//     { name: "Spiderman", lengthOfTime: 124},
//   ]);

export const BuahContext = createContext();
export const BuahProvider = props => {  
    const [daftarBuah, setDaftarBuah] =  useState([null])
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [daftarBuah])
  



  return (
    <BuahContext.Provider value={[daftarBuah, setDaftarBuah]}>
      {props.children}
    </BuahContext.Provider>
  );
};