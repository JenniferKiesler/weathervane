import './App.css';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <>
      <header>
        <h1>WeatherVane</h1>
      </header>
      <main>
        <SearchForm/>
        <CurrentWeather/>
        <WeatherForecast/>
      </main>
    </>
  );
}

export default App;
