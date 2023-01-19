import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from './routes';

import './global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export { App };