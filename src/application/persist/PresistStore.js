import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import Reducers from "../reducers/index";
export const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["RX_AUTH", "RX_REPOSITORY"], // which reducer want to store
    transforms: [
        encryptTransform({
            secretKey:  process.env.REACT_APP_ENCRYPT_SECRET_KEY,
            onError: function (error) {
                console.error(error);
            },
        }),
    ],
};

export const persist = persistReducer(persistConfig, Reducers);