import { useState } from "react"

import './CSS_files/personalInfo.css'

import Header from "./Components/Header.jsx"
import PersonalInfo from './Components/Personalinfo.jsx'
import CVpage from "./Components/CVpage.jsx"
import Education from "./Components/education.jsx"
import Experience from "./Components/experience.jsx"

import defaultInfo from "./data/infoData.js"
import eduInfo from "./data/eduData.js"
import expInfo from "./data/expData.js"

export default function App(){

    const [personalInfo, setPersonalInfo] = useState(defaultInfo)

    const [educationList, setEducationList] = useState(eduInfo)

    const [experienceList, setExperienceList] = useState(expInfo)


    function handleReset(){
      setPersonalInfo({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        linkedinURL:""
    })
    setEducationList([{
      institute:"",
      title:"",
      startDate:"",
      endDate:"",
      result:""
     }])
     setExperienceList([
      {
        title:"",
        company:"",
        startDate:"",
        endDate:"",
        description:""
      }
     ])
    }

    function handleLoad(){
      setPersonalInfo(defaultInfo)
      setEducationList(eduInfo)
      setExperienceList(expInfo)
    }

    return(
        <>
          <Header />   {/*Renders title of page CV Maker*/}

          {/*Renders form for personal info*/}
          <PersonalInfo 
          personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
          />

         {/*Renders form for Education info form*/}
         <Education 
         educationList={educationList} setEducationList={setEducationList}/>
          
          <Experience experienceList={experienceList} setExperienceList={setExperienceList}/>

          {/*Renders the CV Page*/}
          <CVpage
          personalInfo={personalInfo} educationList={educationList} experienceList={experienceList}
          />
          <div className="buttonsA">
          <button className="reset" onClick={handleReset}>Reset</button>
          <button className="loadExample" onClick={handleLoad}>Load Example</button>
          </div>
        </>
    )
}