import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PageChat from "./pages/PageChat";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageChat />} />
    </Routes>
  )
};