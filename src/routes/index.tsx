import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/works' element={/*<WorksPage />*/ <HomePage />} />
      <Route path='/college' element={/*<CollegePage />*/ <HomePage />} />
    </Routes>
  );
};

export { MainRoutes };
