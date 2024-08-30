import { CHANGE_NOTIFY } from "../constants/actionTypes";
import { MSG_INTRO } from "../constants/messages";

// Khởi tạo state với thông báo mặc định
const initialState = MSG_INTRO;

const notify = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFY:
            // Cập nhật thông báo mới
            return action.message;
        default:
            return state;
    }
}

export default notify;