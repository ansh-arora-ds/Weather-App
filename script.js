// Replace with your real key
const API_KEY = "d9e66b113fac4a9f872172115252109";

// Example: Get weather for Delhi
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        const data = await response.json();

        if (data.error) {
            alert("City not found!");
            return;
        }

        console.log(data); // check the full response

        // Example: update your HTML
        document.getElementById("humidity").innerText = data.current.humidity + "%";
        document.getElementById("visibility").innerText = data.current.vis_km + " km";
        document.getElementById("pressure").innerText = data.current.pressure_mb + " mb";
        document.getElementById("condition").innerText = data.current.condition.text;
        document.getElementById("temperature").innerText = data.current.temp_c + "°c";
        document.getElementById("feels_like").innerText = data.current.feelslike_c + "°c";
        document.getElementById("wind speed").innerText = data.current.wind_kph + " km/h";
        document.getElementById("wind_dir").innerText = data.current.wind_dir;
        document.getElementById("windchill").innerText = data.current.windchill_c + "°c";

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}
const searchInput = document.querySelector(".form-control");
const searchBtn = document.querySelector(".btn.btn-outline-success");
const cityInput = document.querySelector("#col2 input[type='search']");
const searchButton = document.querySelector("#col2 button");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if (city) {
        getWeather(city);
    }
});
searchButton.addEventListener("click", () => {
    // Get the city name from the input field
    const city = cityInput.value;
    // Call the getWeather function with the city name
    if (city) {
        getWeather(city);
    }
});

// Call it when the page loads
getWeather("0");
// Get references to the elements
const userGuideLink = document.querySelector('.nav-link[aria-disabled="true"]');
const userGuideModal = document.getElementById('user-guide-modal');
const closeBtn = document.querySelector('.close-btn');

// Show the modal when the user guide link is clicked
userGuideLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the link from navigating
    userGuideModal.style.display = 'flex'; // Change display to flex to show the modal
});

// Hide the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    userGuideModal.style.display = 'none'; // Change display to none to hide the modal
});

// Hide the modal if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === userGuideModal) {
        userGuideModal.style.display = 'none';
    }
});
// Get references to the About modal elements
const aboutLink = document.querySelector('.nav-link.active');
const aboutModal = document.getElementById('about-modal');
const aboutCloseBtn = aboutModal.querySelector('.close-btn');

// Show the About modal when the link is clicked
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutModal.style.display = 'flex';
});

// Hide the About modal when the close button is clicked
aboutCloseBtn.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});

// Hide the About modal if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});