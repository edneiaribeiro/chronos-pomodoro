import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Bounce, ToastContainer } from 'react-toastify';

export function App() {
  return (
    <TaskContextProvider>
      <Home />

      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </TaskContextProvider>
  );
}
