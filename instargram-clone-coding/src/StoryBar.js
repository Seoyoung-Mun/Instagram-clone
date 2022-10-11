import ProfileIcon from "./ProfileIcon";
import HorizontalScroll from 'react-horizontal-scrolling';

function StoryBar(){

    return(
        <div>
            <HorizontalScroll className="scroll" reverseScroll={true}>
                
            </HorizontalScroll>
            Story Bar Component
            <ProfileIcon />
        </div>
    );
}

export default StoryBar;