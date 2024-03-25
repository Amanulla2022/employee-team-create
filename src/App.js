import React, { useReducer } from "react";
import "./App.css";
import Employee from "./components/Employee";
import Team from "./components/Team";
import { employees } from "./EmployeesData";

// Define action types
const ADD_TO_TEAM = "ADD_TO_TEAM";
const SET_TEAM_MEMBERS = "SET_TEAM_MEMBERS";
const REMOVE_FROM_TEAM = "REMOVE_FROM_TEAM";
const SORT_TEAM = "SORT_TEAM";

// Reducer function to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_TEAM:
      return {
        ...state,
        teamMembers: [...state.teamMembers, action.payload.employee],
        availableEmployees: state.availableEmployees.filter(
          (emp) => emp.id !== action.payload.employee.id
        ),
      };
    case REMOVE_FROM_TEAM:
      return {
        ...state,
        teamMembers: state.teamMembers.filter(
          (emp) => emp.id !== action.payload.employee.id
        ),
        availableEmployees: [
          ...state.availableEmployees,
          action.payload.employee,
        ],
      };
    case SORT_TEAM:
      const sortedTeam = [...state.teamMembers].sort((a, b) => a.age - b.age);
      return {
        ...state,
        teamMembers: sortedTeam,
      };

    case SET_TEAM_MEMBERS:
      return {
        ...state,
        teamMembers: action.payload.members,
      };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    teamMembers: [],
    availableEmployees: employees,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Current state:", state);

  return (
    <div className="w-full flex">
      <Employee
        employees={state.availableEmployees}
        addToTeam={(employee) =>
          dispatch({ type: ADD_TO_TEAM, payload: { employee } })
        }
      />
      <Team
        teamMembers={state.teamMembers}
        setTeamMembers={(members) =>
          dispatch({ type: SET_TEAM_MEMBERS, payload: { members } })
        }
        removeFromTeam={(employee) =>
          dispatch({ type: REMOVE_FROM_TEAM, payload: { employee } })
        }
        sortTeam={() => dispatch({ type: SORT_TEAM })}
      />
    </div>
  );
}

export default App;
