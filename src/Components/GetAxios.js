import React, { useEffect, useState } from "react";
import Axios from "axios";

function GetAxios(){
    
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

   const [userData, setUserData]= useState([]);
   useEffect(()=>{
      Axios.get(baseUrl).then((res)=>{
         console.log(res);
          setUserData(res.data);
      })
   },[]) 

// const showFirstData = () =>{
//           Axios.get(baseUrl).then((res)=>{
//          //console.log(res);
//           setUserData(res.data);
//       })
// }
   return(<>
          <div>
            <h2>Axios Get Data</h2>
            {/* First Way When get Single Data with url
            
            const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";

             <div>
                <h5>{userData.id}</h5>
                <h5>{userData.title}</h5>
                <h5>{userData.body}</h5>
            </div> */}

            <div>
                <table border="1">
                <tr>
                    <th>Id</th> 
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {userData.map((res)=>{
                    const {id,title,body} = res;
                    return(<>
                    <tr>
                            <td> {id} </td>
                            <td> {title} </td>
                            <td> {body} </td>
                    </tr>
                          </>)
               
                })}
             </table>
            </div>

          </div>
        </>);
}

export default GetAxios;