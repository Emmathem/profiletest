import AppRoute from './AppRoute';
import './App.css';
import './assets/styles/global.css';

const App = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center w-full transition">
      <AppRoute />
    </div>
  );
}

export default App;
