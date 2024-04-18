import './App.css'
import AddTodo from './components/AddTodo'
import {Provider} from 'react-redux'
import {store} from './app/store.js'
import Todos from './components/Todos.jsx'


function App() {

  return (
    <Provider store = {store}>
      <h1>Welcome to the TODO APP built using Redux-ToolKit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
