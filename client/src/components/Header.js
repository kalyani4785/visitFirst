import React from "react";
import logo from "./logo.png";


function Header()
{
    return(
 <div id="header-container">
 <div id="header" class="row">
    <div  id="header-logo" class="col-2"> 
       <img src={logo} id="header-img" />
     </div>
  <div id="header-text"  class="col-6">
        <h1 style={{color:"white",fontFamily: "'Berkshire Swash', cursive",fontSize:"8em",position:"absolute",right:0}}  >visitFirst</h1>
  </div>
  <div class="col-2 "  >
  <a id="header-button"  class="btn" style={{bottom:"5%" ,right:"2%"}} href="https://docs.google.com/document/d/1By6kaPKucAwuhO6IDKmxdStg59wExpWNtxeqZo4cg34/edit"  target="_blank" >About Developer</a>
  </div>
  <div class="col-2">
  {/* "<button id="header-button" style={{bottom:"10%" ,left:"2%"}}>About Developer</button>" */}
  </div>

</div>
</div>
    )

}
export default Header;