/* eslint-disable react/prop-types */
//import { useState } from "react";
import '../CSS_files/education.css'

export default function Education({educationList, setEducationList}){
   
    function handleInputChange(event, i){
        const updateList = [...educationList]
        const { name, value } = event.target;
        updateList[i][name] = value;
        setEducationList(updateList);
    }

    function handleAddClick(){
        const updateList = [...educationList, {
            institute:"",
            title:"",
            startDate:"",
            endDate:""
        }]
        setEducationList(updateList);
    }

    function handleRemoveClick(index){
        const updateList = [...educationList];
        updateList.splice(index,1);
        setEducationList(updateList);
    }

    return(
        <>
        <div className="education">
        <div className="eduCard">Add Education:</div>
        {educationList.map((eduObject,index)=> {
            return(
                <div className="eduForm" key={index}>
                    <label>
                        Institute Name:
                        <input name="institute" value={eduObject.institute} onChange={(e) => handleInputChange(e, index)}></input>
                    </label>
                    <label>
                        Title of Study:
                        <input name="title" value={eduObject.title} onChange={(e) => handleInputChange(e, index)}></input>
                    </label>
                    <label>
                        Start Date of study:
                        <input  name="startDate" value={eduObject.startDate} onChange={(e) => handleInputChange(e, index)}></input>
                    </label>
                    <label>
                        End Date of study:
                        <input  name="endDate" value={eduObject.endDate} onChange={(e) => handleInputChange(e, index)}></input>
                    </label>
                    <label>
                        Result:
                        <input name="result" value={eduObject.result} onChange={(e) => handleInputChange(e, index)}></input>
                    </label>
                    <div className="btn-box">
                        {educationList.length !== 1 && <button className="buttonRemove"  onClick={() => handleRemoveClick(index)}>Remove</button>}
                        {educationList.length - 1 === index && <button className ="buttonAdd" onClick={handleAddClick}>Add</button>}
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}