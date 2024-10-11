import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from "./Pages/Home/Home";
import Editions from "./Pages/Editions/Editions";
import Regulations from "./Pages/Regulations/Regulations";
import About from "./Pages/About/About";
import MainLayout from "./Layouts/MainLayout";
import { I18nProvider } from "./i18n";
import './styles/bootstrap.css';
import './styles/styles.css';
import Cookies from "./Pages/Cookies/Cookies";

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Home />,
    children: [
      { index: true, element: <Home /> }, // index: true indicates that this is the root path
      { path: 'regulations', element: <Regulations /> },
      { path: 'about', element: <About /> },
      { path: 'cookies', element: <Cookies /> },
      { path: 'editions', element: <Editions /> },
      { path: 'editions/:edition', element: <Editions /> },
    ]
  }
];

const router = createBrowserRouter(routes);

const App = () => {
  const language = useSelector((state) => state.switchLang.language);
  return (
      <I18nProvider locale={language}>
        <RouterProvider router={router} />
      </I18nProvider>
  );
}

export default App;