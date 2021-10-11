import './App.css';
import  FetchMovies  from './Component/Movies/FetchMovies';
import FetchMeals from './Component/Meals/FetchMeals';

import Books from './pages/Books';

function App() {

  return (
    <div className="App">
      {/* <FetchMovies /> */}
      <FetchMeals />
    </div>
  );
}

export default App;
