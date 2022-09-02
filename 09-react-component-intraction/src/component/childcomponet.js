import React from "react";


class Childcomponet extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            data:'im from child'
        }
    }
    clickbut = ()=>{
        this.props.pushdata(this.state.data);
    }
    render(){
        return(
            <div>
                <div className="card m-3">
                    <div className="card-body">
                        <p className="h4">child componet</p>
                        <p className="h3">from parent:{this.props.message}</p>
                        <button onClick={this.clickbut} classNamebtn btn-success>send</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Childcomponet;