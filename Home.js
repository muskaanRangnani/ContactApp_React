import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

const Home = () => {

  const contact = useSelector(state => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({type:"DELETE_CONTACT", payload:id});
    toast.success("Contact deleted sucessfully!");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-10 mt-5 text-end '>
          <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
        </div>
        <div className='col-md-10 mx-auto mt-5'>
        <table className="table table-hover">
          <thead className="text-white bg-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              contact.map((contact,id) =>(
                <tr key={id}>
                  <td>{id+1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link to={`/edit/${contact.id}`} params={{id: contact.id}} className="btn btn-small btn-primary mr-2">Edit</Link>
                    <button type="button" className="btn btn-small btn-danger mx-2" onClick={() => deleteContact(contact.id)}>Delete</button>
                  </td>
                </tr>
              ) 
              )
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Home