import React from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import Notify from "./Notify";
import CartInfo from "./CartInfo";

const Cart = ({carts}) => {
    // Tạo danh sách các mục trong giỏ hàng
    const elementCarts = carts.map((cart, index) => (
        <CartItem key={cart.product.productId} renderCart={cart} stt={index + 1}/>
    ));

    // Tính tổng số lượng sản phẩm và tổng giá trị
    const p_count = carts.length;
    const total = carts.reduce((total, cart) => total + cart.product.price * cart.quantity, 0);

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">Giỏ hàng của bạn</h1>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th width="4%">#</th>
                            <th>Sản phẩm</th>
                            <th width="15%">Giá</th>
                            <th width="4%">Số lượng</th>
                            <th width="20%">Tổng cộng</th>
                            <th width="25%">Thao tác</th>
                        </tr>
                        </thead>
                        <tbody id="my-cart-body">
                        {elementCarts.length > 0 ? elementCarts : (
                            <tr>
                                <td colSpan="6">Giỏ hàng trống</td>
                            </tr>
                        )}
                        </tbody>
                        <tfoot id="my-cart-footer">
                        <CartInfo renderCount={p_count} renderTotal={total}/>
                        </tfoot>
                    </table>
                </div>
            </div>
            <Notify/>
        </div>
    );
}

// Kết nối component với Redux store
const mapStateToProps = (state) => ({
    carts: state.cart
});

export default connect(mapStateToProps)(Cart);