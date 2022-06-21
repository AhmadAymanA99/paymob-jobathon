import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const onSubmit = (username, password) => {
    console.log("onSubmit function");
    console.log("username: ", username);
    console.log("password: ", password);
  };
  return (
    <div className="App">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
