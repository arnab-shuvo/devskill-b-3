import react_dom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistore } from "./store/store";
import { BrowserRouter } from "react-router-dom";
react_dom.render(
  <Provider store={store}>
    <PersistGate persistor={persistore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
