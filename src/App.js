import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShowFirstPage from "./Containers/ShowFirstPage/ShowFirstPage";
import About from './Pages/AboutUs/About';
import Success from './Pages/Success/Success';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/Notfound';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>

        <BrowserRouter>
         <Navbar/>
         <Switch>
           <Route exact path='/' component={ShowFirstPage} />
           <Route exact path='/about-us' component={About} />
           <Route exact path='/success' component={Success} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/register' component={Register} />
           <Route exact path='*' component={NotFound} />
         </Switch>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
