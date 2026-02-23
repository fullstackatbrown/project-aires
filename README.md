## Cloning the repo

Run 
- git clone git@github.com:fullstackatbrown/project-aires.git in terminal (probably your desktop or documents folder)

If that doesn’t work, run
- git clone ​​https://github.com/fullstackatbrown/project-aires.git

If you’re getting errors red error lines immediately, you probably have uninstalled dependencies! run:
- npm install next react react-dom

## Before making edits
Always make sure your local branch is up to date before starting work.
- git pull

This pulls the latest changes from the main branch so you don’t accidentally work on outdated code or cause merge conflicts later.


## Running the server
First, install dependencies (only needed the first time or after dependency changes):
- npm install

Then, run the development server:
- npm run dev

Open http://localhost:3000 in your browser to view the website.

You can start editing the page by modifying anything in `app/`.
The page will auto-update as you save changes locally.


## How to make a pull request
A pull request (PR) is how you propose your changes to be reviewed and merged into the main branch. It allows teammates to review your code, leave comments, and ensure everything works before it goes live.

Steps:
1. Create a new branch for your work:
   - git checkout -b your-branch-name

2. Make your changes and commit them:
   - git add -A
   - git commit -m "Brief description of your changes"

3. Push your branch to GitHub:
   - git push origin your-branch-name

4. Go to the repository on GitHub and click “Compare & pull request”.

5. In the pull request description:
   - Clearly explain what you changed and why
   - Add screenshots or videos if the change affects the UI
   - Link any relevant issues or follow-on tasks

6. Submit the pull request and wait for review.  
   If changes are requested, push additional commits to the same branch.


## Best practices
- Adhere to the existing design system (spacing, colors, typography, layout)
- Reuse existing components instead of duplicating logic or UI
- Comment your code so others understand what each component is responsible for
- If you are vibe coding:
  - Make sure you understand what was generated
  - Ensure it fits the existing codebase and design scheme
  - Remove unused or unnecessary code
- Use clear, descriptive commit messages


## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



