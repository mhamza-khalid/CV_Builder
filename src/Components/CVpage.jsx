/* eslint-disable react/prop-types */
import '../CSS_files/cvPage.css'
//This component renders the white CV page
// on right of page. It writes the personal info, schooling and education
// eslint-disable-next-line react/prop-types
export default function CVpage({personalInfo, educationList,experienceList}){

    return(
        <>
            <div className="CVpage">
                <div className='name'>
                    {personalInfo.firstName +' '+ personalInfo.lastName}
                </div>
                <div className='subText'>
                    📬: {' '}{personalInfo.email}
                </div>
                <div className='subText'>
                   📞:{' '}{personalInfo.phone}
                </div>
                <div className='subText'>
                   🔗:{' '}{personalInfo.linkedinURL}
                   <hr className="upLine"/>
                </div>
                <div className='eduTitle'>Education</div>
                {educationList.map((item,index)=>{
                    return(
                        <>
                        <div className="educationCV" key={index}>
                            <div className='institute item'> {item.institute} </div>
                            <div className='date item'> {item.startDate + '-' + item.endDate} </div>
                            <div className='titleStudy item'> {item.title} </div>
                            <div className='result item'> {item.result} </div>
                        </div>
                        <hr className='line'/>
                        </>
                    )
                })}
                <div className='expTitle2'>Experience</div>
                {experienceList.map((item, index)=>{
                    return(
                        <>
                        <div className='experienceCV' key={index}>
                            <div className='titlePosition'>{item.title}</div>
                            <div className='company'>{item.company}</div>
                            <div className='initiateDate'>🗓️: {' '}{item.startDate +'-'+ item.endDate}</div>
                            <div className='description'>{item.description}</div>
                        </div>
                        <hr className='lineExp'/>
                        </>
                    )
                })}
            </div>
        </>
    )
}