const apiKey = 'enter yout api key';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data from the API
async function getWeatherData(zip) {
  const url = `${baseURL}?zip=${zip}&appid=${apiKey}`;
  const response = await fetch(url);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to make a POST request to add data to the server
async function postData(path, data) {
  const response = await fetch(path, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  try {
    return await response.json();
  } catch (error) {
    console.error('Error making POST request:', error);
  }
}

// Function to update the UI with fetched data
async function updateUI() {
  const response = await fetch('/getData');
  try {
    const data = await response.json();
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('date').textContent = data.date;
    document.getElementById('userResponse').textContent = data.userResponse;
  } catch (error) {
    console.error('Error updating UI:', error);
  }
}

// Event listener for the "Get Weather" button click
document.getElementById('generate').addEventListener('click', async () => {
  const zipCode = document.getElementById('zip').value;
  const weatherData = await getWeatherData(zipCode);
  document.querySelector('.weatherData').style.display = "block";

  // Extract necessary data from the API response
  const temperature = weatherData.main.temp;
  const date = new Date().toLocaleDateString('en-US');
  const userResponse = document.getElementById('feeling').value;

  // Add the data to the server
  await postData('/addData', { temperature, date, userResponse });

  // Update the UI with the latest data
  updateUI();
});