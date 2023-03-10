import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Add = () => {
  
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const contact = useSelector(state => state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contact.find(contact => contact.email === email );

        const checkNumber = contact.find((contact) => contact.number === parseInt(number) );

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
            id:contact[contact.length -1].id +1,
            name,
            email,
            number
        };

        dispatch({type : "ADD-CONTACT", payload:data});
        toast.success("Contact added successfully!");
        navigate("/");

    };
   

    return (
    <div className='container'>
         <h1 className='display-3 my-5 text-center'>Add Contact</h1>
        <div className='row'>
            <div className='col-md-6 shadow mx-auto pd-7'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mt-1'>
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
                    <div className='form-group mt-3'>
                        <div className="d-grid gap-2 col-6 mx-auto">
                        <input type="submit" value="Add Contact" className='btn btn-block btn-dark' /><br />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Add