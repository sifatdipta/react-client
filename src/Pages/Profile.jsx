import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Landscape from "../components/Landscape/Landscape";
import User from "../components/User/User";
import './Profile.scss';

const Profile = () => {
    const [gallery, setGallery] = useState([]);

    const getGallery = () => {
        axios
        .get(`${process.env.REACT_APP_API_UR}/landscapes`)
        .then(res => setGallery(res.data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getGallery();
    }, []);

    return (
        <section>
            <User />
            <div className="profile">
                {
                    gallery.map((landscape, i) => {
                        return (<Landscape data={landscape} key={i}/>);
                    })
                }
            </div>
        </section>
    );
}

export default Profile;