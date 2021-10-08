import './App.css';
import  FetchMovies  from './Pages/Movies/FetchMovies';
import FetchMeals from './Pages/Meals/FetchMeals'

function App() {

  return (
    <div className="App">
      <FetchMovies />
      <FetchMeals />
    </div>
  );
}

export default App;
