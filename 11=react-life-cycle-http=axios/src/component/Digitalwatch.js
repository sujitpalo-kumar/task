import React from "react";

class DigitalWatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTime : new Date().toLocaleTimeString()
        };
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime : new Date().toLocaleTimeString()
            });
        } , 1000);
    }

    
    

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-center">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Digital Watch</p>
                                </div>
                                <div className="card-body">
                                    <h3 className="display-3">{this.state.currentTime}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default DigitalWatch;
