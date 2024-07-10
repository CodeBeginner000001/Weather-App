# Weather App

Weather App is a React application that allows users to get detailed weather information for their location. Users can enter their location to retrieve data such as temperature, humidity, max temperature, min temperature, feels-like temperature, weather conditions, wind speed, pressure, latitude, longitude, and an image depicting the current weather.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)

## Features

- **Location-Based Weather Information**: Enter your location to get detailed weather information.
- **Temperature Details**: Get current temperature, max temperature, min temperature, and feels-like temperature.
- **Weather Conditions**: Get details about current weather conditions, humidity, and pressure.
- **Wind Speed**: Get information about wind speed at your location.
- **Geographical Information**: Get latitude and longitude of your location.
- **Weather Image**: View an image depicting the current weather conditions.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeBeginner000001/Weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter your location in the search bar.
2. Click the "Search" button to retrieve weather information.
3. View the detailed weather information including:
   - **Temperature**: Current, max, min, and feels-like temperatures.
   - **Humidity**: Current humidity level.
   - **Weather Conditions**: Description of the weather.
   - **Wind Speed**: Current wind speed.
   - **Pressure**: Current atmospheric pressure.
   - **Latitude and Longitude**: Geographical coordinates of your location.
   - **Weather Image**: Image depicting the current weather.

## Components

### app.jsx

The main application component that includes the weather fetching logic and renders other components.

### infobox.jsx

The component that displays the detailed weather information fetched from the API.

### main.jsx

The main component that structures the layout of the application.

### searchbox.jsx

The component that includes the input form for entering the location and submitting the request.

### weatherapp.jsx

The container component that brings together `searchbox.jsx` and `infobox.jsx` to display the weather information.

## Contributing

Feel free to fork the repository and submit pull requests. We welcome contributions to improve the functionality and user experience of the Weather App.
