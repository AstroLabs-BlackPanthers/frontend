import React, { useContext } from 'react';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';
import Card from "./Card";


function ProfileScreen() {

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    return (
        <div className="container py-5" style={{maxWidth: 600, minHeight: "calc(100vh - 112px)"}}>
            <h1 class="text-center">My Profile</h1>
            <br></br>

    <div className="card mb-4" style={{"width": '40em'}}>
      <img src={avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <p className="card-text">
          <b>Email:</b> {'\t'} {email} <br />
        </p>
        {/* <a href="#" className="btn btn-success">{props.buttonLabel}</a> */}
      </div>
    </div>    
        </div>  
    )
}

export default ProfileScreen;