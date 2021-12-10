import "semantic-ui-css/semantic.min.css";
import { Grid, Sidebar, Segment, Menu, Icon, Statistic } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import NavBar from "./NavBar";
import QuizForm from "./QuizForm";
import AddNewQuestionForm from "./AddNewQuestionForm";
import Leaderboard from "./Leaderboard";

function App() {
  const [visible, setVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
    category: "",
    value: 0,
  });
  const [playerStat, setPlayerStat] = useState({
    money: 0,
    correct: 0,
    wrong: 0,
    answered: 0,
  });

  return (
    <>
      <Grid columns={1} columns="equal" textAlign="center">
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              vertical
              visible={visible}
              width="wide"
              direction="right"
            >
              <Grid columns="equal">
                <br />
                <br />
                <br />

                {playerStat.money >= 1 ? (
                  <Statistic size="medium" color="green">
                    <Statistic.Value>
                      <Icon name="money" />
                      &nbsp;&nbsp;{playerStat.money}
                    </Statistic.Value>
                    <Statistic.Label>Money Earned</Statistic.Label>
                  </Statistic>
                ) : (
                  <Statistic size="medium">
                    <Statistic.Value>
                      <Icon name="money" />
                      &nbsp;&nbsp;{playerStat.money}
                    </Statistic.Value>
                    <Statistic.Label>Money Earned</Statistic.Label>
                  </Statistic>
                )}

                <br />
                <br />

                {playerStat.correct >= 1 ? (
                  <Statistic size="medium" color="green">
                    <Statistic.Value>
                      <Icon name="checkmark" />
                      &nbsp;&nbsp;{playerStat.correct}
                    </Statistic.Value>
                    <Statistic.Label>Correct Answers</Statistic.Label>
                  </Statistic>
                ) : (
                  <Statistic size="medium">
                    <Statistic.Value>
                      <Icon name="checkmark" />
                      &nbsp;&nbsp;{playerStat.correct}
                    </Statistic.Value>
                    <Statistic.Label>Correct Answers</Statistic.Label>
                  </Statistic>
                )}

                <br />
                <br />

                {playerStat.wrong >= 1 ? (
                  <Statistic size="medium" color="red">
                    <Statistic.Value>
                      <Icon name="x" />
                      &nbsp;&nbsp;{playerStat.wrong}
                    </Statistic.Value>
                    <Statistic.Label>Wrong/Skipped</Statistic.Label>
                  </Statistic>
                ) : (
                  <Statistic size="medium">
                    <Statistic.Value>
                      <Icon name="x" />
                      &nbsp;&nbsp;{playerStat.wrong}
                    </Statistic.Value>
                    <Statistic.Label>Wrong/Skipped</Statistic.Label>
                  </Statistic>
                )}
              </Grid>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Logo />
                <Header />
                <NavBar />

                <Switch>
                  <Route path="/" exact>
                    <QuizForm
                      playerStat={playerStat}
                      setPlayerStat={setPlayerStat}
                      visible={visible}
                      setVisible={setVisible}
                    />
                  </Route>

                  <Route path="/addnewquestionform">
                    <AddNewQuestionForm
                      newQuestion={newQuestion}
                      setNewQuestion={setNewQuestion}
                    />
                  </Route>

                  <Route path="/leaderboard">
                    <Leaderboard />
                  </Route>
                </Switch>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
                <br />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
