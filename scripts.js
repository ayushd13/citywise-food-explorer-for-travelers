const restaurantData = {
  Sangli: {
    breakfast: [
      {
        name: "Dalchini Sangli",
        rating: 4.5,
        type: "Veg",
        preferred: "Misal Pav 🌶️",
        map: "https://www.google.com/maps?q=Dalchini+Sangli"
      }
      // Add more restaurants
    ],
    lunch: [
      {
        name: "Hotel Gaurav",
        rating: 4.2,
        type: "Both",
        preferred: "Veg Thali 🍛",
        map: "https://www.google.com/maps?q=Hotel+Gaurav+Sangli"
      }
    ]
    // Add more categories
  },
  Pune: {
    breakfast: [
      {
        name: "Vaishali Restaurant",
        rating: 4.7,
        type: "Veg",
        preferred: "Upma & Coffee ☕",
        map: "https://www.google.com/maps?q=Vaishali+Pune"
      }
    ]
  }
};

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const city = document.getElementById("city").value;
  const meal = document.getElementById("meal").value;
  const results = restaurantData[city]?.[meal];

  const resultContainer = document.getElementById("restaurantResults");
  resultContainer.innerHTML = "";

  if (!results || results.length === 0) {
    resultContainer.innerHTML = `<p>No results found for ${meal} in ${city}.</p>`;
    return;
  }

  let html = `<h3>Top ${meal} Places in ${city}</h3><div class="restaurant-grid">`;
  results.forEach(item => {
    const stars = "★".repeat(Math.floor(item.rating)) + "☆".repeat(5 - Math.floor(item.rating));
    html += `
      <div class="restaurant-card">
        <h4>${item.name}</h4>
        <p><strong>Rating:</strong> ${stars} (${item.rating})</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><span class="badge">🍽️ ${item.preferred}</span></p>
        <a href="${item.map}" target="_blank" class="map-btn">View on Map</a>
      </div>
    `;
  });
  html += `</div>`;

  resultContainer.innerHTML = html;
});
