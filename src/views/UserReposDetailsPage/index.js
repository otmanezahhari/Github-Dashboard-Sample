import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from "react-router";

import { getCurrentUserRepos } from "services/redux/Actions"; 

import axios from "../../services/api/axios";

import UserInfo from "./UserInfo";
import ReposList from "./ReposList";



const UserReposDetailsPage = () =>{

  const getReposName = useSelector(state => state.Repos.Username);
  
  const  dispatch = useDispatch();

  const Request = `${getReposName}/repos`;

  useEffect(()=>{
    async function fetchData(){
      try{
        const request = 
        await axios.get(Request);
        console.log(request)
        dispatch(getCurrentUserRepos(request.data));
      }
      catch(err){
        console.log("not found")
      }
    }

    fetchData();

  },[getReposName])

  return(
    <div id="user-repos-details-page">
      <UserInfo/>
      <ReposList/>
    </div>
  )
}

export default withRouter(UserReposDetailsPage);