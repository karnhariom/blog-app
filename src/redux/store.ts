import { configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";


// const persistConfig = {
//     key: "auth",
//     storage: storage,
//     whitelist: ["auth"],
//     blacklist: [],
//     transforms: [
//         encryptTransform({ secretKey: "my-secret-key" }),
//     ],
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    middleware: (): any => [thunk],
})

const persistor = persistStore(store);

export { store, persistor };