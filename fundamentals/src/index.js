import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Greeting />
);

function Greeting() {
    return <h1>My First Component</h1>;
}