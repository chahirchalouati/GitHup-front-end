import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { persist } from "./persist/PresistStore";
import httpClient from "./Api";

//httpClient given as object to make api calls
const middlewareWithExtra = [thunk.withExtraArgument(httpClient)];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewareWithExtra)
  // other store enhancers if any
);
const store = createStore(persist, enhancer);
const persistor = persistStore(store);

export { persistor, store };
