import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BookList = () =>{
  const [buah] = useContext(BuahContext)

  return(
    <ul>
      {buah.map(el=>{
        return (
            // <li>{`${el.name} with ${el.price}`}</li>
        <li>{[null]}</li>
        )
      })}
    </ul>
  )

}

export default BookList