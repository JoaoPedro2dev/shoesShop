import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Venda from "./pages/venda/Venda.jsx";
import Pesquisa from "./pages/pesquisa/Pesquisa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Erro ao encontrar a pagina</div>,
  },
  {
    path: "/venda",
    element: <Venda />,
    errorElement: <div>Erro ao encontrar a pagina</div>,
  },
  {
    path: "/pesquisa",
    element: <Pesquisa />,
    errorElement: <div>Erro ao encontrar a pagina de pesquisa</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
