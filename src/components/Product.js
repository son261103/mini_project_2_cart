import React, { useState } from 'react';
import { connect } from "react-redux";
import { act_buy_item } from "../actions";

const Product = ({ renderProduct, actBuyItem }) => {
    // State để lưu số lượng sản phẩm
    const [quantity, setQuantity] = useState(1);

    // Hàm xử lý khi nhấn nút mua
    const handleBuy = () => {
        actBuyItem(renderProduct, quantity);
    }

    // Hiển thị nút mua hoặc chỉ hiển thị giá tùy thuộc vào số lượng sản phẩm
    const elementBuy = renderProduct.quantity > 0 ? (
        <>
            <input
                name="quantity"
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button className="btn btn-success" onClick={handleBuy}>
                Mua Hàng
            </button>
            <span className="price"> {renderProduct.price} USD</span>
        </>
    ) : (
        <span className="price"> {renderProduct.price} USD</span>
    );

    return (
        <div className="media product">
            <div className="media-left">
                <a href="/#">
                    <img
                        className="media-object"
                        src={`images/characters/${renderProduct.image}`}
                        alt={renderProduct.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{renderProduct.productName}</h4>
                <p>{renderProduct.descriptions}</p>
                {elementBuy}
            </div>
        </div>
    );
}

// Kết nối action với component
const mapDispatchToProps = {
    actBuyItem: act_buy_item
}

export default connect(null, mapDispatchToProps)(Product);