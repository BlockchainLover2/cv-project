import {CreateButton, CreateFormElement, CreateFormElementReadOnly} from "./FormHelper.jsx";
import {useState} from "react";


class SchoolInfo{
    schoolName
    titleOfStudy
    dateOfGraduation


    constructor(schoolName, titleOfStudy, dateOfGraduation) {
        this.schoolName = schoolName === undefined ? "":schoolName;
        this.titleOfStudy = titleOfStudy === undefined ? "":titleOfStudy;
        this.dateOfGraduation = dateOfGraduation === undefined ? "":dateOfGraduation;
    }

}


const schoolInfoArray = [new SchoolInfo()]

function SchoolInformation(){
    const [schoolIndex,setIndex] = useState(0)
    const [isEdit,setEdit] = useState(true);

    let currentSchoolInfo = schoolInfoArray[schoolIndex]

    const schoolName = useState(currentSchoolInfo.schoolName);
    const studyTitle = useState(currentSchoolInfo.titleOfStudy);
    const graduateDate = useState(currentSchoolInfo.dateOfGraduation);



    function addSchoolInfo(){
        let newIndex = schoolInfoArray.length
        schoolInfoArray[newIndex] = new SchoolInfo()
        currentSchoolInfo = schoolInfoArray[newIndex]
        setNewIndex(newIndex)
    }

    function setNewIndex(newIndex){

        setIndex(newIndex)
        let currentSchoolInfo = schoolInfoArray[newIndex]
        schoolName[1](currentSchoolInfo.schoolName)
        studyTitle[1](currentSchoolInfo.titleOfStudy)
        graduateDate[1](currentSchoolInfo.dateOfGraduation)
    }
    function editSelectedSchoolObject(){
        currentSchoolInfo.titleOfStudy = studyTitle[0]
        currentSchoolInfo.schoolName=  schoolName[0]
        currentSchoolInfo.dateOfGraduation =  graduateDate[0]
        setEdit(!isEdit)
    }

    return(
        <>
            <div className="school-information">
                {isEdit ? (
                    <>
                        <form>
                            <CreateFormElement state={schoolName} labelText={"School Name"} id={"schoolName"}/>
                            <CreateFormElement state={studyTitle} labelText={"Title Of Study"} id={"studyTitle"}/>
                            <CreateFormElement state={graduateDate} labelText={"Date Of Graduation"}
                                               id={"graduateDate"}/>
                        </form>
                    </>
                ) : (
                    <>
                        <form className={"non-justify"}>
                            {schoolInfoArray.map((x,index)=>{
                                return (
                                    <>
                                        <h1>{index + 1}</h1>
                                        <CreateFormElementReadOnly text={x.schoolName} labelText={"School Name"} id={"schoolName"}/>
                                        <CreateFormElementReadOnly text={x.titleOfStudy} labelText={"Title Of Study"} id={"studyTitle"}/>
                                        <CreateFormElementReadOnly text={x.dateOfGraduation} labelText={"Date Of Graduation"}
                                                                   id={"graduateDate"}/>
                                    </>
                                )
                            })}
                        </form>
                    </>

                )}

                <div className="button-container">
                    <CreateButton buttonText="Edit/Submit" eventCallback={editSelectedSchoolObject}/>
                    {isEdit ? (
                        <>
                            <CreateButton buttonText="+" eventCallback={addSchoolInfo}/>
                            <CreateButton buttonText="->" eventCallback={()=>
                                setNewIndex(schoolIndex+1 < schoolInfoArray.length?schoolIndex+1:0)}/>
                            <CreateButton buttonText="<-" eventCallback={()=>
                                setNewIndex(schoolIndex-1 >= 0?schoolIndex-1:schoolInfoArray.length-1)}/>
                        </>

                    ): (
                        <>
                            <CreateButton/>
                            <CreateButton />
                            <CreateButton />
                        </>
                    )

                    }

                </div>

            </div>
        </>
    );
}


export default SchoolInformation