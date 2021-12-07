import React, { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";

export default function AddNewQuestionForm({ LOCAL_API }) {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  });

  function handleOnChange(e) {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;
    setNewQuestion({ ...newQuestion, [name]: value });
  }

  function handleSubmit() {
    if(newQuestion.question === "" || newQuestion.answer === "") {
        return
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
          })
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <Grid columns="equal">
        <Grid.Column></Grid.Column>

        <Grid.Column textAlign="center">
          <Form success>
            <Form.Group widths="equal">
              <Form.Field required onChange={(e) => handleOnChange(e)}>
                <label>Question</label>
                <input placeholder="Question" name="question" value={newQuestion.question} />
              </Form.Field>

              <Form.Field required onChange={(e) => handleOnChange(e)}>
                <label>Answer</label>
                <input placeholder="Answer" name="answer" value={newQuestion.answer}/>
              </Form.Field>

              <Button type="submit" onClick={(e) => handleSubmit(e)}>
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
