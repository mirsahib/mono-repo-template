import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/root");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

	return (
		<div>
			<a href="https://vitejs.dev" target="_blank">
				<img src="/vite.svg" className="logo" alt="Vite logo" />
			</a>
			<a href="https://www.typescriptlang.org/" target="_blank">
				<img
					src={typescriptLogo}
					className="logo vanilla"
					alt="TypeScript logo"
				/>
			</a>
			<Header title="Admin" />
			<div className="card">
				<Counter />
			</div>
		</div>
	);
};

createRoot(document.getElementById("app")!).render(<App />);
