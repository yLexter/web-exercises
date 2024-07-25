# Energia Backend Coding Challenge: Note-taking API

## Challenge Description

You should raise the famous CRUD. Basically, I thought we had an application where we save our notes. Each user will have their own account with their own notes. It is not necessary that the API is public, certify that it follows the safety standards and good practices. Don't worry too much about broken parts, like raising a user, who was only raised to serve as an example. Follow the standards already established in the code.

## Docs

http://localhost:3333/docs

## Requirements

1. Deploy these endpoints:
 - POST /notes - Create a new note
 - GET /notes - Recover all notes
 - GET /notes/:id - Retrieve a specific note
 - PUT /notes/:id - Update a specific note
 - DELETE /notes/:id - Exclude a specific note
2. Implement tests for all teams
3. Whenever a note is registered, send an e-mail to the user (the e-mail content is not relevant, as soon as you send a string "noted note")
 3.1. You can use Mailtrap to test.

## User Story

The user must be able to save a note, such as the title and the description (optional). You must also have access to the creation data of this note.

## Tips

Try to understand how the project is working before you start.
Always have doubts, base yourself on things that you have not done in your project or try to rely on trusted sources.