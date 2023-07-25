# weather_API

# Weather App

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Weather App is a web application that allows users to get real-time weather information by entering their zip code. The app fetches weather data from the OpenWeatherMap API and displays the current temperature along with the date and time of the request. Additionally, users can provide their feelings or thoughts about the weather, and this information will be stored along with the weather data on the server.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Key Setup](#api-key-setup)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To run the Weather App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project's root directory in your terminal.
4. Install the required dependencies by running the command: `npm install`
5. Start the server by running: `node server.js`
6. Open your web browser and go to: `http://localhost:3000`

## Usage

1. Enter your zip code in the input field and click the "Get Weather" button.
2. The app will retrieve the current weather data from the OpenWeatherMap API based on your zip code.
3. The temperature, date, and time of the request will be displayed on the page.
4. Enter your thoughts, feelings, or any notes about the weather in the "What is your feeling today?" input field.
5. Click the "Get Weather" button to update the server with the new data.
6. The latest weather data, along with your input, will be stored on the server and displayed on the page.

## API Key Setup

The Weather App uses the OpenWeatherMap API to fetch weather data. To use this app, you'll need to obtain an API key from OpenWeatherMap.

1. Sign up for a free account on the [OpenWeatherMap website](https://home.openweathermap.org/users/sign_up).
2. After signing in, navigate to the [API Keys section](https://home.openweathermap.org/api_keys).
3. Generate a new API key, and copy it to your clipboard.
4. In the `app.js` file, replace the value of the `apiKey` variable with your API key.
