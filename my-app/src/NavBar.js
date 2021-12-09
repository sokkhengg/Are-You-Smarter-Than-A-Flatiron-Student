import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Grid, Icon } from "semantic-ui-react";

function NavBar() {
  return (
    <>
      <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column textAlign="center">
          <Menu compact inverted={true}>
            <Menu.Item link>
              <NavLink to="/"><Icon name="home" /></NavLink>
            </Menu.Item>

            <Menu.Item link>
              <NavLink to="/QuizForm">Quiz</NavLink>
            </Menu.Item>

            <Menu.Item link>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </Menu.Item>

            <Menu.Item link>
              <NavLink to="/AddNewQuestionForm">Add a Question</NavLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
    </>
  );
}

export default NavBar;
