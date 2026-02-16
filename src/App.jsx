import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./pages/welcome";
import Layout from "./components/layout/Layout";
import RequireSignIn from "./auth/validate";
import QuestionManager from "./pages/QuestionManager";
import QuestionViewManager from "./pages/QuestionViewManager";
import StudentManager from "./pages/StudentManager";
import StudentGrading from "./pages/StudentGrading";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/schooldesk" element={<Welcome />} />

        <Route
          element={
            <RequireSignIn>
              <Layout />
            </RequireSignIn>
          }
        >
          {/* Default route */}
          <Route index element={<Navigate to="/questions" replace />} />
          {/* Question page */}
          <Route path="questions" element={<QuestionManager />} />
          {/* View Questions page */}
          <Route path="viewQuestions" element={<QuestionViewManager />} />
          {/* Register Students page */}
          <Route path="registerStudents" element={<StudentManager />} />

          <Route path="gradeStudents" element={<StudentGrading />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
