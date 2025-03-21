import Editor from "./components/Editor";

function App() {
	return (
		<>
			<div className="pane top-pane">
				<Editor />
				<Editor />
				<Editor />
			</div>
			<div className="pane">
				<iframe
					title="output"
					sendbox="allow-script"
					style={{ border: "none" }}
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
}

export default App;
