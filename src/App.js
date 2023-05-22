import logo from './logo.svg';
import './App.css';
import UsersPage from './components/UsersPage';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      {/* <h1>React APP demo</h1> */}
      <UsersPage></UsersPage>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;
