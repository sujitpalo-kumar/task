import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
      <Fragment>
        <div>
          
            <ul>
                <li>
                    <Link to="/signup">signup</Link>
                    
                </li>
                <li><Link to="/modal">modal</Link></li>
            </ul>
        </div>
      </Fragment>
    )
}
export default Home;