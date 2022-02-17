import { useEffect } from 'react';
import axios from 'axios';
import './User.scss';
import { useState } from 'react';

const User = () => {
    const [userData, setUserData] = useState(null);

    const loadUser = () => {
        axios
        .get(`${process.env.REACT_APP_API_UR}/users/1`)
        .then(res => {
            setUserData(res.data);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        loadUser();
    }, []);

    if(userData) {
        return (
            <div className='user'>
                <div className='user__image-container'>
                    <img className='user__image' src={"http://localhost:3000/" + userData.profile_picture} alt="user" />
                </div>
                <div className='user__details'>
                    <h1 className='user__name'>{userData.name}</h1>
                    <p className='user__label'>Bio</p>
                    <p className='user__bio'>{userData.bio}</p>
                </div>
                <div className='user__contact'>
                    <p className='user__label'>Phone</p>
                    <p className='user__cdata'>{userData.phone}</p>
                    <p className='user__label'>Email</p>
                    <p className='user__cdata'>{userData.email}</p>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export default User;