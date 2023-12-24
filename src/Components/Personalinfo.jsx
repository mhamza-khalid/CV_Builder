/* eslint-disable react/prop-types */
//This component creates the Personal Info Card for user
import '../CSS_files/personalInfo.css'
// eslint-disable-next-line react/prop-types
function PersonalInfo({personalInfo, setPersonalInfo}){

    function handleChange(e){
         const {name, value} = e.target;
         let updateInfo = {...personalInfo};
         updateInfo[name] = value;
         setPersonalInfo(updateInfo)
    }

    return(
        <div className="personalInfoCard">
            <div id="title">
                Personal Info:
                <hr></hr>
            </div>
            <label>
                First Name:
                <input name="firstName" value={personalInfo.firstName} onChange={(e)=> handleChange(e)}>
                </input>
            </label>
            <label>
                Last Name:
                <input name="lastName" value={personalInfo.lastName} onChange={(e)=> handleChange(e)}>
                </input>
            </label>
            <label>
                Email:
                <input name="email" value={personalInfo.email} onChange={(e)=> handleChange(e)}>
                </input>
            </label>
            <label>
                Phone Number:
                <input name="phone" value={personalInfo.phone} onChange={(e)=> handleChange(e)}>
                </input>
            </label>
            <label>
                Linkedin Profile URL:
                <input name="linkedinURL" value={personalInfo.linkedinURL} onChange={(e)=> handleChange(e)}>
                </input>
            </label>
          </div>
    )
}

export default PersonalInfo