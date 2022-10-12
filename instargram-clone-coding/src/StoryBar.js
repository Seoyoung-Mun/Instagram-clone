import ProfileIcon from "./ProfileIcon";
import HorizontalScroll from 'react-horizontal-scrolling';
import "./styles/StoryBar.scss";

function StoryBar(){

    return(
        <div className="StoryBar">
            <div className="StoryBar_wrap">
                <HorizontalScroll className="scroll" reverseScroll={true}>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                    <div className="Story"><ProfileIcon iconSize="big" storyBorder={true}/></div>
                </HorizontalScroll>
            </div>
        </div>
    );
}

export default StoryBar;