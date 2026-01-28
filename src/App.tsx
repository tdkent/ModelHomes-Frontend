import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";

function App() {
	return (
		<>
			<Routes>
				<Route element={<RootLayout />}>
					<Route index element={<p>Hello world!</p>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
