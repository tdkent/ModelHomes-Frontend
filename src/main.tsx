import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import App from "@/App";
import GlobalErrorBoundary from "@/GlobalError";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60 * 24, // 1d
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<ErrorBoundary
				fallbackRender={({ error, resetErrorBoundary }) => (
					<GlobalErrorBoundary error={error} reset={resetErrorBoundary} />
				)}
			>
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<App />
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</BrowserRouter>
			</ErrorBoundary>
		</HelmetProvider>
	</StrictMode>,
);
