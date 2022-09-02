import React, { Fragment }  from "react";

class Grettingmessage extends React.Component{
    constructor(){
        super();
        this.state={
            message: 'hello'
        }
    }
    // say good morning
    sayGooddmorning= ()=>{
        this.setState({
            message:"good morning"
        })
    }
    //say good aftenoon
    sayGoodafternoon= ()=>{
        this.setState({
            message:"Good afternoon"
        })
    }
    // say good Evening

    saygoodevening = ()=>{
        this.setState({
            message:"Good evening"
        })
    }
    render(){
        return(
            <Fragment>
                <div>
                    <div className="card m-4">
                        <div className="card-body">
                            <p  className="h3">{this.state.message}</p>
                            <button onClick={this.sayGooddmorning} className="btn btn-success btn-sm">good morning</button>
                            <button onClick={this.sayGoodafternoon} className="btn btn-success btn-sm">good afternoon</button>
                            <button onClick={this.saygoodevening} className="btn btn-success btn-sm">good evening</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }


}
export default Grettingmessage