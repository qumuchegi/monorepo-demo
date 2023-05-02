import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "components";
import "./index.scss";

const t = "0";

const y = 0;
const y1 = 0;
const y2 = 0;
const y3 = 0;

function App(){
	return <div>
		<h1 className='title'>www</h1>
		<Button/>
	</div>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
