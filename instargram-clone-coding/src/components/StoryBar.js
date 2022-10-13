import HorizontalScroll from 'react-horizontal-scrolling';
import "../styles/StoryBar.scss";
import Story from "./Story";

function StoryBar(){

    return(
        <div className="StoryBar">
            <div>
            <HorizontalScroll className="scroll" reverseScroll={true}>
            {/* className="scroll" reverseScroll={true} */}
            {/* {renderStory} */}
                <Story /><Story /><Story /><Story /><Story />
                <Story /><Story /><Story /><Story /><Story />
            </HorizontalScroll>
            </div>
        </div>
    );
}

export default StoryBar;