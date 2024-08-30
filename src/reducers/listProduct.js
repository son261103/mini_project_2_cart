import {LIST_PRODUCT} from "../constants/actionTypes";

// Dữ liệu mẫu cho danh sách sản phẩm
// Trong thực tế, dữ liệu này nên được lấy từ API
const initialState = [
    {
        productId: "P001",
        productName: "aplusautomation",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 12,
        quantity: 10,
        image: "bulbasaur.png"
    },
    {
        productId: "P002",
        productName: "aplus media",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 11,
        quantity: 0,
        image: "charmander.png"
    },
    {
        productId: "P003",
        productName: "robo fig combo",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 15,
        quantity: 5,
        image: "ivysaur.png"
    },
    {
        productId: "P004",
        productName: "target leap frog",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 8,
        quantity: 8,
        image: "squirtle.png"
    }
];

// Reducer cho danh sách sản phẩm
const listProduct = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCT:
            // Trả về danh sách sản phẩm hiện tại
            // Trong trường hợp thực tế, có thể cần xử lý dữ liệu từ API ở đây
            return state;
        // Có thể thêm các case khác để xử lý các action liên quan đến danh sách sản phẩm
        // Ví dụ: thêm sản phẩm mới, cập nhật thông tin sản phẩm, xóa sản phẩm, v.v.
        default:
            // Trả về state hiện tại nếu không có action nào phù hợp
            return state;
    }
}

export default listProduct;