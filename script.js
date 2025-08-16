
    const form = document.getElementById('foodForm');
    const resultsSection = document.getElementById('resultsSection');

    const restaurantData = {
      sangli: {
        breakfast: [
          { name: "Shri Ganesh Nashta Centre", rating: 4.6, type: "veg"},
          { name: "Natraj Annexe", rating: 4.4, type: "both" },
          { name: "New Hanuman Executive", rating: 4.3, type: "veg" },
          { name: "Sharada Bhuvan", rating: 4.2, type: "veg" },
          { name: "Raghvendra Nashta Center", rating: 4.2, type: "veg" },
          { name: "Kolhapuri Dandga Vada", rating: 4.1, type: "veg" },
          { name: "Maitri Nashta Centre", rating: 4.3, type: "veg" },
          { name: "Apey Sushala Center", rating: 4.0, type: "veg" },
          { name: "Hotel Nandinee", rating: 4.0, type: "veg" },
          { name: "Sai Nashta Centre", rating: 4.1, type: "veg" },
          { name: "Friends Dosa Corner", rating: 4.2, type: "veg" }
        ],
        lunch: [
          { name: "Dalchini (Veg Meals)", rating: 4.7, type: "veg" },
          { name: "Hotel Uday", rating: 4.3, type: "both" },
          { name: "Hotel Natraj Annexe", rating: 4.4, type: "both" },
          { name: "Hotel Samudra", rating: 4.2, type: "both" },
          { name: "Hotel Shivsai", rating: 4.1, type: "both" },
          { name: "Hotel Meghdoot", rating: 4.3, type: "veg" },
          { name: "Hotel Ruchira", rating: 4.2, type: "veg" },
          { name: "Hotel SS Resto", rating: 4.0, type: "both" },
          { name: "Ajwaa Restaurant", rating: 4.1, type: "nonveg" },
          { name: "Hotel Sai Palace", rating: 4.0, type: "both" },
          { name: "Hotel Arya Regency", rating: 4.1, type: "both" }
        ],
        dinner: [
          { name: "Dalchini", rating: 4.7, type: "veg" },
          { name: "Winterfall Italian Finest", rating: 4.5, type: "both" },
          { name: "Hotel Uday", rating: 4.3, type: "both" },
          { name: "Hotel Samrat", rating: 4.1, type: "both" },
          { name: "Hotel Shivraj", rating: 4.2, type: "both" },
          { name: "Hotel Panchratna", rating: 4.0, type: "both" },
          { name: "Hotel Rajdhani", rating: 4.1, type: "veg" },
          { name: "Hotel Shivsai", rating: 4.2, type: "both" },
          { name: "Hotel Woodrow", rating: 4.3, type: "both" },
          { name: "Chill N Fill Chinese", rating: 4.2, type: "both" },
          { name: "Ajwaa Restaurant", rating: 4.1, type: "nonveg" }
        ],
        snacks: [
          { name: "Jimis Burger", rating: 4.5, type: "both" },
          { name: "DC Cheesy Café", rating: 4.4, type: "both" },
          { name: "Kranti Bhel", rating: 4.3, type: "veg" },
          { name: "One Bite (Vijaynagar)", rating: 4.2, type: "veg" },
          { name: "Laziz Pizza", rating: 4.3, type: "both" },
          { name: "Apna Bhel & Juice Centre", rating: 4.1, type: "veg" },
          { name: "Sai Snacks & Sandwich", rating: 4.0, type: "veg" },
          { name: "Al Baith Fast Food", rating: 4.2, type: "nonveg" },
          { name: "Bites & Beans", rating: 4.4, type: "veg" },
          { name: "Scoops – Pizza + Snacks Café", rating: 4.3, type: "both" },
          { name: "Chill N Fill Chinese", rating: 4.2, type: "both" }
        ],
        tea_coffee: [
          { name: "Sairam Coffee", rating: 4.6 },
          { name: "Ladybean Coffee", rating: 4.5 },
          { name: "TeaMax Café", rating: 4.4 },
          { name: "Café Coffee Day (CCD)", rating: 4.3 },
          { name: "The Tea Toast Co.", rating: 4.2 },
          { name: "Winterfall Italian Finest", rating: 4.3 },
          { name: "Maitri Nashta Centre", rating: 4.2 },
          { name: "Bites & Beans", rating: 4.4 },
          { name: "Pure Veg Cloud Kitchen", rating: 4.3 },
          { name: "DC Cheesy Café", rating: 4.2 },
          { name: "Starbucks", rating: 4.5 }
        ]
      },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      pune: {
        breakfast: [
          { name: "Vaishali Restaurant", rating: 4.6, type: "veg" },
          { name: "Wadeshwar", rating: 4.5, type: "veg" },
          { name: "Vohuman Café", rating: 4.4, type: "nonveg" },
          { name: "Goodluck Café", rating: 4.3, type: "both" },
          { name: "Irani Café", rating: 4.2, type: "both" },
          { name: "Le Plaisir", rating: 4.1, type: "veg" },
          { name: "The Flour Works", rating: 4.1, type: "veg" },
          { name: "German Bakery", rating: 4.0, type: "both" },
          { name: "Cafe Pune", rating: 4.0, type: "veg" },
          { name: "Kalyani Bakery", rating: 4.2, type: "veg" }
      ],
      lunch: [
          { name: "Durvankur Dining Hall", rating: 4.6, type: "veg" },
          { name: "SP’s Biryani House", rating: 4.4, type: "nonveg" },
          { name: "Sukanta Pure Veg", rating: 4.3, type: "veg" },
          { name: "Aaoji Khhaoji", rating: 4.2, type: "both" },
          { name: "Mastani Misal", rating: 4.1, type: "veg" },
          { name: "Malaka Spice", rating: 4.4, type: "both" },
          { name: "The Good Bowl", rating: 4.3, type: "veg" },
          { name: "Barbeque Nation", rating: 4.5, type: "both" },
          { name: "Kayani Bakery & Restaurant", rating: 4.2, type: "veg" },
          { name: "The Sassy Spoon", rating: 4.3, type: "both" }
      ],
      dinner: [
          { name: "Barbeque Nation", rating: 4.5, type: "both" },
          { name: "Mainland China", rating: 4.4, type: "both" },
          { name: "Baan Tao – Hyatt Pune", rating: 4.6, type: "both" },
          { name: "Little Italy", rating: 4.3, type: "veg" },
          { name: "Blue Nile", rating: 4.1, type: "nonveg" },
          { name: "Arthur’s Theme", rating: 4.2, type: "both" },
          { name: "Paasha", rating: 4.5, type: "both" },
          { name: "The Urban Foundry", rating: 4.2, type: "both" },
          { name: "Shizusan", rating: 4.3, type: "both" },
          { name: "The High Spirits Cafe", rating: 4.0, type: "both" }
      ],
      snacks: [
          { name: "JJ Garden Vada Pav", rating: 4.5, type: "veg" },
          { name: "Garden Vada Pav Center", rating: 4.4, type: "veg" },
          { name: "Pagdandi Books Chai Café", rating: 4.3, type: "veg" },
          { name: "The K Factory", rating: 4.2, type: "both" },
          { name: "Burger King", rating: 4.1, type: "both" },
          { name: "Chitale Bandhu Mithaiwale", rating: 4.6, type: "veg" },
          { name: "Cafe Goodluck", rating: 4.3, type: "both" },
          { name: "Vaishali Snacks", rating: 4.2, type: "veg" },
          { name: "Bombay Vada Pav", rating: 4.0, type: "veg" },
          { name: "Marz-O-Rin", rating: 4.1, type: "veg" }
      ],
      tea_coffee: [
          { name: "Café Peter", rating: 4.4 },
          { name: "Irani Café", rating: 4.3 },
          { name: "Starbucks", rating: 4.5 },
          { name: "Third Wave Coffee", rating: 4.4 },
          { name: "Tea Trails", rating: 4.3 },
          { name: "Pagdandi Books Chai Café", rating: 4.2 },
          { name: "Blue Tokai Coffee Roasters", rating: 4.4 },
          { name: "Café Goodluck", rating: 4.3 },
          { name: "German Bakery", rating: 4.1 },
          { name: "Tea Villa Café", rating: 4.2 }
      ]
      },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      islampur: {
        breakfast: [
          { name: "Hotel Rajdhani", rating: 4.4, type: "veg" },
          { name: "Cafe Sunrise", rating: 4.3, type: "both" },
          { name: "Irani Cafe Islampur", rating: 4.2, type: "both" },
          { name: "Udupi Corner", rating: 4.1, type: "veg" },
          { name: "Yummy Eggs", rating: 4.0, type: "nonveg" }
        ],
        lunch: [
          { name: "Annapurna Bhojanalay", rating: 4.5, type: "veg" },
          { name: "Hotel Malvan Tadka", rating: 4.3, type: "nonveg" },
          { name: "Sankalp Veg Restaurant", rating: 4.2, type: "veg" },
          { name: "Hotel Shree Samarth", rating: 4.1, type: "both" },
          { name: "Fish Point", rating: 4.2, type: "nonveg" }
        ],
        dinner: [
          { name: "Barbeque Junction", rating: 4.4, type: "both" },
          { name: "Spice Villa", rating: 4.2, type: "both" },
          { name: "The Royal Treat", rating: 4.3, type: "veg" },
          { name: "Hotel Saffron", rating: 4.1, type: "both" },
          { name: "Zaika Non‑Veg Hub", rating: 4.2, type: "nonveg" }
        ],
        snacks: [
          { name: "Islampur Vada Pav", rating: 4.5, type: "veg" },
          { name: "Quick Bites Cafe", rating: 4.3, type: "both" },
          { name: "The Fast Food House", rating: 4.2, type: "both" },
          { name: "Goli Vada Pav", rating: 4.1, type: "veg" },
          { name: "Rollz & More", rating: 4.0, type: "both" }
        ],
        tea_coffee: [
          { name: "Tea Junction", rating: 4.3 },
          { name: "Chai Galli", rating: 4.4 },
          { name: "Cafe Delight", rating: 4.2 },
          { name: "Coffee Bean Café", rating: 4.3 },
          { name: "Kulhad Chai Spot", rating: 4.1 }
        ]
      },
      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      kolhapur: {
        breakfast: [
          { name: "Hotel Shree International", rating: 4.5, type: "veg" },
          { name: "Kolhapuri Misal House", rating: 4.4, type: "veg" },
          { name: "Cafe Chitralekha", rating: 4.3, type: "both" },
          { name: "Nisarg Pure Veg Restaurant", rating: 4.2, type: "veg" },
          { name: "Spice Box Kolhapur", rating: 4.1, type: "nonveg" }
        ],
        lunch: [
          { name: "Hotel Moti Mahal", rating: 4.6, type: "both" },
          { name: "Rajashree Pure Veg Bistro", rating: 4.4, type: "veg" },
          { name: "Mahadev Kolhapuri Misal", rating: 4.3, type: "veg" },
          { name: "Spice Kranti", rating: 4.2, type: "nonveg" },
          { name: "Royal Non‑Veg Delights", rating: 4.1, type: "nonveg" }
        ],
        dinner: [
          { name: "Kolhapur Bhavan", rating: 4.5, type: "both" },
          { name: "Spice Kingdom", rating: 4.4, type: "both" },
          { name: "Little Italy Kolhapur", rating: 4.2, type: "veg" },
          { name: "Royal Sizzlers", rating: 4.3, type: "both" },
          { name: "Fish N Feast", rating: 4.1, type: "nonveg" }
        ],
        snacks: [
          { name: "Kolhapuri Bhel Center", rating: 4.5, type: "veg" },
          { name: "Sizzle Sandwiches", rating: 4.3, type: "both" },
          { name: "Mini Vada Pav Corner", rating: 4.2, type: "veg" },
          { name: "Roll ’n’ Go", rating: 4.1, type: "both" },
          { name: "Crispy Kanda Bhaji", rating: 4.0, type: "veg" }
        ],
        tea_coffee: [
          { name: "The Tea Garden", rating: 4.4 },
          { name: "Kolha Coffee Corner", rating: 4.3 },
          { name: "Cafe Delight Kolhapur", rating: 4.2 },
          { name: "Barista Kolhapur", rating: 4.1 },
          { name: "Chai Pavillion", rating: 4.0 }
        ]
      },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      mumbai: {
        breakfast: [
          { name: "Ram Ashraya", rating: 4.6, type: "veg" },
          { name: "Madras Café", rating: 4.5, type: "veg" },
          { name: "Kyani & Co.", rating: 4.4, type: "both" },
          { name: "The Nutcracker", rating: 4.3, type: "veg" },
          { name: "Candies", rating: 4.2, type: "both" }
        ],
        lunch: [
          { name: "Trishna", rating: 4.6, type: "nonveg" },
          { name: "Gajalee", rating: 4.4, type: "nonveg" },
          { name: "Soam", rating: 4.3, type: "veg" },
          { name: "Britannia & Co.", rating: 4.2, type: "both" },
          { name: "Mahesh Lunch Home", rating: 4.3, type: "nonveg" }
        ],
        dinner: [
          { name: "Bayroute", rating: 4.6, type: "both" },
          { name: "Hitchki", rating: 4.4, type: "both" },
          { name: "Farzi Café", rating: 4.3, type: "both" },
          { name: "The Bombay Canteen", rating: 4.5, type: "both" },
          { name: "Global Fusion", rating: 4.2, type: "both" }
        ],
        snacks: [
          { name: "Bademiya", rating: 4.5, type: "nonveg" },
          { name: "Apsara Ice Creams", rating: 4.4, type: "veg" },
          { name: "Kailash Parbat", rating: 4.3, type: "veg" },
          { name: "Elco Pani Puri", rating: 4.2, type: "veg" },
          { name: "Sardar Pav Bhaji", rating: 4.1, type: "veg" }
        ],
        tea_coffee: [
          { name: "Starbucks Mumbai", rating: 4.5 },
          { name: "Prithvi Café", rating: 4.4 },
          { name: "Coffee By Di Bella", rating: 4.3 },
          { name: "Le15 Café", rating: 4.2 },
          { name: "Kala Ghoda Café", rating: 4.3 }
        ]
      },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      nashik: {
        breakfast: [
          { name: "Hotel Panchavati", rating: 4.5, type: "veg" },
          { name: "Udupi Bhavan", rating: 4.3, type: "veg" },
          { name: "Coffee Culture", rating: 4.2, type: "both" },
          { name: "Misal Junction", rating: 4.1, type: "veg" },
          { name: "Modern Café", rating: 4.0, type: "both" }
        ],
        lunch: [
          { name: "Divtya Budhlya Wada", rating: 4.6, type: "nonveg" },
          { name: "Hotel Sayantara", rating: 4.4, type: "both" },
          { name: "Hotel Panchavati Gaurav", rating: 4.3, type: "veg" },
          { name: "Sadhana Restaurant", rating: 4.2, type: "veg" },
          { name: "Barbeque Ville", rating: 4.1, type: "both" }
        ],
        dinner: [
          { name: "Hotel Blue Leaf", rating: 4.5, type: "both" },
          { name: "The Sidewalk", rating: 4.4, type: "both" },
          { name: "Hotel Ginger", rating: 4.2, type: "both" },
          { name: "The Orchard Fine Dine", rating: 4.3, type: "both" },
          { name: "Barbeque Nation Nashik", rating: 4.1, type: "both" }
        ],
        snacks: [
          { name: "Misal Adda", rating: 4.5, type: "veg" },
          { name: "The Belgian Waffle Co.", rating: 4.4, type: "veg" },
          { name: "Cafe Bliss", rating: 4.3, type: "both" },
          { name: "Bappa Misal", rating: 4.2, type: "veg" },
          { name: "Smokin' Joe's", rating: 4.1, type: "both" }
        ],
        tea_coffee: [
          { name: "Tea Villa Café Nashik", rating: 4.4 },
          { name: "Third Wave Coffee Nashik", rating: 4.3 },
          { name: "Cafe Coffee Day", rating: 4.2 },
          { name: "Barista Nashik", rating: 4.1 },
          { name: "Brewers Café", rating: 4.0 }
        ]
      },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      aurangabad: {
        breakfast: [
          { name: "Jai Shree Café", rating: 4.5, type: "veg" },
          { name: "Irani Chai & Bun", rating: 4.4, type: "both" },
          { name: "Hotel Ajanta", rating: 4.3, type: "both" },
          { name: "Mughal Darbar", rating: 4.2, type: "both" },
          { name: "Café Mohammadi", rating: 4.1, type: "veg" }
        ],
        lunch: [
          { name: "Punjab Restaurant", rating: 4.6, type: "nonveg" },
          { name: "Shree Datta Restaurant", rating: 4.4, type: "both" },
          { name: "Hotel Santa Firdous", rating: 4.3, type: "veg" },
          { name: "Dawat-e-Khaas", rating: 4.2, type: "both" },
          { name: "Café 16", rating: 4.1, type: "veg" }
        ],
        dinner: [
          { name: "Thaat Baat", rating: 4.7, type: "both" },
          { name: "Little Italy Aurangabad", rating: 4.4, type: "veg" },
          { name: "Aurangabad Biryani House", rating: 4.3, type: "nonveg" },
          { name: "Mini Punjab", rating: 4.2, type: "nonveg" },
          { name: "Spice Temple", rating: 4.1, type: "both" }
        ],
        snacks: [
          { name: "Chaat Bazaar", rating: 4.5, type: "veg" },
          { name: "Café Landmark", rating: 4.3, type: "both" },
          { name: "Waffle Corner", rating: 4.2, type: "veg" },
          { name: "Roll Junction", rating: 4.1, type: "both" },
          { name: "Street Bites", rating: 4.0, type: "both" }
        ],
        tea_coffee: [
          { name: "Tea Room", rating: 4.5 },
          { name: "Café Beans", rating: 4.4 },
          { name: "Barista Aurangabad", rating: 4.3 },
          { name: "The Tea Stop", rating: 4.2 },
          { name: "Coffee Culture", rating: 4.1 }
        ]
      },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      nagpur: {
        breakfast: [
          { name: "Chandni Chowk", rating: 4.6, type: "veg" },
          { name: "Bishop’s Retreat", rating: 4.5, type: "both" },
          { name: "Coffee Pot", rating: 4.4, type: "both" },
          { name: "Gini's Deli", rating: 4.3, type: "veg" },
          { name: "Batata Café", rating: 4.2, type: "veg" }
        ],
        lunch: [
          { name: "The Square Kitchen", rating: 4.6, type: "both" },
          { name: "SP’s Biryani Centre", rating: 4.5, type: "nonveg" },
          { name: "Shakahari Upahaar", rating: 4.4, type: "veg" },
          { name: "Swadisht", rating: 4.3, type: "both" },
          { name: "A1 Sarafa", rating: 4.2, type: "nonveg" }
        ],
        dinner: [
          { name: "Zaffran", rating: 4.6, type: "both" },
          { name: "Green Chilly", rating: 4.5, type: "both" },
          { name: "Café De Italiano", rating: 4.4, type: "veg" },
          { name: "Marhaba Multicuisine", rating: 4.3, type: "both" },
          { name: "Spanish Riding Club", rating: 4.2, type: "both" }
        ],
        snacks: [
          { name: "Nagpur Vada Pav", rating: 4.7, type: "veg" },
          { name: "Eatstreet Nagpur", rating: 4.4, type: "both" },
          { name: "Jhaal Pot Tarang", rating: 4.3, type: "veg" },
          { name: "Corner 21", rating: 4.2, type: "both" },
          { name: "Mighty Smoothies", rating: 4.1, type: "veg" }
        ],
        tea_coffee: [
          { name: "Barista Nagpur", rating: 4.5 },
          { name: "Café Coffee Day", rating: 4.4 },
          { name: "Starbucks Nagpur", rating: 4.3 },
          { name: "Third Wave Coffee Roasters", rating: 4.2 },
          { name: "Tea Time", rating: 4.1 }
        ]
      },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      solapur: {
        breakfast: [
          { name: "Hotel Surabhi", rating: 4.5, type: "veg" },
          { name: "Chhatrapati Café", rating: 4.4, type: "both" },
          { name: "Balaji Upahaar Kendra", rating: 4.3, type: "veg" },
          { name: "Coffee Street", rating: 4.2, type: "both" },
          { name: "Vishal Juice Centre", rating: 4.1, type: "veg" }
        ],
        lunch: [
          { name: "Sajjan Bhojanalay", rating: 4.6, type: "veg" },
          { name: "Hotel Rajwada", rating: 4.4, type: "nonveg" },
          { name: "Hemant Pure Veg", rating: 4.3, type: "veg" },
          { name: "Taste of Solapur", rating: 4.2, type: "both" },
          { name: "Swad Mandir", rating: 4.1, type: "veg" }
        ],
        dinner: [
          { name: "Spice India", rating: 4.5, type: "both" },
          { name: "Hotel Brahmani", rating: 4.4, type: "both" },
          { name: "Little Italy Solapur", rating: 4.3, type: "veg" },
          { name: "Non-Veg Express", rating: 4.2, type: "nonveg" },
          { name: "Royal Dine", rating: 4.1, type: "both" }
        ],
        snacks: [
          { name: "Solapur Bhel Centre", rating: 4.6, type: "veg" },
          { name: "Roll 2 Go", rating: 4.4, type: "both" },
          { name: "Snack House", rating: 4.3, type: "both" },
          { name: "Mini Vada Pav", rating: 4.2, type: "veg" },
          { name: "Crispy Corner", rating: 4.1, type: "veg" }
        ],
        tea_coffee: [
          { name: "Tea Time Solapur", rating: 4.5 },
          { name: "Coffee Club", rating: 4.4 },
          { name: "Barista Solapur", rating: 4.3 },
          { name: "Brewers Café", rating: 4.2 },
          { name: "Chai Street", rating: 4.1 }
        ]
      },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      satara: {
        breakfast: [
          { name: "Shri Krishna Café", rating: 4.5, type: "veg" },
          { name: "Hotel Yewale’s", rating: 4.4, type: "both" },
          { name: "Rajwada Snack Bar", rating: 4.3, type: "veg" },
          { name: "Coffee Buzz", rating: 4.2, type: "both" },
          { name: "Vada Pav Corner", rating: 4.1, type: "veg" }
        ],
        lunch: [
          { name: "Satara Bhojanalay", rating: 4.6, type: "veg" },
          { name: "Hotel Shanti", rating: 4.5, type: "both" },
          { name: "Suruchi Restaurant", rating: 4.4, type: "veg" },
          { name: "Spice Junction", rating: 4.3, type: "both" },
          { name: "Karan’s Dhaba", rating: 4.2, type: "nonveg" }
        ],
        dinner: [
          { name: "Maharaja Veg & Non‑Veg", rating: 4.6, type: "both" },
          { name: "Little Italy Satara", rating: 4.4, type: "veg" },
          { name: "Dhaba Delight", rating: 4.3, type: "both" },
          { name: "Seafood Plaza", rating: 4.2, type: "nonveg" },
          { name: "Family Feast", rating: 4.1, type: "both" }
        ],
        snacks: [
          { name: "Satara Bhel Center", rating: 4.5, type: "veg" },
          { name: "Roll Station", rating: 4.4, type: "both" },
          { name: "Crispy Indian", rating: 4.3, type: "veg" },
          { name: "Mini Vada Pav", rating: 4.2, type: "veg" },
          { name: "Choco Waffles", rating: 4.1, type: "veg" }
        ],
        tea_coffee: [
          { name: "Tea Break", rating: 4.5 },
          { name: "Café Moments", rating: 4.4 },
          { name: "Barista Satara", rating: 4.3 },
          { name: "The Tea Spot", rating: 4.2 },
          { name: "Third Wave Coffee", rating: 4.1 }
        ]
      },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ahmedabad: {
        breakfast: [
          { name: "Manek Chowk Breakfast", rating: 4.6, type: "both" },
          { name: "Gordhan Thal", rating: 4.5, type: "veg" },
          { name: "Café Alfresco", rating: 4.4, type: "both" },
          { name: "Manhattan Deli", rating: 4.3, type: "both" },
          { name: "Tea Villa", rating: 4.2, type: "veg" }
        ],
        lunch: [
          { name: "Gopi Dining Hall", rating: 4.6, type: "veg" },
          { name: "Rajwadu Restaurant", rating: 4.5, type: "veg" },
          { name: "Agashiye", rating: 4.4, type: "veg" },
          { name: "The Project Café", rating: 4.3, type: "both" },
          { name: "Bawarchi", rating: 4.2, type: "both" }
        ],
        dinner: [
          { name: "Turkish Hut", rating: 4.5, type: "nonveg" },
          { name: "Barbeque Nation", rating: 4.4, type: "both" },
          { name: "The Yellow Chilli", rating: 4.3, type: "both" },
          { name: "Zakhum", rating: 4.2, type: "nonveg" },
          { name: "Oops Food", rating: 4.1, type: "veg" }
        ],
        snacks: [
          { name: "Jalebi Wala", rating: 4.7, type: "veg" },
          { name: "Street Chaat", rating: 4.5, type: "veg" },
          { name: "Falafel’s", rating: 4.4, type: "both" },
          { name: "Roller Café", rating: 4.3, type: "both" },
          { name: "Cookie Mantra", rating: 4.2, type: "veg" }
        ],
        tea_coffee: [
          { name: "Starbucks Ahmedabad", rating: 4.5 },
          { name: "Café Alfresco", rating: 4.4 },
          { name: "Barista Ahmedabad", rating: 4.3 },
          { name: "Café Coffee Day", rating: 4.2 },
          { name: "Third Wave Coffee", rating: 4.1 }
        ]
      }

    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      const city = document.getElementById('city').value;
      const meal = document.getElementById('meal').value;
      const results = restaurantData[city][meal];

      let html = `<h3>Top ${meal} Places in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3><div class="restaurant-grid">`;
      results.forEach(item => {
        const stars = '★'.repeat(Math.floor(item.rating)) + '☆'.repeat(5 - Math.floor(item.rating));
        const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ', ' + city)}`;
        let typeTag = '';
        if (item.type === 'veg') {
          typeTag = '<span class="veg-tag">Veg</span>';
        } else if (item.type === 'nonveg') {
          typeTag = '<span class="nonveg-tag">Non-Veg</span>';
        } else if (item.type === 'both') {
          typeTag = '<span class="both-tag">Veg & Non-Veg</span>';
        }
        html += `
          <div class="restaurant-card">
            <h4>${item.name}</h4>
            <p class="rating">${stars} (${item.rating})</p>
            ${typeTag || ''}
            <div class="map-wrapper">
              <a class="map-btn" href="${mapLink}" target="_blank"> View on Map</a>
            </div>
          </div>
        `;
      });
      html += '</div>';
      resultsSection.innerHTML = html;
    });

  

    
    
    
