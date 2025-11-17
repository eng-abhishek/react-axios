import React,{useState,useEffect} from "react";
import Axios from "axios";

function Curd(){
   
   const[name,setName]= useState('');
   const[email,setEmail]= useState('');
   const[age,setAge]= useState('');
   
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
         console.log(e.target);
         Axios.post('https://691b24102d8d78557571b3ad.mockapi.io/curd',{e_name:name,e_email:email,e_age:age})
     }
   
   return(
          <>
          <div className="row">
            <div className="col-md-4">
               <div className="bg-primary p-4 text-center text-white">
                  CURD Application...
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
          </>
          );
}

export default Curd;