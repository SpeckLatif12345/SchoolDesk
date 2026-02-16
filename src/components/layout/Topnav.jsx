import { NavLink } from "react-router-dom";
import logo from "../../assets/school-desk.png";

function TopNav() {
  const linkClass =
    "px-4 py-2 text-sm font-medium text-gray-300 hover:text-white";

  const activeClass = "text-white border-b-2 border-blue-500";

  return (
    <nav className="w-full bg-blue-400  px-6 py-3 flex items-center justify-between ">
      {/* school logo + App name */}
      <div>
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="School Desk Logo"
            className="h-12s w-12 object-contain rounded-2xl"
          />
          <span className="text-white font-semibold text-lg">SchoolDesk</span>
        </NavLink>
      </div>
      <div className="w-full mx-auto flex justify-end gap-6 px-6 py-4">
        <NavLink
          to="/viewQuestions"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          View Your Class Questions
        </NavLink>

        <NavLink
          to="/gradeStudents"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Grade Students
        </NavLink>

        <NavLink
          to="/registerStudents"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Register Students
        </NavLink>
      </div>
    </nav>
  );
}
export default TopNav;
