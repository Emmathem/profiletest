import './App.css';
import './assets/styles/global.css';
import UserProfiles from './components/Profile/UserProfiles';

const App = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center w-full transition">
      <UserProfiles />
    </div>
  );
}

export default App;
