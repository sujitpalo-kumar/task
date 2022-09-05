import React from "react";
import ContactList from "./contactlist";
import ContactCard from "./contactcard";
import Axios from "axios";

class ContactApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts : null,
            errorMessage : null,
            selectedContact : null
        }
    }

    pullContact = (contact) => {
        this.setState({
            selectedContact : contact
        });
    };

    componentDidMount() {
        let dataURL = 'https://gist.githubusercontent.com/sujitpalo-kumar/2e3ed0b5dd23ddc3c65d80c626fa9017/raw/2b34118ce41ee4b694ae16f47b7272c4b0eb2032/emps-git.json';
        Axios.get(dataURL).then((response) => {
            this.setState({
                contacts : response.data
            });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    }

    render() {
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Contact App</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate debitis deleniti distinctio, dolor ipsam, molestias odio quasi quia, quo quos reprehenderit rerum sed tempore totam vel velit vero voluptates!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            {
                                this.state.contacts ?
                                    <React.Fragment>
                                        <ContactList contacts={this.state.contacts} pushContact={this.pullContact}/>
                                    </React.Fragment> : null
                            }
                        </div>
                        <div className="col-md-3">
                            <ContactCard selectedContact={this.state.selectedContact}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ContactApp;
