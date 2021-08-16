import { useState } from "react";
import {useDispatch} from "react-redux";
import { withRouter } from "react-router";

import {getReposName} from "services/redux/Actions";

import Button from "components/SearshForms/Button";
import FormInput from "components/SearshForms/FormInput";
import "./style.scss";
const SearchPage = (props) =>{

  const  dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const resetFrom = ()=>{
    setUsername('')
  }

  const handleFormSubmit = (ev)=>{
    ev.preventDefault(); 
    console.log("username", username)
    dispatch(getReposName(username)) ;
    resetFrom();
    props.history.push('/user-details-repos');
  }

  return(
    <div id="search-page">
      
      <form onSubmit={handleFormSubmit}  className="row form-center">

        <FormInput 
          type = "text"
          name = "Username"
          value = {username}
          placeholder= "Username"
          onChange = {ev=>setUsername(ev.target.value.slice().toLowerCase())}
        />
        <div className="box-btn">
          <Button
            type = "submit"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SearchPage);