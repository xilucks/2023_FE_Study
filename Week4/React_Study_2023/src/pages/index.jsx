import TodoInputBox from "../components/TodoInputBox/index.jsx";
import { useState } from "react";
import CheckList from "../components/CheckList/index.jsx";

const MainPage = () => {
  return (
    <div className={"text-center"}>
      <TodoInputBox />
      <div className={"mt-10"}>
        <CheckList />
      </div>
    </div>
  );
};

export default MainPage;
