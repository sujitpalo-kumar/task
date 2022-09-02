import React, { Fragment } from "react";

class Productitem extends React.Component{
    constructor(props){
        super()
        this.state = {
            product : {
                sno : 101,
                image : 'https://www.slashgear.com/wp-content/uploads/2020/05/galaxy_watch_review_09-1280x720.jpg',
                name : 'Samsung Watch',
                qty : 2,
                price : 550
            }
        }
    }
    incrqty = () => {
        this.setState({
            product :{
                ...this.state.product,
                qty: this.state.product.qty + 1
            }
        })
    }
    decrqty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty : (this.state.product.qty -1 >0) ? this.state.product.qty-1 : 1

            }
        })
    }
    render(){
        return(
            <Fragment>
                <div>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className=" container mt-3">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover table-light table-striped text-center">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th>SNO</th>
                                            <th>Product image</th>
                                            <th>product name</th>
                                            <th>product qty</th>
                                            <th>product price</th>
                                            <th>product total</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.product.sno}</td>
                                            <td>
                                                <img src={this.state.product.image} width="50" height="50"/>


                                            </td>
                                            <td>{this.state.product.name}</td>
                                            <td>
                                                <i onClick={this.decrqty} className="fa fa-minus mx-1"/>
                                                {this.state.product.qty}
                                                <i onClick={this.incrqty} className="fa fa-plus mx-1"/>
                                            </td>
                                            <td>{this.state.product.price}</td>
                                            <td>{this.state.product.qty*this.state.product.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Productitem;