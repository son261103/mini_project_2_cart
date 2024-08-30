import * as types from "../constants/actionTypes";

// Action để lấy danh sách sản phẩm
export const act_list_product = () => ({
    type: types.LIST_PRODUCT
});

// Action để thêm sản phẩm vào giỏ hàng
export const act_buy_item = (product, quantity) => ({
    type: types.BUY_ITEM,
    product,
    quantity
});

// Action để cập nhật số lượng sản phẩm trong giỏ hàng
export const act_update_item = (product, quantity) => ({
    type: types.UPDATE_ITEM,
    product,
    quantity
});

// Action để xóa sản phẩm khỏi giỏ hàng
export const act_remove_item = (product) => ({
    type: types.REMOVE_ITEM,
    product
});

// Action để thay đổi thông báo
export const act_change_notify = (message) => ({
    type: types.CHANGE_NOTIFY,
    message
});