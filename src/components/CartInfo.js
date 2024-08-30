import React, { Component } from 'react';

class CartInfo extends Component {
    renderEmptyCartInfo = () => {
        return (
            <tr>
                <th colSpan={6} className="text-center">Empty product in your cart</th>
            </tr>
        );
    };

    render() {
        let { renderCount, renderTotal } = this.props;

        if (renderCount > 0) {
            return (
                <tfoot id="my-cart-footer">
                <tr>
                    <td colSpan={4}>
                        There are <b>{renderCount}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {renderTotal} USD
                    </td>
                </tr>
                </tfoot>
            );
        } else {
            return (
                <tfoot id="my-cart-footer">
                {this.renderEmptyCartInfo()}
                </tfoot>
            );
        }
    }
}

export default CartInfo;
