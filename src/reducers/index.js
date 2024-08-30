import { combineReducers } from "redux";
import listProduct from "./listProduct";
import cart from "./cart";
import notify from "./notify";

export const reducers = combineReducers({
    listProduct: listProduct,
    cart: cart,
    notify: notify,
});