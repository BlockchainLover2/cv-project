import {CreateButton, CreateFormElement, CreateFormElementReadOnly} from "./FormHelper.jsx";
import {useState} from "react";


class WorkInfo{
    companyName
    positionTitle
    responsibilityJob
    workDate


    constructor(companyName, positionTitle, responsibilityJob, workDate) {
        this.companyName = companyName ? companyName : "";
        this.positionTitle = positionTitle ? positionTitle : "";
        this.responsibilityJob = responsibilityJob ? responsibilityJob : "";
        this.workDate = workDate ? workDate : "";
    }
}



const workInfoArray = [new WorkInfo()]

function WorkInformation(){

    const [workIndex,setIndex] = useState(0)
    const [isEdit,setEdit] = useState(true);

    let currentWorkInfo = workInfoArray[workIndex]

    const companyName = useState(currentWorkInfo.companyName);
    const positionTitle = useState(currentWorkInfo.positionTitle);
    const responsibilityJob = useState(currentWorkInfo.responsibilityJob);
    const workDate = useState(currentWorkInfo.workDate);


    function addWorkInfo(){
        let newIndex = workInfoArray.length
        workInfoArray[newIndex] = new WorkInfo()
        currentWorkInfo = workInfoArray[newIndex]
        setNewIndex(newIndex)
    }
    function setNewIndex(newIndex){
        setIndex(newIndex)
        let currentWorkInfo = workInfoArray[newIndex]
        companyName[1](currentWorkInfo.companyName)
        positionTitle[1](currentWorkInfo.positionTitle)
        responsibilityJob[1](currentWorkInfo.responsibilityJob)
        workDate[1](currentWorkInfo.workDate)
    }
    function editSelectedWorkObject(){
        currentWorkInfo.positionTitle = positionTitle[0]
        currentWorkInfo.companyName =  companyName[0]
        currentWorkInfo.workDate =  workDate[0]
        currentWorkInfo.responsibilityJob =  responsibilityJob[0]
        setEdit(!isEdit)
    }


    return(
        <>
            <div className="work-information">
                {isEdit ? (
                <form>
                    <CreateFormElement state={companyName} labelText={"Company Name"} id={"companyName"}/>
                    <CreateFormElement state={positionTitle} labelText={"Position Title"} id={"positionTitle"}/>
                    <CreateFormElement state={responsibilityJob} labelText={"Main Responsibilities Of Your Job"}
                                       id={"responsibilityJob"}/>
                    <CreateFormElement state={workDate} labelText={"Work Date"} id={"workDate"}/>
                </form>
                ) : (
                <form className={"non-justify"}>
                    {workInfoArray.map((x,index)=>{
                        return (
                            <>
                                <h1>{index+1}</h1>
                                <CreateFormElementReadOnly text={x.companyName} labelText={"Company Name"} id={"companyName"}/>
                                <CreateFormElementReadOnly text={x.positionTitle} labelText={"Position Title"} id={"positionTitle"}/>
                                <CreateFormElementReadOnly text={x.responsibilityJob} labelText={"Main Responsibilities Of Your Job"}
                                                           id={"responsibilityJob"}/>
                                <CreateFormElementReadOnly text={x.workDate} labelText={"Work Date"} id={"workDate"}/>

                            </>
                        )

                    })}
                </form>
                )}

                <div className="button-container">
                    <CreateButton buttonText="Edit/Submit" eventCallback={editSelectedWorkObject}/>
                    {isEdit ? (
                        <>
                            <CreateButton buttonText="+" eventCallback={addWorkInfo}/>
                            <CreateButton buttonText="->" eventCallback={() =>
                                setNewIndex(workIndex + 1 < workInfoArray.length ? workIndex + 1 : 0)}/>
                            <CreateButton buttonText="<-" eventCallback={() =>
                                setNewIndex(workIndex - 1 >= 0 ? workIndex - 1 : workInfoArray.length - 1)}/>
                        </>

                    ) : (
                    <>
                        <CreateButton/>
                        <CreateButton />
                        <CreateButton />

                    </>
                    )}
                </div>
            </div>
        </>
    );

}


export default WorkInformation