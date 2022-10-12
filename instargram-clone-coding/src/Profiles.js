import ProfileIcon from "./ProfileIcon";
import image from "./images/profile1.jpeg"
function Profiles (){

    return(
        <div>
            <ProfileIcon iconSize="big" image={image} storyBorder={true}/>
            여기는 Profile
        </div>
    );
}

export default Profiles;