import ProfileIcon from "./ProfileIcon";
import image from "../images/profile1.jpeg"
import '../styles/SideProfiles.scss';

function SideProfiles (){

    return(
        <div>
            <ProfileIcon iconSize="big" image={image} storyBorder={true}/>
            여기는 Profile
        </div>
    );
}

export default SideProfiles;