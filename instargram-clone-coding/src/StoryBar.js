import ProfileIcon from "./ProfileIcon";
import HorizontalScroll from 'react-horizontal-scrolling';
import "./styles/StoryBar.scss";

function StoryBar(){

    return(
        <div className="StoryBar">
            <div className="StoryBar_wrap">
                <HorizontalScroll className="scroll" reverseScroll={true}>
                    <ProfileIcon iconSize="big" storyBorder={true}/>
                    <ProfileIcon iconSize="big" storyBorder={true}/>
                    <ProfileIcon iconSize="big" storyBorder={true}/>
                    <ProfileIcon iconSize="big" storyBorder={true}/>
                    <ProfileIcon iconSize="big" storyBorder={true}/>
                </HorizontalScroll>
            </div>
        </div>
    );
}

export default StoryBar;