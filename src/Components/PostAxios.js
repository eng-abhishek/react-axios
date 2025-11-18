import React,{useEffect, useState} from "react";
import Axios from "axios";

function PostAxios(){

    const [my_title,setTitle] = useState("");
    const [my_body,setBody] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();

        Axios.post('https://jsonplaceholder.typicode.com/posts',{title:my_title,body:my_body}).then((res)=>{
             console.log(res);
    
        }).catch((error)=>{
            console.log(error)
        })

    }
    
    const handlerTitle = (e) => {
     setTitle(e.target.value)
    }

    const handlerBody = (e) => {
        setBody(e.target.value)
    }

    return(<>
            <form onSubmit={handleSubmit}>
            <label>Enter Title:</label>
            <input type="text" name="title" value={my_title} onChange={handlerTitle}></input>
            <br/>
            <label>Enter Body:</label>
            <input type="text" name="body" value={my_body} onChange={handlerBody}></input>
            <br/>
             <button type="submit">Submit</button>
            </form>
           </>);

}

export default PostAxios;