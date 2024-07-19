


// eslint-disable-next-line react/prop-types
export function CreateFormElement({id,labelText,state}){
    return(
        <>
            <div className={"form-information"}>
                <label htmlFor={id}>{labelText}:</label>
                <input id={id} value={state?state[0]:""} onChange={(event)=>
                {
                    state[1](event.target.value)}
                }/>
            </div>
        </>
    )
}

export function CreateFormElementReadOnly({id,labelText,text}){
    return(
        <>
            <div className={"form-information"}>
                <label htmlFor={id}>{labelText}:</label>
                <label className={"label-text"} id={id}>{text}</label>
            </div>
        </>
    )
}

// eslint-disable-next-line react/prop-types
export function CreateButton({buttonText,eventCallback}){
    return(
        <>
            <button className={buttonText===undefined && "hidden"} onClick={()=>eventCallback()}>{buttonText}</button>
        </>
    )
}
