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
                            <td><button className="btn btn-primary">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
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