# WeatherVane

## Description

This application is a weather app that fetches weather information from OpenWeather API and displays it. This app is mobile friendly.

In this app,
- when a city is searched using either the city name or zip code, the current weather conditions and the 5 day forecast is displayed and that city is added to the search history.
- if a city in the search history is clicked on, the current weather conditions and the 5 day forecast for that city is displayed.
- while the data is being fetched, the search button is disabled and a loading spinner is displayed.

## Installation

To use [dotenv](https://www.npmjs.com/package/dotenv) and [moment](https://www.npmjs.com/package/moment), use the following command:

```
npm install
```

A .env.local file is needed to store the API Key for the [OpenWeather API](https://openweathermap.org/api). The variable name that is used to store this API Key can be found in the App.js file.

## Usage

This application is invoked using the following command:

```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Questions

Feel free to contact me at jennyhawes24@gmail.com or look at my [Github](https://github.com/JenniferKiesler).
