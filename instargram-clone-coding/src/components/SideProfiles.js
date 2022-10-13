import Sticky from "react-sticky-el";
import ProfileIcon from "./ProfileIcon";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile1.jpeg";
import '../styles/SideProfiles.scss';
import {router} from "react-router-dom";

function SideProfiles (){

    return(
        <div className="SideProfiles">
            <Sticky topOffset={-80}>
                <div className="SideProfiles">
                    <Profile 
                        username="Seoyoung_Mun" 
                        caption="文 瑞 英 (ᴍᴀʀʏ)" 
                        urlText="전환" 
                        // 안되면 수정하기
                        iconSize="big" 
                        image={image}
                    />
                    <Suggestions />
                    <Footer />
                    {/* <ProfileIcon iconSize="big" image={image} storyBorder={true}/> */}

                </div>
            </Sticky>
            
            
        </div>
    );
}

export default SideProfiles;