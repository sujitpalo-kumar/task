import React, { Fragment } from "react";

class Greetingtwo extends React.Component{
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
    }
    //updatemessage
    updatemessage = (value) =>{
        this.setState({
            message: value,
        })
    };
    render(){
        return(
            <Fragment>
                <div>
                    <div className="card m-4">
                        <div className="card-body">
                            <p  className="h3">{this.state.message}</p>
                            <button onClick={this.updatemessage.bind(this,"good morning") } className="btn btn-success btn-sm">good morning</button>
                            <button onClick={this.updatemessage.bind(this,"good afternoon") } className="btn btn-danger btn-sm">good afternoon</button>
                            <button onClick={this.updatemessage.bind(this,"good evening") } className="btn btn-warning btn-sm">good evening</button>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Greetingtwo;