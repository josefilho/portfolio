import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';
import { UnderConstruction } from '../pages/UnderConstruction';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route
        path='/works'
        element={/*<WorksPage />*/ <UnderConstruction />}
      />
      <Route
        path='/college'
        element={/*<CollegePage />*/ <UnderConstruction />}
      />
    </Routes>
  );
};

export { MainRoutes };
