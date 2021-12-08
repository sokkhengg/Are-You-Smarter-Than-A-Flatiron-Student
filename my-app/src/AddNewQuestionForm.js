import React, { useState } from "react";
import { Form, Button, Grid, Dropdown } from "semantic-ui-react";

export default function AddNewQuestionForm({ LOCAL_API }) {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });

  const categoryOptions = [
    { key: 4, text: "WorldHistory", value: "WorldHistory" },
    { key: 5, text: "Music", value: "Music" },
    { key: 6, text: "TVFilm", value: "TVFilm" },
  ];

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewQuestion({ ...newQuestion, [name]: value });
  }

  function handleSubmit() {
    if (newQuestion.question === "" || newQuestion.answer === "") {
      return;
    }

    fetch(LOCAL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((r) => r.json())
      .then(() => {
        setNewQuestion({
          question: "",
          answer: "",
        });
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <Grid columns="equal">
        <Grid.Column></Grid.Column>

        <Grid.Column textAlign="center">
          <Form>
            <Form.Group widths="equal">
              <Form.Field required onChange={(e) => handleOnChange(e)}>
                {/* <label>Question</label> */}
                <input
                  placeholder="Question"
                  name="question"
                  value={newQuestion.question}
                />
              </Form.Field>
              <Form.Field required onChange={(e) => handleOnChange(e)}>
                {/* <label>Answer</label> */}
                <input
                  placeholder="Answer"
                  name="answer"
                  value={newQuestion.answer}
                />
              </Form.Field>
              <Dropdown
                options={categoryOptions}
                placeholder="Category"
                name="category"
                fluid
                selection
              />{" "}
              &nbsp;&nbsp;
              <Button type="submit" onClick={(e) => handleSubmit(e)} fluid>
                Add a Question
              </Button>
            </Form.Group>
          </Form>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
}
