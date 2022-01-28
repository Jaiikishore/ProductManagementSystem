import React, { Component } from 'react';
//import { withAlert } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic';
//import { Dialog } from '@material-ui/core';
import Modal from './MyVerticallyCenteredModal';
// import { Button , Modal} from 'react-bootstrap';

import ProductService from '../services/ProductService';
import edit from './edit.png';
import delete1 from './delete.png';
import plus from './plus.png';
//import search1 from './search.png';


class ListProductComponents extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            products : [],
            filterProducts:[],
            modalShow : false,
            search : ""
         }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.getProduct = this.getProduct.bind(this);
    }
    getProduct() {
        ProductService.getProducts().then((res) => {
        this.setState(
            { products: res.data,
            filterProducts:res.data
        });
    });

    }
    editProduct(prodId){
        this.props.history.push(`/update-product/${prodId}`);
    }

    deleteProduct(prodId){
        ProductService.deleteProduct(prodId).then((res) => {
            this.setState(
                { filterProducts: this.state.products.filter(product => product.prodId !== prodId),
                  products: this.state.products.filter(product => product.prodId !== prodId)});
        });
    }
    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState(
                { products: res.data,
                filterProducts:res.data
            });
        });
    }
    

    

    addProduct(){
        this.props.history.push('/add-product');
    }
    
    /*filterData()
    {
        var text=this.state.search;
        text=text.toLowerCase();
       if(this.state.search)
       {
        this.setState({ filterProducts: this.state.products.filter(product => {
            var text2 = product.prodName.toLowerCase();
            return text2.indexOf(text) > -1;

        })});
       } 
       else
       {
        this.setState({filterProducts:this.state.products});
       }
    }*/


    render() {
        /*const {search} = this.state;
        const filteredNames = this.state.prodName.filter( products =>{
            return products.prodName.toLowerCase().indexOf(search.toLowerCase() ) !== -1
        })*/

        return ( 
            <div>
                <h2 className='text-center text-primary'style={{marginTop: "15px"}}>PRODUCTS LIST</h2>
                    {/*<button className='btn shadow-sm btn-success d-flex align-items-center' width={30} onClick={this.addProduct} style={{marginBottom: "15px"}}><img style={{margin:"5px"}} className="justify-content-left" src={plus} width={20} alt=""/>
                        ADD PRODUCT
                    </button>*/}
                    <button className='btn shadow-sm btn-success d-flex align-items-center' width={30} onClick={() => {this.setState({ modalShow: true});}} style={{marginBottom: "15px"}}><img style={{margin:"5px"}} className="justify-content-left" src={plus} width={20} alt=""/>
                        ADD PRODUCT
                    </button>

                    <Modal
                      show={this.state.modalShow}
                      onClose={() => {this.setState({ modalShow: false});}}
                      onSuccess={() => {this.getProduct();}}
                    />

                <div className='row'>
                    <form >
                        <div className = "form-group" >
                            <input placeholder="search name" className="form-control" value={this.state.search} onChange={(e) => {
                                // console.log(e.target.value)
                                this.setState({search:e.target.value},()=>{this.filterData();});
                                
                            }}/>
                            {/* <button className="btn btn-primary float-right justify-content-end" width={15} type="submit" onClick={this.updateProduct}><img className="justify-content-left"src={search1} width={15} alt=""/></button>       */}
                        </div>
                    </form>
                </div>
                
                <div className="row" style={{marginTop:"40px"}}>
                    <table className='table table-striped table-bordered'style={{marginBottom: "75px"}}>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Unit Cost</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filterProducts.map(
                                    product =>
                                    <tr key={product.prodId}>
                                        <td>{product.prodId}</td>
                                        <td>{product.prodName}</td>
                                        <td>{product.unitCost}</td>
                                        <td>
                                            <button style={{marginleft:"10px"}} onClick={() => this.editProduct(product.prodId)} className='btn btn-default'>
                                                <img src={edit} width={25} alt=""/>
                                                </button>
                                            <button style={{marginleft:"10px"}} onClick={() => this.deleteProduct(product.prodId)} className='btn btn-default'>
                                                <img src={delete1} width={27} alt=""/>
                                                </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>



            </div>
         );
    }
}
 
export default ListProductComponents;