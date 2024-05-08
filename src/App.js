import {Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import TaskList from './components/TaskList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/task-list" element={<TaskList />} />
      <Route exact path="/add-task" element={<AddTask />} />
      <Route exact path="/edit-task" element={<EditTask />} />
      <Route exact path="/" element={<Home />} />   
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </div>
)

export default App