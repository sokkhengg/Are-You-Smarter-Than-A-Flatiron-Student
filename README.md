# Are You Smarter Than A Flatiron Student?

This is a React app that quizzes users on general knowledge in 3 categories. The user can select a category and the number of questions they want to answer. At the end of a round the user has the option to add their name to the leaderboard so they can see how they scored against other users.

Questions are scored based on value, users can see how much money they've "won" and the total increases/decreases based on the user's answer. There is also a count of correct questions.

Users can also add their own questions. Those questions will then randomly appear along with the questions from the API.

We used the Jeopardy API to populate the questions and answers (answers are pulled randomly from other questions). We used React Bootstrap for styling. There is a localhost backend using json-server to hold the questions and the leaderboard.

### User stories
As a user, I want to:

* Pick a topic and the number of questions
* Get random questions, one by one, and see 2 answer options 
* Skip the question if I don’t know the answer
* See the "money" I’ve earned, how many questions I’ve answered correctly, and how many questions I've skipped
* Add a question to the database
* After the quiz, save my name and results to the leaderboard
