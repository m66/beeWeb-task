import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { selectUser } from "../../../userSlice";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import RouteIf from "../RouteIf/RouteIf";

import styles from "./mainContent.module.scss";

const MainContent = () => {
  const user = useSelector(selectUser);
  return (
    <div className={styles.MainContent}>
      <Header />
      <Routes>
        <Route
          path="dashboard"
          element={<RouteIf elem={<Dashboard />} showWhen={!!user} />}
        />
        <Route
          path="login"
          element={<RouteIf elem={<LoginForm />} showWhen={!user} />}
        />
        <Route path="register" element={<RouteIf elem={<RegisterForm />} showWhen={!user} />} />
        <Route
          path="/"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainContent;
