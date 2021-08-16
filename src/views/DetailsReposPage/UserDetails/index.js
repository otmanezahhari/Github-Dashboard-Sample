import { useSelector} from "react-redux";
import UserImage from "components/UserImage";
import "./style.scss";
const UserDetails = () =>{

  const satate = useSelector(state => state.Repos);
  const {Username, Repos} = satate;
  console.log(Repos)
  return(
    <div className="info-user row align-items-center">
      <UserImage 
          src={`https://avatars.githubusercontent.com/${Username}`} 
          alt={Username}
      />
      <div className="box-info-user">
        <h2 className="h2">{Username}</h2>
        <h3 className="h3">{`https://api.github.com/users/${Username}`}</h3>
      </div>
    </div>
  )
}

export default UserDetails;