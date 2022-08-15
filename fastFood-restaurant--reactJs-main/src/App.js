import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Register from './components/Register/Register';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
