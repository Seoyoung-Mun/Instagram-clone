import "../styles/Suggestions.scss";
import Profile from "./Profile";

function Suggestions () {
    return (
        <div className="Suggestions">
            <div className="titleContainer">
                <div className="title">회원님을 위한 추천</div>
                <a href="/">모두 보기</a>
            </div>
            <Profile caption="m0_0n.sy님 외 3명이 팔로우합니다" urlText="팔로우" iconSize="medium" captionSize="small"/>
            <Profile caption="candy_bar님 외 1명이 팔로우합니다" urlText="팔로우" iconSize="medium" captionSize="small"/>
            <Profile caption="hoho5050님이 팔로우합니다" urlText="팔로우" iconSize="medium" captionSize="small"/>
            <Profile caption="Instagram 신규 가입" urlText="팔로우" iconSize="medium" captionSize="small"/>
            <Profile caption="회원님을 팔로우합니다." urlText="팔로우" iconSize="medium" captionSize="small"/>
        </div>
    )
}

export default Suggestions;