import 'semantic-ui-css/semantic.min.css';
import Header from "./Header"
import Logo from './Logo';
import Footer from './Footer';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import QuizForm from './QuizForm';



function App() {

  return (
   <div>
    <Logo />
    <Header />
    <NavBar />

    <Switch>

        <Route path="/app">
          <App />
        </Route>

        <Route path="/quizform">
          <QuizForm />
        </Route>

      </Switch>
      
    <Footer />
      
   </div>
  );
}

export default App;


