import AppRoutes from "./Routes";


import { LoginPage } from "./pages/Login/LoginPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginPage /> */}
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
