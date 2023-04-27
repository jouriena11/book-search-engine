# **Book Search Engine**
## **Project Description**
This project involves refactoring existing Google Books API search engines, which were built with a RESTful API using Express.js, to a GraphQL API using Apollo Server.

The refactored GraphQL API provides a more efficient and flexible solution for querying book data. This React web app allows users to sign up and log in to their own accounts. Once logged in, users can search for books, view details about each book, and save their favorites to a personal list. The app will also allow users to delete books from their saved list.

By refactoring to a GraphQL API, this project provides a more streamlined and developer-friendly for API handling and routing.

---
## **URLs**
- [Deployed Application](https://book-search-engine-999.herokuapp.com/)
- [GitHub Repository URL](https://github.com/jouriena11/book-search-engine)

---
## **Table of Contents**
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage--expected-behavior)
- [Future Developments](#future-development)
- [Contact](#contact)

---
## **Installation**
To run this web application in a local server, the following libraries must be installed:

***Client Libraries***
- @apollo/client v3.7.12
- @testing-library/jest-dom v4.2.4
- @testing-library/react v9.3.2
- @testing-library/user-event v7.1.2
- bootstrap v5.2.3
- graphql v16.6.0
- jwt-decode v2.2.0
- react v16.13.1
- react-bootstrap v2.7.0
- react-dom v16.13.1
- react-router-dom v6.2.1
- react-scripts v5.0.1

***Server Libraries***
- apollo-server-express v3.12.0
- bcrypt v4.0.1
- express v4.17.1
- graphql v16.6.0
- jsonwebtoken v8.5.1
- mongoose v7.0.2
- nodemon v2.0.3 (devDependencies)

***Root Libraries***
- mongoDB v5.3.0
- concurrently v5.1.0 (devDependencies)

---
## **Technologies Used**
- MERN Stack
    - MongoDB + Mongoose
    - Express.js
    - React
    - Node.js
- GraphQL
- Json Web Token
- Apollo Server

---
## **Usage / Expected Behavior**

Once users visit the web app for the first time, they would see a search bar, which can be used to search books from Google Books API. But they wouldn't be able to save searched books to their personal account (i.e. `Save this Book!` button would not appear) unless they sign up and log in to their personal account.

To sign up, users just have to click on the `Login/Sign Up` menu on the top left corner of the page.

![google-books-search-engine-web-app-homepage](/client/src/img/readme/readme-homepage.jpg)

Once signed up, 
- users would be automatically logged in to their personal account,
- `Login/Sign Up` would disappear
- `See Your Books` and `Logout` menus would appear

![signed-up-modal](/client/src/img/readme/readme-signup-modal.jpg)

![google-books-search-engine-web-app-homepage-logged-in](/client/src/img/readme/readme-homepage-logged-in.jpg)

On a search result page, logged-in users would also see `Save this Book!` button on each book returned from a search would appear.

![search-results](/client/src/img/readme/readme-search-results.jpg)

![save-this-book-button](/client/src/img/readme/readme-save-this-book-button.jpg)

For any book that has been saved previously, the button text would change to `This book has already been saved!` and would no longer be clickable.

![already-saved-book-no-longer-clickable](/client/src/img/readme/readme-already-saved-book.jpg)

When users click on `See Your Books` top-bar menu, they will be redirected to their saved books page. Each book will have `Delete this Book` button. Once this button is clicked, the corresponding book would be removed from the saved list.

![saved-book-page](/client/src/img/readme/readme-saved-books.jpg)

![delete-this-book-button](/client/src/img/readme/readme-delete-book-button.jpg)

---
## **Future Development**
- to include `removeUser` mutation (which would also invoke removeBook)
- to have each book card rendered in the same size (i.e. height; currently, it's rendered in a grid style which doesn't look very nice)

---
## **Contact**

Please feel free to contact me through any of the following channels
- Email: p.teeraprasert@gmail.com 
- LinkedIn: https://www.linkedin.com/in/piyawit-teeraprasert/