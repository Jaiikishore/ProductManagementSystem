import React, { Component } from 'react';
import { Modal} from 'react-bootstrap';
import ProductService from '../services/ProductService';

class MyVerticallyCenteredModal extends Component  {

  constructor(props) {
    super(props);
    this.state = {
        prodName: '',
        unitCost: '',
    }
    this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
    this.changeUnitCostHandler = this.changeUnitCostHandler.bind(this);
    //this.saveOrUpdateProduct =this.saveOrUpdateProduct.bind(this);
}
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName, unitCost: this.state.unitCost};
        //console.log('product => ' + JSON.stringify(product));
        
        ProductService.createProduct(product).then(() =>{
            // this.props.history.push('/products');
            console.log(this.props);
            this.props.onClose();
            this.props.onSuccess();
            console.log(this.props);
            
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    changeProductNameHandler= (event) => {
        this.setState({prodName: event.target.value});
    }
    changeUnitCostHandler= (event) =>{
        this.setState({unitCost: event.target.value});
    }
    cancel(){
        //this.props.history.push('/products');
        this.props.onClose();
    }
   render(){
    return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
{/*           <Modal.Header closeButton>
          </Modal.Header> */}
          <Modal.Body>
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
                                    <button className="btn shadow-sm btn-success" onClick={this.saveOrUpdateProduct.bind(this)}>Save</button>
                                    <button className="btn shadow-sm btn-danger" onClick={this.cancel.bind(this)} style={{margin: "15px"}}>Cancel</button>
                                </form>
                            </div>
          </Modal.Body>
        </Modal>
      );
   } 
    
  }
export default MyVerticallyCenteredModal; 