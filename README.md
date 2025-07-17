# DashboardApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.


Overview: Member Dashboard is a web application that displays a list of members along with key details such as their name, role, status, and performance indicators. The dashboard provides filtering functionality, allowing users to easily sort and view members based on their role and status.


# Setup instructions
Install npm packages

```bash
ng serve
```
To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

# Architecture overview
The application follows a modular structure using Angular. The main architectural components are

## Modules
AppModule: The root module that bootstraps the application

## Components
MemberDashboardComponent: Display the members data with filtering features
NavBarComponent: Navbar component to navigate between pages 
LandingPageComponent: The main page

Reusable Components
DropdownMenuComponent: Dropdown menu take a label and the options
ButtonComponent: Button take a label 

Third-party Libraries:
ngx-datatable: Used to display sortable and responsive tables.

# Any assumptions made
○ I was not given a clear specification for the data structure, so I made assumptions based on the provided context
○ I used ngx-datatable to allow users to sort the data (ascending/descending) and to provide a more interactive and adjustable table UI

# Short reflection on the most challenging part

I had a challenge in testing because I didn't use Jasmine/Karma before, and I used Robot Framework (Selenium)
But I took a quick video on YouTube to learn about it, where I can write the unit test

Also. In the performance indicator, I don't know if I did it right, but I searched for a way (bootstrap solution) on the internet

# Explanation of AI tool usage:
○ Which tools were used and for what

I used ChatGPT when I faced errors that I didn't know how to solve 

○ What you adjusted or rejected from the AI's suggestion

I had an error in the dropdown-menu component, the data couldn't be reflected in the parent, AI suggests another solution, which is more complex. So I tried to do it as it is and find the way 





##


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# challenge
