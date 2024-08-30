// // state quản lý giỏ hàng
//
// // chưa mua hàng, giỏ hàng chưa tồn tại
// import {act_buy_item} from "../actions";
// import {LOCAL_STORE_NAME} from "../constants/localStoreName";
//
// let initialState = [];
//
// // sử dụng localStorage để tổ chức lưu trữ giỏ hàng
// const shopingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORE_NAME));
// initialState = ((shopingCartLocal !== null && shopingCartLocal.length > 0) ? shopingCartLocal : initialState);
//
// // Hàm kiểm tra sản phẩm product đã có trong giỏ hàng chưa
// const getIndexByProduct = (listItem, product) => {
//     for (let i = 0; i < listItem.length; i++) {
//         if (listItem[i].product.productId === product.productId) {
//             return i;
//         }
//     }
//     return -1;
// }
//
// // tạo reducer -> cart
// const cart = (state = initialState, action) => {
//     // laasy sản phẩm, số lượng từ action
//     let {product, quantity} = action;
//     let item = {
//         product, quantity
//     };
//     // bin skieerm tra tồn tại của product trong state
//     let index = -1;
//
//     switch (action.type) {
//         case act_buy_item: // trường hợp người dùng nhấn vào nút mua hàng từ component Product
//             if (state.length === 0) {
//                 // khachs hàng chưa mua hàng và giỏ hàng của khashc chưa có sản phẩm nào
//                 // push item với state cart trong store
//                 state.push(item);
//             }else {
//                 // khách hàng đã mua hàng và giỏ hàng đã tồn tại =>
//                 // kiểm tra xem sản phẩm có trong giỏ hàng chưa ? viết hàm kiểm tra = getIndexByProduct
//                 index = getIndexByProduct(state, product);
//                 // TH1: sản phẩm đã có trong giỏ hàng -> tăng số lượng
//                 if (index >= 0) {
//                     // sản phẩm mua da có trong giỏ hàng cập nhật thêm số lượng mua
//                     state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
//                 }else { // TH2: sản phẩm chưa có trong giờ này -> thêm sản phẩm vào giỏ hàng
//                     // sản phâm chưa có thêm vào giỏ hàng
//                     state.push(item)
//                 }
//             }
//             // thực hiện lưu trữ vào localStorage
//             localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state));
//
//             return [...state];
//         default:
//             return state;
//     }
// }
// export default cart;

import {BUY_ITEM, UPDATE_ITEM, REMOVE_ITEM} from "../constants/actionTypes";
import {LOCAL_STORE_NAME} from "../constants/localStoreName";

// Khởi tạo state từ localStorage hoặc mảng rỗng
let initialState = JSON.parse(localStorage.getItem(LOCAL_STORE_NAME)) || [];

// Hàm tìm index của sản phẩm trong giỏ hàng
const getIndexByProduct = (listItem, product) => {
    return listItem.findIndex(item => item.product.productId === product.productId);
};

const cart = (state = initialState, action) => {
    let {product, quantity} = action;
    let newState = [...state];
    let index = -1;

    switch (action.type) {
        case BUY_ITEM:
            index = getIndexByProduct(newState, product);
            if (index >= 0) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                newState[index].quantity += parseInt(quantity);
            } else {
                // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
                newState.push({product, quantity: parseInt(quantity)});
            }
            break;

        case UPDATE_ITEM:
            index = getIndexByProduct(newState, product);
            if (index >= 0) {
                // Cập nhật số lượng sản phẩm
                newState[index].quantity = parseInt(quantity);
            }
            break;

        case REMOVE_ITEM:
            index = getIndexByProduct(newState, product);
            if (index >= 0) {
                // Xóa sản phẩm khỏi giỏ hàng
                newState.splice(index, 1);
            }
            break;

        default:
            return state;
    }

    // Lưu trạng thái mới vào localStorage
    localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(newState));
    return newState;
};

export default cart;
