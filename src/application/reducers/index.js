import { combineReducers } from "redux";
import RX_AUTH from "./RX_AUTH";
import RX_REPOSITORY from "./RX_REPOSITORY";
import RX_CODE from "./RX_CODE";

export default combineReducers({
    RX_AUTH,
    RX_REPOSITORY,
    RX_CODE
});
