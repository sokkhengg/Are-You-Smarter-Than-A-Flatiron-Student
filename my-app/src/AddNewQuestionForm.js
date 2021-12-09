import React, { useState } from "react";
import { Form, Button, Grid, Dropdown, Select } from "semantic-ui-react";

export default function AddNewQuestionForm({ LOCAL_API }) {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
    category: "",
  });

  const categoryOptions = [
    { key: 4, text: "WorldHistory", value: "WorldHistory" },
    { key: 5, text: "Music", value: "Music" },
    { key: 6, text: "TVFilm", value: "TVFilm" },
  ];

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const category = e.target.innerText;

    setNewQuestion({ ...newQuestion, [name]: value });
  }

  function handleSubmit(e) {
    console.log(e)
    if (newQuestion.question === "" || newQuestion.answer === "") {
      return;
    }

    fetch(LOCAL_API + newQuestion.category,  {
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
          category: "",
        });
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <Grid columns="equal">
        <Grid.Column></Grid.Column>

        <Grid.Column textAlign="center">
          <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Field required onChange={(e) => handleOnChange(e)}>
                <input
                  placeholder="Question"
                  name="question"
                  value={newQuestion.question}
                />
              </Form.Field>
              <Form.Field required onChange={(e) => handleOnChange(e)}>
                <input
                  placeholder="Answer"
                  name="answer"
                  value={newQuestion.answer}
                />
              </Form.Field>
              <Form.Field
                required onChange={(e) => handleOnChange(e)}
                control='select'>


                <option></option>
                <option value='Music'>Music</option>
                <option value='WorldHistory'>WorldHistory</option>
                <option value='TVFilm'>TVFilm</option>
                </Form.Field>

                {/* placeholder="Category"
                name="category"
                value={newQuestion.category}
                fluid
                selection
              />{" "} */}
              &nbsp;&nbsp;
              <Button type="submit"  fluid>
                Add a Question
              </Button>
          </Form>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
}
