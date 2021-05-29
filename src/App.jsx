import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx"
function App()
{
const[addNotes,updatedaddNotes]=useState([]);
function newNotes(note)
{
updatedaddNotes((prevnotes)=>{
    return[...prevnotes,note];
});

}
function deleteNote(id)
{
    updatedaddNotes((arr)=>{
        return arr.filter((arrelements,index)=>{
            return (index!==id);
        });
    });
}
    return(
    <div>
  <Header/>
    <CreateNote passNotes={newNotes}/>
   {addNotes.map((val,index)=>{
        return(
            <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                delete={deleteNote}
            />
        );
    })}
    <Footer/>
    </div>
    );
}
export default App;