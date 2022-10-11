import ProfileIcon from "./ProfileIcon";

function SideMenu(){

    return(
        <div className="SideMenu">
            <div className="logo_wrap">
                <img src="img/text_logo.png" alt="logo" className="logo"/> 
                {/* 10.5에 배운 Link 주거나 해서 이동하기 */}
            </div>

            <div className="SideMenu_wrap">
                <div className="Icon_wrap">
                    <img src="img/home_black.png" alt="home"/>
                    <div>홈</div>
                </div>
                <div className="Icon_wrap">
                    <img src="img/search.png"  alt="search"/>
                    <div>탐색 탭</div>
                </div>
                <div className="Icon_wrap">
                    <img src="img/send.png" alt="send"/>
                    <div>메시지</div>
                </div>
                <div className="Icon_wrap">
                    <img src="img/heart.png" alt="heart" />
                    <div>알림</div>
                </div>
                <div className="Icon_wrap">
                    <img src="img/post.png" alt="post"/>
                    <div>만들기</div>
                </div>
                <div className="Icon_wrap">
                    <ProfileIcon />
                    <img src="img/profile1.jpeg" alt="profile" className="profile"/>
                    <div>프로필</div>
                </div>
            </div>

            <div className="addIcon">
                <img src="img/home.png" alt="menu"/>
                <div>더 보기 이미지</div>
            </div>

            </div>
        
    )
}

export default SideMenu;