
import StoryBar from "./StoryBar";
import Contents from "./Contents";
import SideProfiles from "./SideProfiles";



function Main() {

    return(
        <div className="Main">
            <div className="center">
                <StoryBar></StoryBar>
                <Contents></Contents>
            </div>

            <div className="side-left"><SideProfiles></SideProfiles></div>
        </div>
    );
}

export default Main;