import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Provide the Redux store to the application */}
    <PersistGate loading={null} persistor={persistor}>
      {/* Delay rendering until the Redux Persist has rehydrated the state */}
      <App /> {/* Render the main App component */}
    </PersistGate>
  </Provider>
);
