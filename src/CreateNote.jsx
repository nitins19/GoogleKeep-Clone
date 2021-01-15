import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props)
{
    const[note,setnote]=useState({
        title:"",
        content:""
    });
    function inputEvent(event)
    {
        const name=event.target.name;
        const value=event.target.value;
      setnote((prev)=>{
          return{
              ...prev,
            [name]:value};
          
      });
    }
    function addEvent()
    {
        props.passNotes(note) 
        setnote({
        title:"",
        content:""
        });  
    }
    function submits(event)
    {
        event.preventDefault();
    }
    return( 
    <div className="main_note">
    <form onSubmit={submits} >
        <input type="text" name="title" placeholder="Title" value={note.title} onChange={inputEvent} autoComplete="off"/>
        <textarea rows="" name="content" columns="" value={note.content} placeholder="Take a note..." onChange={inputEvent} />
        <button onClick={addEvent} className="btn1"><AddIcon className="plus_sign"/></button>
    </form>

    </div>);
}
export default CreateNote;