import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Read(){

    const[data,setData]= useState([]);
    
    function getData(){
      Axios.get('https://691b24102d8d78557571b3ad.mockapi.io/curd').then((res)=>{
          console.log(res.data);
          setData(res.data);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

    function handleDelete(id){
      console.log(id);
      Axios.delete(`https://691b24102d8d78557571b3ad.mockapi.io/curd/${id}`).then((res)=>{
          getData();
      })
    }

    function setDataToStorage(id,name,age,email){
       //console.log(id,name,age,email);
       localStorage.setItem('id',id);
       localStorage.setItem('name',name);
       localStorage.setItem('age',age);
       localStorage.setItem('email',email);
      }

    return(<>
    <div>

        <div className="mb-2 mt-2">
        <Link to='/create'> 
        <button className="btn btn-primary">Create New User</button>
        </Link>
        </div>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                    return(<>
                            <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.e_name}</td>
                            <td>{item.e_age}</td>
                            <td>{item.e_email}</td>
                            <td>
                            <Link to='/edit'>
                            <button className="btn btn-primary" onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                            </Link>    
                            </td>
                            <td><button className="btn btn-danger" onClick={()=> { if(window.confirm('You wants to remove it.')){ handleDelete(item.id) }} }>Delete</button></td>
                            </tr>
                        </>)
                    })
                }
            </tbody>
            </table>
        </div>
           </>);
}

export default Read;