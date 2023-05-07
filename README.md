# MovieMaven
A Movie Web App Template
This project is built using Tailwind CSS, a utility-first CSS framework for rapid UI development.

Getting Started
To get started with this project, follow these steps:

Clone the repository using git clone https://github.com/fatemeebrahimzadeh/MovieMaven.git.
Navigate to the project directory using cd project-name.
Install the required dependencies using npm install.
Development
To start development, run the following command:

bash
Copy code
npx tailwindcss -i ./assets/tailwind.css -o ./dist/output.css --watch
This will start a development server and watch for changes to your tailwind.css file. Whenever you save changes to the file, Tailwind will automatically regenerate your output CSS in the dist directory.

Git Hooks
This project uses Husky to enforce commit conventions and prevent pushes to the master branch. Before you make a commit, Husky will run a pre-commit hook to ensure that your commit message follows the format type(scope): message, where type is one of the following:

build: Changes which affect CI configuration files and scripts
chore: Changes which aren't user-facing
enh: Changes which improve a feature
docs: Changes which affect documentation
feat: Changes which introduce a new feature
fix: Changes which patch a bug
perf: changes which improve performance
refactor: Changes which neither fix a bug nor add a feature
revert: Changes which revert a previous commit
style: Changes which don't affect code logic, such as white-spaces, formatting, missing semi-colons
test: Changes which add missing tests or correct existing tests

scope is optional and should be used when the change affects a specific part of the codebase. message should be a short, descriptive summary of the change.

To prevent pushes to the master branch, branch is protected by github that checks if you're trying to push to the master branch. If you are, the push will be rejected.

Contributing
If you'd like to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Once you've made your changes, submit a pull request and we'll review your changes.
