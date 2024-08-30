import React, {Component} from 'react';
import {connect} from 'react-redux';
import {act_remove_item, act_update_item} from "../actions";

class CartItem extends Component {
    // Khởi tạo state để lưu trữ số lượng sản phẩm
    state = {
        quantity: this.props.renderCart.quantity
    };

    // Xử lý khi số lượng thay đổi
    handleQuantityChange = (e) => {
        this.setState({quantity: parseInt(e.target.value)});
    }

    // Xử lý khi nhấn nút Update
    handleUpdate = (e) => {
        e.preventDefault();
        this.props.actUpdateItem(this.props.renderCart.product, this.state.quantity);
    }

    // Xử lý khi nhấn nút Delete
    handleDelete = (e) => {
        e.preventDefault();
        this.props.actRemoveItem(this.props.renderCart.product);
    }

    render() {
        let {renderCart, stt} = this.props;
        return (
            <tr>
                {/* Số thứ tự sản phẩm */}
                <th scope="row">{stt}</th>
                {/* Tên sản phẩm */}
                <td>{renderCart.product.name}</td>
                {/* Giá sản phẩm */}
                <td>{renderCart.product.price} USD</td>
                {/* Input để nhập số lượng */}
                <td>
                    <input
                        name={`cart-item-quantity-${stt}`}
                        type="number"
                        value={this.state.quantity}
                        onChange={this.handleQuantityChange}
                        min={1}
                    />
                </td>
                {/* Tổng giá của sản phẩm (số lượng * đơn giá) */}
                <td>
                    <strong>{renderCart.product.price * this.state.quantity} USD</strong>
                </td>
                {/* Nút Update và Delete */}
                <td>
                    <a
                        className="label label-info update-cart-item"
                        href="#"
                        onClick={this.handleUpdate}
                        data-product={renderCart.product.id}
                    >
                        Update
                    </a>
                    <a
                        className="label label-danger delete-cart-item"
                        href="#"
                        onClick={this.handleDelete}
                        data-product={renderCart.product.id}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    }
}

// Kết nối các action creators với component
const mapDispatchToProps = (dispatch) => {
    return {
        actRemoveItem: (product) => dispatch(act_remove_item(product)),
        actUpdateItem: (product, quantity) => dispatch(act_update_item(product, quantity))
    };
};

// Kết nối component với Redux store
export default connect(null, mapDispatchToProps)(CartItem);