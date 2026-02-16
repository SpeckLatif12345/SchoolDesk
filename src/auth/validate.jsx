import { Navigate } from "react-router-dom";

function RequireSignIn({ children }) {
  const hasSignedIn = localStorage.getItem("sign-in") === "true";

  if (!hasSignedIn) {
    return <Navigate to="/schooldesk" />;
  }

  return children;
}
export default RequireSignIn;
