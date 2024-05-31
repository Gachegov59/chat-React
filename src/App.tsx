import { FC } from "react";
import { AppRouter } from "./Router";
import { BrowserRouter as Router } from "react-router-dom";

// import './styles/index.scss';
const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
