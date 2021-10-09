import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { UserContextProvider } from "./contexts/UserContext";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
