import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assicurati che il percorso sia corretto
import "./styles/global.scss"; // Importa il file globale SCSS

const root = document.getElementById("root") as HTMLElement;
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
