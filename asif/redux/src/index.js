import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store/store.js";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
