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

  const changePage = (page: string) => {
    setPage(page);
  };
  return (
    <>
      {page === "Login" && <Login onChangePage={changePage} />}
      {page === "AddCategory" && <AddCategory onChangePage={changePage} />}
      {page === "AddTask" && <AddTask onChangePage={changePage} />}
      {page === "Categories" && <Categories onChangePage={changePage} />}
      {page === "Profile" && <Profile onChangePage={changePage} />}
      {page === "SignUp" && <SignUp onChangePage={changePage} />}
      {page === "Tasks" && <Tasks onChangePage={changePage} />}
      {page === "Dashboard" && <Dashboard onChangePage={changePage} />}
    </>
  );
}

export default App;
