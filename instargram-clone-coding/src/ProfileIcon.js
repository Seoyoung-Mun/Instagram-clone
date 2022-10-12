import './styles/ProfileIcon.scss';

function ProfileIcon (props) {
    const { iconSize, storyBorder, image } = props;
    
    // Pravatar의 1~70개 사이의 임이의 이미지를 가져오기 위해
    function getRandomInt(min, max) {
        min = Math.ceil(min); //올림
        max = Math.floor(max); //소수값 버림
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let randomId = getRandomInt(1, 70);

    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;
    return (

            <div className={storyBorder ? "storyBorder" : ""}>
                <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/>
            </div>

    )
}

export default ProfileIcon;