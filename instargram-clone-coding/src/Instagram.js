
import SideMenu from "./SideMenu";
import Main from "./Main";
import './styles/Instagram.scss';

function Instagram() {
    
    return(
        <div className="Instargram">
            <div className="grid_left"><SideMenu /></div>
            <div className="grid_center"><Main /></div>
        </div>
    );
}

export default Instagram;