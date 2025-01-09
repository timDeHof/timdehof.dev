import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from "./_components/ErrorBoundary";
import App from "./App";
import './index.css'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</StrictMode>,
);
