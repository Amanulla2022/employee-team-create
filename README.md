# Team Management App
This is a simple React application for managing team members. It allows users to add employees to a team, remove them, and sort the team members by age.

# [Hosted Link](https://employee-team-management-r7lwkjpvo-amanullas-projects.vercel.app/)
## Features
  - Add employees to the team.
  - Remove employees from the team.
  - Sort team members by age.

### Technologies Used
  - React (Mainly useReducer)
  - JavaScript
  - Tailwind-CSS

#### useReducer
  useReducer is a React hook used for managing more complex state logic in your application. It's an alternative to useState that can be more suitable for managing state in scenarios where the state logic is more complex or involves multiple sub-values.

Syntax:
    - const [state, dispatch] = useReducer(reducer, initialState);

  `reducer: A function that receives the current state and an action, and returns the new state based on the action.
  `initialState: The initial state value for the component.

# Usage in the Application:
   - In the provided application, useReducer is used to manage the state related to team members and available employees. Here's how it's used:

const initialState = {
  teamMembers: [],
  availableEmployees: employees,
};

const [state, dispatch] = useReducer(reducer, initialState);
   - initialState: It defines the initial state of the application, including an empty array for teamMembers and an array of employees for availableEmployees.
   - reducer: The reducer function is responsible for handling state updates based on different actions.
