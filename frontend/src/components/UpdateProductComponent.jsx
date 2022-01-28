import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prodId: this.props.match.params.prodId,
            prodName: '',
            unitCost: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeUnitCostHandler = this.changeUnitCostHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.prodId).then( (res) =>{
            let product = res.data;
            this.setState({prodName: product.prodName,
                unitCost: product.unitCost
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName, unitCost: this.state.unitCost};
        console.log('product => ' + JSON.stringify(product));
        //console.log('prodId => ' + JSON.stringify(this.state.prodId));
        ProductService.updateProduct(product, this.state.prodId).then( res => {
            this.props.history.push('/products');
        });
    }
    
    changeProductNameHandler= (event) => {
        this.setState({prodName: event.target.value});
    }

    changeUnitCostHandler= (event) => {
        this.setState({unitCost: event.target.value});
    }

    cancel(){
        this.props.history.push('/Products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center text-primary" style={{marginTop: "15px"}}>UPDATE PRODUCT</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="prodName" className="form-control" 
                                                value={this.state.prodName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Unit Cost: </label>
                                            <input placeholder="Unit Cost" name="unitCost" className="form-control" 
                                                value={this.state.unitCost} onChange={this.changeUnitCostHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent