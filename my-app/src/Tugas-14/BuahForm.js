import React, {useContext, useState} from "react"
// import Buah from "./Buah"
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
  const [name, setName] = useState("")
  const [lengthOfTime, setLengthOfTime] = useState(0)
  const [buahs, setBuahs] = useContext(BuahContext)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setBuahs([...buahs, {name, lengthOfTime}])
    setName("")
    setLengthOfTime("")
  }

  
  const handleChangeName = (event) =>{
    setName(event.target.value)
  }

  const handleChangeTime = (event) =>{
    setLengthOfTime(event.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChangeName} />
        <input type="number" value={lengthOfTime} onChange={handleChangeTime} />
        <button>submit</button>
      </form>
    </>
  )

}

export default BuahForm