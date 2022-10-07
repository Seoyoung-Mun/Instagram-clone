
import StoryBar from "./StoryBar";
import Contents from "./Contents";
import Profiles from "./Profiles";



function Main() {

    return(
        <div className="Main">
            <div className="center-top"><StoryBar></StoryBar></div>

            <div className="center"><Contents></Contents></div>

            <div className="side-left"><Profiles></Profiles></div>
        </div>
    );
}

export default Main;