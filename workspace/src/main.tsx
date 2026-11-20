import "./index.css";

import "./setup-dayjs.ts";

import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";
import {createQueryClient} from "./create-query-client.tsx";
import {QueryClientProvider} from "@tanstack/react-query";



createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={createQueryClient()}>
		<App />
	</QueryClientProvider>
);
