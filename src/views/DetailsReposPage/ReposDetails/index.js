import { useSelector} from "react-redux";
import "./style.scss";
import Button from "components/SearshForms/Button";


const ReposDetails = () =>{
  const state = useSelector(state => state.Repos);
  const {Username, Language, SpecificRepos} = state;
  
  const GoToGithubLink = ()=>{
    const Link = `https://github.com/${Username}/${SpecificRepos.name}`
    window.open(Link) 
  }
  

  return(
    <div className="repos-detail-content" >
      <div className="title">
        <h2 className="h2">{SpecificRepos.name}</h2>
        {Object.keys(Language) && Object.keys(Language).length>0 ?  Object.keys(Language).map((elem,index)=><span key={index} className="elem">{elem}</span>) : '' }
      </div>
      <div className="description">
          {SpecificRepos.description}
      </div>
      <div className="other-information">
        <div className="information-date">
          <p className="p">Created At : <span>{SpecificRepos.created_at}</span></p>
          <p className="p">Pushed at At : <span>{SpecificRepos.pushed_at}</span></p>
          <p className="p">Updated at At : <span>{SpecificRepos.updated_at}</span></p>

        </div>

        <Button onClick= {GoToGithubLink}>
          Details
        </Button>
      </div>
    </div>

  )
}

export default ReposDetails;