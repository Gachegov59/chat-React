import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageChat from "./pages/PageChat";
import PageAuth from "./pages/PageAuth";

// const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/chat" element={<PageChat/>} />
      <Route path="/" element={<PageAuth/>} />
    </Routes>
  )
};