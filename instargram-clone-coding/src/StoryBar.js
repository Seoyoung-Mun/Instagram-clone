import ProfileIcon from "./ProfileIcon";
import HorizontalScroll from 'react-horizontal-scrolling';

function StoryBar(){

    return(
        <div>
            <HorizontalScroll className="scroll" reverseScroll={true}>
                
            </HorizontalScroll>
            인친 프로필
            <ProfileIcon />
        </div>
    );
}

export default StoryBar;