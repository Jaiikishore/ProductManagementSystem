import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodName: '',
            unitCost: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeUnitCostHandler = this.changeUnitCostHandler.bind(this);
        this.saveOrUpdateProduct =this.saveOrUpdateProduct.bind(this);
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName, unitCost: this.state.unitCost};
        console.log('product => ' + JSON.stringify(product));
        
        ProductService.createProduct(product).then(res =>{
            this.props.history.push('/products');
        })
        /* // step 5
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        } */
    }
    changeProductNameHandler= (event) => {
        this.setState({prodName: event.target.value});
    }
    changeUnitCostHandler= (event) =>{
        this.setState({unitCost: event.target.value});
    }
    cancel(){
        this.props.history.push('/products');
    }
    render(){
        return (
            <div>
                <div className="container"  style={{marginTop: "15px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className='text-center text-primary'>ADD PRODUCT</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Product Name </label>
                                        <input placeholder='Product Name' name='prodName' className='form-control' value={this.state.prodName} onChange={this.changeProductNameHandler}/> 
                                    </div>
                                    <div unitCost="form-group">
                                        <label> Unit Cost </label>
                                        <input placeholder='Unit Cost' name='unitCost' className='form-control' value={this.state.unitCost} onChange={this.changeUnitCostHandler}/> 
                                    </div>
                                    <button className="btn shadow-sm btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                    <button className="btn shadow-sm btn-danger" onClick={this.cancel.bind(this)} style={{margin: "15px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CreateProductComponent;