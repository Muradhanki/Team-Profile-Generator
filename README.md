# Team-Profile-Generator
Test-Driven Development: Team Profile Generator


## Table of Contents
- [User Story](#user-story)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Credits](#credits)
- [Deployment](#deployment)
- [How to Contribute](#how-to-contribute)
  - [Contributions](#contributions)
  - [Starred Project](#starred-project)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Badges](#badges)

## User Story
**As A** developer,  
**I WANT** a tool to generate a team profile,  
**SO THAT** I can easily organize and view information about my team members.

## Installation
Users can install the project by cloning the repository from GitHub and follow these steps to install the required dependencies:

1. Initialize the project:
```bash
npm init -y
```
2. Install Inquirer for user prompts:
```bash
npm i inquirer@6.3.1
```
3. Install Jest for testing:
```bash
npm i jest
```
4. Update test script in package.json:
Edit the `"test"` script in the `package.json` file (line 10) to use Jest
```bash
"test": "jest"
```
5. Run tests:
```bash
npm run test
```