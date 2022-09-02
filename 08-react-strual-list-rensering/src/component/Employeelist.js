import React, { Fragment } from "react";

class Employesslist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            employees : [
                {
                    id : 101,
                    name : 'Rajan',
                    age : 25,
                    designation : 'Software Engineer',
                },
                {
                    id : 102,
                    name : 'Mahesh',
                    age : 28,
                    designation : 'Sr.Software Engineer',
                },
                {
                    id : 103,
                    name : 'John',
                    age : 45,
                    designation : 'Project Manager',
                },
                {
                    id : 104,
                    name : 'Wilson',
                    age : 55,
                    designation : 'Director',
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Employee info</p>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table  text-center ">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Employee id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.map((item)=>{
                                            return(
                                                <tr>
                                                     <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.designation}</td>
                                                </tr>
                                               
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }


}
export default Employesslist;