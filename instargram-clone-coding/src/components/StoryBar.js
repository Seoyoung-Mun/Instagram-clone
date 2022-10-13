import HorizontalScroll from 'react-horizontal-scrolling';
import "../styles/StoryBar.scss";
import Story from "./Story";

function StoryBar(){

    return(
        <div className="StoryBar">

            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story /><Story /><Story /><Story /><Story />
                <Story /><Story /><Story /><Story /><Story />
            </HorizontalScroll>

        </div>
    );
}

export default StoryBar;