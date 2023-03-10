import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";
import { toast } from 'react-toastify';

const Edit = () => {
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const contact = useSelector(state => state);
    
    const {id} = useParams();
    
    const currentContact = contact.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
       
    },[currentContact]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contact.find(contact =>  contact.email === email );

        const checkNumber = contact.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) );

        if(!email || !number || !name){
            return toast.warning("Please fill in all details!");
        }

        if(checkEmail){
            return toast.error("This Email already exists");
        }

        if(checkNumber){
            return toast.error("This Number already exists");
        }

        const data ={
            id:parseInt(id),
            name,
            email,
            number
        };

        dispatch({type : "UPDATE-CONTACT", payload:data});
        toast.success("Contact updated successfully!");
        navigate("/");

    };
    
  return (
    <div className='container'>
        {currentContact ? (<>
    <h1 className='display-3 my-5 text-center'>Edit Contact {id}</h1>
   <div className='row'>
       <div className='col-md-6 shadow mx-auto pd-7'>
           <form onSubmit={handleSubmit}>
               <div className='form-group'>
                   <input type="text" placeholder='Name'
                   className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
               </div>
               <div className='form-group mt-1'>
                   <input type="email" placeholder='Email'
                   className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div className='form-group mt-1'>
                   <input type="number" placeholder='Phone number'
                   className='form-control' value={number} onChange={(e) => setNumber(e.target.value)}/>
               </div>

               <div className='form-group mt-1'>
                   <input type="submit" value="Update Contact" className='btn btn-block btn-dark btn btn-primary mt-2' />
               </div>
               <div className='form-group mt-1'>
               <Link to="/" className="btn btn-danger btn-secondary ml-3 mt-2 mb-2">Cancel</Link>
               </div>
           </form>
       </div>
   </div> 
   </>
  ) : ( 
    <h1 classname="display-3 my-5 text-center">
        Contact {id} does not exists
    </h1>
)
  }
</div>
  );
};

export default Edit