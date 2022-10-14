import '../styles/Story.scss'
import ProfileIcon from './ProfileIcon';
import users from '../data/users';

function Story (){
    
    let accountName = users[Math.floor(Math.random() * users.length)].username;
    // 스토리바 창에 username이 10자 이상일때 10자 초과글자부터 ...표시
    if (accountName.length > 10) {
        accountName = accountName.substring(0, 10) + "...";
    }

    return (
        <div className='Story'>
            <ProfileIcon iconSize="big" storyBorder={true}/>
            <span className='accountName'>{accountName}</span>
        </div>
    );
}

export default Story;