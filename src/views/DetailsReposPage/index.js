import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { setLanguage } from "services/redux/Actions"; 


import axios from "../../services/api/axios";

import UserDetails from "./UserDetails";
import ReposDetails from "./ReposDetails";

import "./style.scss"

const DetailsReposPage = () =>{
  const getURL = useSelector(state => state.Repos.URL);



  const  dispatch = useDispatch();

  useEffect(()=>{
    async function fetchData(){
      try{
        const request = 
        await axios.get(getURL);
        console.log(request.data)
        dispatch(setLanguage(request.data));
      }
      catch(err){
        console.log("not found")
      }
    }

    fetchData();

  },[getURL])

  return(
    <div id="repos-details-page">
      <div className="content-repos-details-page">
        <UserDetails/>
        <ReposDetails />
      </div>
    </div>
  )


}

export default DetailsReposPage;