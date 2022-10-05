
import StoryBar from "./StoryBar";
import Contents from "./Contents";
import Profiles from "./Profiles";



function Main() {

    return(
        <div className="Main">
            <div className="grid center-top"><StoryBar></StoryBar></div>

            <div className="grid center"><Contents></Contents></div>

            <div className="grid side-left"><Profiles></Profiles></div>
        </div>
    );
}

export default Main;