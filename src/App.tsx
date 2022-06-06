import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./screens/home";



function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
