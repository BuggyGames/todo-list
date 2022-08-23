import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="*" element={<h1>404!</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;