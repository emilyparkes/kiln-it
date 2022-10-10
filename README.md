![Node.js Lint and Test](https://github.com/emilyparkes/kiln-it/workflows/Node.js%20Lint%20and%20Test/badge.svg) ![Deploy](https://github.com/emilyparkes/kiln-it/workflows/Deploy/badge.svg)

# kiln it
A project that will allow me to keep records of my clay creations. Including type of creation, percent shrinkage the status of firing. A platform for friends and whānau to be able to see a catalog of all the creations I've made and the process they went through. 

Using fullstack technologies I have learned and mentor others in, as well as being a project to try out new tech in more complex scenarios. 

Used for this project:  
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Sqlite3](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)
![EsLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Brave](https://img.shields.io/badge/Brave-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![UnSplash](https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=Unsplash&logoColor=white)

## Table of Contents
- [External Sources](#external-sources)  
- [Installation](#installation)   
<!-- - [Usage](#usage)  -->
- [User Stories](#user-stories) 
- [License](#license)   
<!-- - [Features](#features)
- [How to Contribute](#how-to-contribute)   -->
- [Tests](#tests)

### External Sources
🚀 [Currently deployed version](https://kiln-it.herokuapp.com/)   
🎨 [Figma Design](https://www.figma.com/file/09q8SUt5gSTAfpNtiGyUOEGt/Kiln-it?node-id=0%3A1) *an attempt*  
📖 [ERD Diagram](https://dbdiagram.io/d/606395deecb54e10c33e0510)


### Installation

Run the following commands in your terminal

```sh
npm install
npm run db
cp .env.example .env
npm run dev
```

<!-- ## Usage -->

<!-- Create a `.env` file in the main directory and add:

```sh
JWT_SECRET="a fun secret"
``` -->

The site should then be available on http://localhost:3000

### User Stories

#### MVP

As an admin user:
- [x] I want to view a creation status log
- [x] I want to view a creation and all it's details
- [x] I want to view all my creations
- [x] I want to update the status of a creation
- [x] I want to edit a creation
- [x] I want to add a new creation
- [x] I want to add a note to a creation
- [x] I want to add a new clay type
- [x] I want to add a new creation shape
- [x] I want to add a new glaze


As a friendly user:
- [x] I want to view all the creations
- [x] I want to view a creation and all it's details
- [ ] I want to click a link to take me to instagram to purchase the item


## Views
  | name | user | purpose |
  | --- | --- | --- |
  | Sign In | * | View for user to enter their login credentials |
  | Register | * | View for user to sign up |
  | Home | * | View list of clay creations |
  | Creation Details | * | View an existing creation, and when Admin all it's recorded details |
  | Creation Log | Admin | View list of clay creations and their current status |
  | Add/Edit Creation | Admin | Create new or edit an existing entry |

  
<!-- 
## API 

All these routes should be protected

| Method | Endpoint | User | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/signin | Sign In a User | The Users JWT Token |
| Post | /api/auth/register | Register a User | The Users JWT Token |
| TBC | -->

## License

MIT License


<!-- ## Features

If your project has a lot of features, list them here. -->

<!-- ## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->

## Tests
![Node.js Lint and Test](https://github.com/emilyparkes/kiln-it/workflows/Node.js%20Lint%20and%20Test/badge.svg)  
Run tests with: 

```
npm run test
```
