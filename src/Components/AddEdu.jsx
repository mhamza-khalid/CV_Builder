/* eslint-disable react/prop-types */
import '../CSS_files/education.css'
//import { useState } from 'react'

export default function AddButton({count, setCount,setArray,array}){
    function handleClick(){
        setCount(count+1);
        setArray([...array, count])
    }
    return(
        <>
        <button className="addEdu" onClick={handleClick}>
        +
        </button>
        </>
    )
}