import Axios from "axios";
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

function Edit(){

   const[id,setId]= useState(0);
   const[name,setName]= useState('');
   const[email,setEmail]= useState('');
   const[age,setAge]= useState('');
   
   const navigate = useNavigate();

       useEffect(()=>{
       setId(localStorage.getItem('id'));
       setName(localStorage.getItem('name'));
       setEmail(localStorage.getItem('email'));
       setAge(localStorage.getItem('age'));
       },[]);

      const handleName = (e) => {
         setName(e.target.value);
      }

      const handleEmail = (e) => {
         setEmail(e.target.value);
      }

      const handleAge = (e) => {
         setAge(e.target.value);
      }

     const handleSubmit = (e) => {
         e.preventDefault();
         Axios.put(`https://691b24102d8d78557571b3ad.mockapi.io/curd/${id}`,{e_name:name,e_email:email,e_age:age});
         navigate('/');
     }

        return(<>
          <div className="row">
            <div className="col-md-4">
               <div>
                 <Link to={'/'}><button type="button" className="btn btn-info">Read Data</button></Link>
               </div>
               <div className="bg-primary p-4 text-center text-white">
                  Edit Form Data
               </div>
               <form className="p-2" onSubmit={handleSubmit}>
                  <div className="form-group">
                     <label>Enter Name</label>
                     <input type="text" name="name" placeholder="Enter name" value={name} onChange={handleName} className="form-control"></input>
                     <br/>

                     <label>Enter Email</label>
                     <input type="text" name="email" placeholder="Enter email" value={email} onChange={handleEmail} className="form-control"></input>
                     <br/>

                     <label>Enter Age</label>
                     <input type="number" name="age" placeholder="Enter age" value={age} onChange={handleAge} className="form-control"></input>
                     <br/>
                     <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
               </form>
            </div>
          </div>
          </>);
}

export default Edit;