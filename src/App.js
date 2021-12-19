import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import RequestTab from './Components/RequestTab';
import AppandRej from './Components/AppandRej';
import BranchManger from './Components/BranchManger';
import initializeApp from "firebase/app";
import FormPage from './Components/Login';



function App() {
  return (
    <Router>
      <Route exact path="/">
        <FormPage />
      </Route>
      <Route exact path="/RequestTab">
        <RequestTab />
      </Route>
      <Route path="/AppandRej">
        <AppandRej />
      </Route>
      <Route path="/BranchManager">
        <BranchManger />
      </Route>

    </Router>
  );
}

export default App;
