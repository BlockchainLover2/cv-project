import {CreateButton, CreateFormElement, CreateFormElementReadOnly} from "./FormHelper.jsx";
import {useState} from "react";

function GeneralInformation(){

    const [isEdit,setEdit] = useState(true);

    const name = useState("");
    const email = useState("");
    const pn = useState("");

    function editGeneralInfo(){
        setEdit(!isEdit)
    }

    return(
        <>
            <div className="general-information">

                <div className="image-container">
                    <img src="../../public/What-is-Stock-Photography_P1_mobile.webp"/>
                </div>
                <div className="button-container">
                    <CreateButton buttonText="Edit/Submit" eventCallback={editGeneralInfo}/>
                </div>
                {isEdit ? (
                    <form>
                            <CreateFormElement state={name} labelText={"Name"} id={"name"}/>
                            <CreateFormElement state={email} labelText={"Email"} id={"email"}/>
                            <CreateFormElement state={pn} labelText={"Phone Number"} id={"pn"}/>
                    </form>
                ) : (
                    <form>
                        <CreateFormElementReadOnly text={name[0]} labelText={"Name"} id={"name"}/>
                        <CreateFormElementReadOnly text={email[0]} labelText={"Email"} id={"email"}/>
                        <CreateFormElementReadOnly text={pn[0]} labelText={"Phone Number"} id={"pn"}/>
                    </form>
                )}

            </div>
        </>
    );

}


export default GeneralInformation