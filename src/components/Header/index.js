import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <h1 className='quad'>QUADB TASK</h1>
    </div>
    <ul className="header-list">
      <li className="route-item">
        <Link to="/" className="list-item">
          <p className="home-text">Task List</p>
        </Link>
      </li>
      <li className="route-item">
        <Link to="/add-task" className="list-item">
          <p className="home-text">Add Task</p>
        </Link>
      </li>
      <li className="route-item">
        <Link to="/edit-task" className="list-item">
          <p className="home-text">Edit Task</p>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
