/* eslint-disable react/prop-types */
//import { useState } from "react";
import '../CSS_files/experience.css'


export default function Experience({experienceList, setExperienceList}){

    

    function handleChange(e,i){
        const {name,value} = e.target;
        const updateList = [...experienceList];
        updateList[i][name] = value;
        setExperienceList(updateList)
    }

    function handleAdd(){
       const updateList = [...experienceList, {
        title:"",
        company:"",
        startDate:"",
        endDate:"",
        description:""
    }]
      setExperienceList(updateList);
    }

    function handleRemove(i){
        const updateList = [...experienceList]
        updateList.splice(i,1);
        setExperienceList(updateList)
    }

    return(
    <>
    <div className="expForm">
    <div className="expTitle">Add Experience:</div>
    {experienceList.map((expItem, index)=>{
        return(
            <div  key={index} className="Form">
               <label>
                Position Title:
                <input name="title" value={expItem.title} onChange={(e)=>handleChange(e,index)}></input>
               </label>
               <label>
                Company:
                <input name="company" value={expItem.company} onChange={(e)=>handleChange(e,index)}></input>
               </label>
               <label>
                Start Date:
                <input name="startDate" value={expItem.startDate} onChange={(e)=>handleChange(e,index)}></input>
               </label>
               <label>
                End Date:
                <input name="endDate" value={expItem.endDate} onChange={(e)=>handleChange(e,index)}></input>
               </label>
               <label>
                Description:
                <textarea className="textArea" name="description" rows={7} cols={30} value={expItem.description} onChange={(e)=>handleChange(e,index)}></textarea>
                <div>
                {experienceList.length !==1 && <button onClick={(index)=>handleRemove(index)} className="buttonRemove">Remove</button> }
                {experienceList.length-1 === index && <button onClick={()=>handleAdd()}className="buttonAdd">Add</button> }
                </div>
               </label>
            </div>
        )
    })}
    </div>
    </>
    );
}