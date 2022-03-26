import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players'; 
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
      <Profile></Profile>
      
    </div>
  );
}

export default App;
