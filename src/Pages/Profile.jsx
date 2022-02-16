import Landscape from "../components/Landscape/Landscape";
import User from "../components/User/User";

const Profile = () => {
    return (
        <section>
            <User />
            <div className="landscapeps">
                <Landscape />
            </div>
        </section>
    );
}

export default Profile;