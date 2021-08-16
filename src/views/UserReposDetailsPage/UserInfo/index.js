import { useSelector} from "react-redux";
import "./style.scss";

import UserImage from "components/UserImage";

const UserInfo = ()=>{
  const getUserRepos = useSelector(state => state.Repos);
  const {Username} = getUserRepos;

  return(
    
    <div className = "user-info-box" >
      <div className="content-info row align-items-center">
        <UserImage 
           src={`https://avatars.githubusercontent.com/${Username}`} 
           alt={Username}
        />
        <h2 className="name">{Username}</h2>      
      </div>
      
    </div>

  )
}


export default UserInfo;