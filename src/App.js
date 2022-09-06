import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainContent from "./components/ui/MainContent/MainContent";
import { store } from "./redux/store";

import "antd/dist/antd.min.css";
import "./assets/reset.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
