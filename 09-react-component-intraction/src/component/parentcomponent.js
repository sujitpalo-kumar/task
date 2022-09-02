import React from "react";
import Childcomponet from "./childcomponet";

class Parentcomponet extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:'iam from parent',
            text :''
        }
    }
    pulldata=(data)=>{
        this.setState({
            text:data
        })
    }
    render() {
        return(
            <div>
                <div className="card m-3">
                    <div className="card-body">
                        <p className="h4">parent componrt</p>
                        <p> from child: {this.state.text}</p>
                        <Childcomponet message={this.state.message} pushdata={this.pulldata}/>
                    </div>
                </div>
            </div>
        )
    }

}
export default Parentcomponet;