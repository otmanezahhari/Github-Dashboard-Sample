import "./style.scss";

const UserImage = (props)=>(
  <div className="box-img">
    <img 
      className="img" 
      {...props}
    />
  </div>
)

export default UserImage;