import React, {Component} from 'react';
import Product from "./Product";
import {connect} from "react-redux";

class ListProduct extends Component {
    render() {
        console.log("Mock data: ", this.props.products);
        let elementProduct = this.props.products.map((product, index) => {
            return <Product key={index} renderProduct={product}/>
        })
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {elementProduct}
                    </div>
                </div>
            </div>
        );
    }
}

// map sate to props: kết nối state trong store của app với props trên component
const mapStateToProps = (state) => {
    return {
        products: state.listProduct,
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ListProduct);