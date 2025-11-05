import React, { useEffect, useState } from "react";

function FetchApi(){

  const [posts,setPosts] = useState([]);

//   useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response)=>{
//     response.json().then((result)=>{
//         setPosts(result);
//     })
//   })
//   })

const HandlerUserData = () => {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    response.json().then((result)=>{
        setPosts(result);
    })
  })

}

  return(<>
         <h2>Fetch API Example</h2>
         <div>
            <div>
                <button onClick={HandlerUserData}> Click to show User Data</button>
            </div>
            <ul>
                {
                  posts.map((res)=>{
                         return(<>
                             <li>{res.id}</li>
                            <li>{res.title}</li>
                         </>)
                  })  
                }
            </ul>
         </div>
        </>);
}

export default FetchApi;