import React from "react";

function FetchApi(){

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    response.json().then()

  })

  return(<>
         <h2>Fetch API Example</h2>   
        </>);
}

export default FetchApi;