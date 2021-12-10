import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";

export default function AddNewQuestionForm({ newQuestion, setNewQuestion, }) {
  const categoryOptions = [
    { key: 4, text: "WorldHistory", value: "WorldHistory" },
    { key: 5, text: "Music", value: "Music" },
    { key: 6, text: "TVFilm", value: "TVFilm" },
  ];

  function handleOnChange(e) {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setNewQuestion({ ...newQuestion, [name]: value });
  }

  function handleValueOnChange(e) {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setNewQuestion({ ...newQuestion, [name]: Number(value) });
  }

  function handleSubmit(e) {
    if (
      newQuestion.question === "" ||
      newQuestion.answer === "" ||
      newQuestion.category === "" ||
      newQuestion.value === ""
    ) {
      return;
    }

    const question = e.target[0].value;
    const answer = e.target[1].value;
    const category = e.target[2].value;
    const questionValue = Number(e.target[3].value);
    setNewQuestion({
      ...newQuestion,
      question: question,
      answer: answer,
      category: category,
      value: Number(questionValue),
    });

    fetch("http://localhost:3000/" + newQuestion.category, {
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
          value: 0,
        });
      })
      .then(alert("Thank you for adding your question!"))
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
                placeholder="Question*"
                name="question"
                value={newQuestion.question}
              />
            </Form.Field>
            <Form.Field required onChange={(e) => handleOnChange(e)}>
              <input
                placeholder="Answer*"
                name="answer"
                value={newQuestion.answer}
              />
            </Form.Field>
            <Form.Field
              required
              onChange={(e) => handleOnChange(e)}
              control="select"
              value={newQuestion.category}
              name="category"
              placeholder="Category*"
              selection
            >
              <option>Choose a category*</option>
              <option value="Music">Music</option>
              <option value="WorldHistory">WorldHistory</option>
              <option value="TVFilm">TVFilm</option>
              <option value="PotentPotables">PotentPotables</option>
            </Form.Field>
            <Form.Field
              required
              onChange={(e) => handleValueOnChange(e)}
              control="select"
              value={newQuestion.value}
              name="value"
              placeholder="Value*"
              selection
            >
              <option>Choose a value*</option>
              <option value="100">$100</option>
              <option value="200">$200</option>
              <option value="500">$500</option>
              <option value="1000">$1000</option>
            </Form.Field>
            &nbsp;&nbsp;
            <Button type="submit" color="teal" fluid>
              Add a Question
            </Button>
          </Form>
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
}
