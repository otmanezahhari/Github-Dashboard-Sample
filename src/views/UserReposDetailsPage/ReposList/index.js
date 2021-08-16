import { useSelector, useDispatch} from "react-redux";
import { withRouter } from "react-router";

import { getLanguageURl,setSpecificRepos } from "services/redux/Actions"; 

import "./style.scss";
const ReposList = (props)=>{
  const  dispatch = useDispatch();
  const getUserRepos = useSelector(state => state.Repos);
  const {Repos} = getUserRepos;

  const DisplayReposDetail = (repos)=>{
    dispatch(getLanguageURl(repos.languages_url));
    dispatch(setSpecificRepos(repos))
    props.history.push('/repos-details');
  }

  if(Repos && Repos.length>0){
    return(
      Repos.map((RepoData)=>(
        <div key={RepoData.id} className="repo-box-info row align-items-center" onClick = {()=>DisplayReposDetail(RepoData)}>
          <div className="box-img">
            <img src="https://img.icons8.com/ios/50/000000/repository.png"/>
          </div>
          <h3 className="h3">
            {RepoData.name}
          </h3>
        </div>
      ))
    )
  }else{
    return(
      <span>Not Found</span>
    )
  }
  

}

export default withRouter(ReposList);