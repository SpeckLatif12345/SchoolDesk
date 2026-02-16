import { createContext, useContext, useReducer } from "react";

// 1. Initial global state
const initialState = {
  studentsByClass: {
    "JSS 1": [
      { id: 1, name: "Ama" },
      { id: 2, name: "Kojo" },
    ],
    "JSS 2": [],
    "JSS 3": [],
  },
};

// 2. Reducer (ALL logic lives here)
function studentReducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT": {
      const { student } = action;

      return {
        ...state,
        studentsByClass: {
          ...state.studentsByClass,
          [student.class_name]: [
            ...state.studentsByClass[student.class_name],
            student,
          ],
        },
      };
    }

    case "REMOVE_STUDENT": {
      const { class_name, id } = action;

      return {
        ...state,
        studentsByClass: {
          ...state.studentsByClass,
          [class_name]: state.studentsByClass[class_name].filter(
            (s) => s.id !== id,
          ),
        },
      };
    }

    case "CLEAR_CLASS": {
      return {
        ...state,
        studentsByClass: {
          ...state.studentsByClass,
          [action.class_name]: [],
        },
      };
    }

    default:
      return state;
  }
}

// 3. Create context
const StudentContext = createContext(null);

// 4. Provider
export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

// 5. Custom hook (clean access)
export function useStudents() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudents must be used inside StudentProvider");
  }
  return context;
}
