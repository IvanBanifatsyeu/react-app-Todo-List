import ToDoList from "./component/ToDoList";
import { useEffect } from "react";
import WebFont from "webfontloader";

function App() {

	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Chilanka"],
			},
		});
	}, []);
	return (
		<>
			<ToDoList />
		</>
	);
}

export default App;
