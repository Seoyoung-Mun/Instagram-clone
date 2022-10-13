import Sticky from "react-sticky-el";
import ProfileIcon from "./ProfileIcon";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile1.jpeg";
import '../styles/SideProfiles.scss';

function SideProfiles (){

    return(
        <div>
            <ProfileIcon iconSize="big" image={image} storyBorder={true}/>
            
        </div>
    );
}

export default SideProfiles;