import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { ClickContext, ClickContextProvider } from "./contexts/ClickContext";
import { UserContextProvider } from "./contexts/UserContext";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <ClickContextProvider>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </ClickContextProvider>
    </BrowserRouter>
  );
}

export default App;
