# GreenField
Greenfield project for RBK:Korfi
## Prompt

*For best experience, please view this file in the browser*.

we create a full-stack application that implements several features for a usefull webpage. our app will eventually display seven views or more in the future with improving feature :

1. a **Home** component for presenting our website  .
2. a **LogIn** component for changement from signIn to signUp .
3. a **SignIn** component for sign in the page.
4. a **SignUp** component for registration .
5. an **PostAdd** component whith two buttons :add a task/add your cv . 
6. an **CV** component : a formular for cv to fill .
7. an **postJob** component: we have to fill a formular to add a task.
8. an **you** component whith two buttons:MyJobs and MyOffers.
9. an **pending** component, rendering the added jobs.
10. an **AppliedJob** component, it will render the accepted jobs.
11. an **JobsInProg** component, it will render the job that is on progress already.
12. an **Done** component, when the job is over, the user will be able to rate.
13. an **8** component for.
14. an **8** component for.

### our Tech Stack
- Client: our choice [ReactJs]
- Server: [NodeJS](https://nodejs.org), with the [Express](https://express.js.com) framework
- Database: [MongoDB](https://mongodb.com) with the [Mongoose](https://mongoosejs.com) ODM.
- Additional libraries and tools:
  - Client-side AJAX libraries (if and only if you're using React for your client)
    - [jQuery](https://jquery.com/), for *client-side AJAX requests only*.
    - [Axios](https://github.com/axios/axios), as an optional, promise-based alternative to  jQuery's `$.ajax`

 ### setup before you begin
 - [ ] Run `npm install` inside the `shopping-experience` directory to install dependencies.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`).
- [ ] Create the database by running `npm run db:setup`
- [ ] In `server/index.js`, uncomment the lines of code corresponding to your choice of client-side framework.
- [ ] Serve your application from the provided Node/Express web server.
- For React, start your application with two commands, `npm run dev:react` and `npm start`, in two separate terminal tabs. Our `dev:react` script makes use of Webpack. For more information about Webpack, take a look at [the Webpack Docs].

### Explaination about Project

*** user stories:**
> As user (as customer) i can acces to the home page, i can click on the logo that has the same reference as the home page, i can access social icons that has the refrences of the social medias, i can read the description of the page and watch the slide-show of the page-content.
>As a user i can login if i have an account already exists, if not i have the ability to register and have an account.
>As a user i can post a task in the website.
>As a user i can't apply on the task that i had already create on my own.
>As a user (professional user) i can register and login easily.
>As a user i can  see all the posts of the jobs and accept them.
>As a user (customer) i can't see the list of workers that applied to the jobs that i posted.
>As user (professional) i can know and see the jobs that i accepted and waiting for the acceptance of the poster.
>As a user, when the customer accepted me as an employee, i can see it the progress page.
>As a user (as a customer) i can also see the progress of the job task.
>As a user (professional) i can click on the progress button when i finish my work.
>As a user (customer) i can rate the job that the employee worked on



