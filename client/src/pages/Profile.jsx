import { useParams } from "react-router-dom";

const Profile = () => {
    const username = useParams('username');

    return (
        <h1>Hello {username.username}</h1>
    )
}

export default Profile;