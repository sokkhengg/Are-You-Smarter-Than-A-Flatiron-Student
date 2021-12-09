import "semantic-ui-css/semantic.min.css";
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import QuizForm from "./QuizForm";
import AddNewQuestionForm from "./AddNewQuestionForm";
import Leaderboard from "./Leaderboard";
import {
  Grid,
  Checkbox,
  Sidebar,
  Segment,
  Menu,
  Icon,
  Button,
  Statistic,
} from "semantic-ui-react";
import { useState } from "react";
import HomePageText from "./HomePageText";

function App() {
  const [visible, setVisible] = useState(false);


  return (
   <> 
    
      <Grid columns={1}>
        

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="thin"
              direction="right"
            >
              <Statistic.Group widths="three" size="tiny">
                <Statistic size="tiny">
                  <Statistic.Value>
                    <Icon name="money" />
                    &nbsp;&nbsp;100
                  </Statistic.Value>
                  <Statistic.Label>Money Earned</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>
                    <Icon name="checkmark" />
                    &nbsp;&nbsp;5
                  </Statistic.Value>
                  <Statistic.Label>Correct Answers</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>
                    <Icon name="x" />
                    &nbsp;&nbsp;5
                  </Statistic.Value>
                  <Statistic.Label>Wrong/Skipped</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Sidebar>



            <Sidebar.Pusher>
              <Segment basic>
              
                <Logo />
                <Header />
                <NavBar />


                <Switch>

                  <Route path="/" exact>
                    <QuizForm visible={visible} setVisible={setVisible} />
                  </Route>

                  <Route path="/addnewquestionform">
                    <AddNewQuestionForm />
                  </Route>

                  <Route path="/leaderboard">
                    <Leaderboard />
                  </Route>

                </Switch>

                <Footer />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    
 </> );
}

export default App;
