import AddCategory from "./pages/AddCategory";
import AddTask from "./pages/AddTask";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Tasks from "./pages/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Login");

  const renderPage = (value: string) => {
    setPage(value);
  };
  return (
    <>
      {page === "Login" && <Login onChangePage={renderPage} />}
      {page === "AddCategory" && <AddCategory onChangePage={renderPage} />}
      {page === "AddTask" && <AddTask onChangePage={renderPage} />}
      {page === "Categories" && <Categories onChangePage={renderPage} />}
      {page === "Profile" && <Profile onChangePage={renderPage} />}
      {page === "SignUp" && <SignUp onChangePage={renderPage} />}
      {page === "Tasks" && <Tasks onChangePage={renderPage} />}
      {page === "Dashboard" && <Dashboard onChangePage={renderPage} />}
    </>
  );
}

export default App;
