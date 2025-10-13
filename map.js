  const restaurants = {
  sangli: {
    breakfast: [
      {emoji:"🥞",name:"Shri Ganesh Nashta Center",rating:"⭐ 4.3 | Veg",badge:"Legendary Spot",desc:"Famous for Poha, Upma, Vada-Sambar, Misal-Pav"},
      {emoji:"🍲",name:"Halad Bhavan",rating:"⭐ 4.4 | Veg",badge:"Traditional Taste",desc:"Popular for Upma, Idli, Medu Vada"},
      {emoji:"🥪",name:"Friends Dosa Corner",rating:"⭐ 4.2 | Veg",badge:"Student Favourite",desc:"Best for Dosa, Uttapam, Idli"},
      {emoji:"🥗",name:"Natraj Annexe",rating:"⭐ 4.4 | Both",badge:"Family Spot",desc:"Breakfast Thali & South Indian dishes"},
      {emoji:"🍛",name:"New Hanuman Executive",rating:"⭐ 4.3 | Veg",badge:"Pure Veg",desc:"Idli-Sambar, Dosa, Sheera"},
      {emoji:"🍵",name:"Hotel Samrat",rating:"⭐ 4.5 | Veg",badge:"Classic Pick",desc:"Misal Pav, Poha, Tea"},
      {emoji:"🥘",name:"Hotel Dimple",rating:"⭐ 4.1 | Veg",badge:"Quick Service",desc:"Upma, Idli, Dosa"},
      {emoji:"🥯",name:"Sharada Bhuvan",rating:"⭐ 4.2 | Veg",badge:"Old & Gold",desc:"Famous Misal Pav & Poha"},
      {emoji:"🍳",name:"Hotel Madhuvan",rating:"⭐ 4.0 | Both",badge:"Affordable Choice",desc:"Egg Omlette, Idli, Sheera"},
      {emoji:"🥣",name:"Hotel Ashoka",rating:"⭐ 4.1 | Veg",badge:"Morning Favourite",desc:"Poha, Idli-Vada, Tea"}
    ],
    lunch: [
      {emoji:"🍽",name:"Hotel Nataraj",rating:"⭐ 4.5 | Veg",badge:"Authentic Meals",desc:"Gujarati & Rajasthani Thali"},
      {emoji:"🍲",name:"Dalchini",rating:"⭐ 4.6 | Veg",badge:"Top Rated",desc:"Maharashtrian Veg Meals"},
      {emoji:"🥘",name:"Hotel Sudarshan",rating:"⭐ 4.3 | Veg",badge:"Budget Friendly",desc:"Veg Thali & Curry"},
      {emoji:"🍛",name:"Mehfil Restaurant",rating:"⭐ 4.2 | Both",badge:"Popular Spot",desc:"Biryani, Veg/Non-Veg Meals"},
      {emoji:"🥗",name:"Annapurna Veg",rating:"⭐ 4.1 | Veg",badge:"Daily Meals",desc:"Veg Thali, Paneer Curries"},
      {emoji:"🍖",name:"Hotel Suruchi",rating:"⭐ 4.4 | Both",badge:"Family Dining",desc:"Chicken, Mutton, Veg Curries"},
      {emoji:"🥘",name:"Hotel Padma",rating:"⭐ 4.0 | Both",badge:"Homely Taste",desc:"Thali & Maharashtrian Meals"},
      {emoji:"🍛",name:"Hotel Pooja",rating:"⭐ 4.2 | Veg",badge:"Quick Lunch",desc:"Veg Thali, Bhaji, Rice"},
      {emoji:"🥩",name:"Hotel Anjali",rating:"⭐ 4.3 | Both",badge:"Non-Veg Famous",desc:"Chicken Thali, Mutton Curry"},
      {emoji:"🥗",name:"Hotel Rajat",rating:"⭐ 4.2 | Veg",badge:"Classic Veg",desc:"Paneer Masala, Dal Fry, Rice"}
    ],
    dinner: [
      {emoji:"🍗",name:"Hotel Suruchi",rating:"⭐ 4.5 | Both",badge:"Family Favourite",desc:"Chicken Tandoori, Veg Curries"},
      {emoji:"🥘",name:"Hotel Blue Star",rating:"⭐ 4.3 | Both",badge:"Dinner Spot",desc:"Chinese, Mughlai & Veg"},
      {emoji:"🍖",name:"Mehfil Restaurant",rating:"⭐ 4.2 | Both",badge:"Biryani Expert",desc:"Chicken Biryani, Paneer Tikka"},
      {emoji:"🥩",name:"Hotel Samrat",rating:"⭐ 4.3 | Both",badge:"Multi-Cuisine",desc:"North Indian, South Indian"},
      {emoji:"🍛",name:"Dalchini",rating:"⭐ 4.4 | Veg",badge:"Veg Special",desc:"Authentic Maharashtrian Veg Meals"},
      {emoji:"🥢",name:"Hotel Rajmandir",rating:"⭐ 4.1 | Both",badge:"Chinese Pick",desc:"Noodles, Manchurian, Paneer"},
      {emoji:"🍗",name:"Hotel Panchami",rating:"⭐ 4.2 | Both",badge:"Grill Spot",desc:"Chicken Kebab, Butter Chicken"},
      {emoji:"🍤",name:"Hotel Ashoka Deluxe",rating:"⭐ 4.0 | Both",badge:"Seafood Pick",desc:"Fish Thali, Prawns Curry"},
      {emoji:"🥘",name:"Hotel Shivneri",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Paneer Butter Masala, Dal Tadka"},
      {emoji:"🍖",name:"Hotel Ruchira",rating:"⭐ 4.2 | Both",badge:"North Indian",desc:"Chicken Curry, Veg Handi"}
    ],
    snacks: [
      {emoji:"🍲",name:"Sambha Bhel",rating:"⭐ 4.6 | Veg",badge:"Street Favourite",desc:"Bhel, Pani Puri, Sev Puri"},
      {emoji:"🥪",name:"Shree Datta Snacks",rating:"⭐ 4.4 | Veg",badge:"Quick Snacks",desc:"Vada Pav, Misal Pav, Samosa"},
      {emoji:"🍟",name:"Ganesh Chiwda",rating:"⭐ 4.5 | Veg",badge:"Popular Snack",desc:"Chiwda, Farsan, Bhel"},
      {emoji:"🍔",name:"Joshi Wadewale",rating:"⭐ 4.3 | Veg",badge:"Vada Pav King",desc:"Vada Pav, Misal Pav"},
      {emoji:"🍜",name:"Durvankur Snacks",rating:"⭐ 4.1 | Veg",badge:"Affordable",desc:"Misal Pav, Upma, Poha"},
      {emoji:"🥟",name:"Sai Snacks Corner",rating:"⭐ 4.2 | Veg",badge:"Tasty Bite",desc:"Samosa, Kachori, Misal"},
      {emoji:"🍿",name:"Hotel Kaveri Snacks",rating:"⭐ 4.0 | Veg",badge:"Family Spot",desc:"Dhokla, Poha, Idli"},
      {emoji:"🍲",name:"Hotel Shreyas Snacks",rating:"⭐ 4.3 | Veg",badge:"Student Choice",desc:"Misal Pav, Upma"},
      {emoji:"🍘",name:"Hotel Meghdoot",rating:"⭐ 4.1 | Veg",badge:"Classic Snack",desc:"Bhel, Shev Puri, Poha"},
      {emoji:"🥨",name:"Hotel Uday",rating:"⭐ 4.2 | Veg",badge:"Healthy Snack",desc:"Sandwich, Upma, Poha"}
    ],
    "tea-coffee": [
      {emoji:"☕",name:"Sairam Café",rating:"⭐ 4.6 | Both",badge:"Coffee Lovers",desc:"Cold Coffee, Cappuccino, Sandwich"},
      {emoji:"☕",name:"Ladybean Café",rating:"⭐ 4.5 | Both",badge:"Trendy Spot",desc:"Espresso, Cold Coffee, Pizza"},
      {emoji:"🍵",name:"Cafe Coffee Day (Sangli)",rating:"⭐ 4.4 | Both",badge:"Popular Cafe",desc:"Cappuccino, Mocha, Latte"},
      {emoji:"☕",name:"Hotel Samrat Tea Center",rating:"⭐ 4.2 | Veg",badge:"Classic Tea",desc:"Masala Chai, Poha"},
      {emoji:"🍵",name:"Cafe Barista",rating:"⭐ 4.3 | Both",badge:"Modern Pick",desc:"Coffee, Pastries"},
      {emoji:"☕",name:"Cafe Brewberrys",rating:"⭐ 4.2 | Both",badge:"Coffee House",desc:"Cold Coffee, Donuts"},
      {emoji:"🍵",name:"Hotel Ganesh Tea Stall",rating:"⭐ 4.1 | Veg",badge:"Quick Tea",desc:"Special Cutting Chai"},
      {emoji:"☕",name:"Cafe Blend",rating:"⭐ 4.0 | Both",badge:"Hangout Spot",desc:"Coffee, Burgers"},
      {emoji:"🍵",name:"Samarth Tea Center",rating:"⭐ 4.2 | Veg",badge:"Pocket Friendly",desc:"Chai, Biscuits"},
      {emoji:"☕",name:"Cafe Mocha",rating:"⭐ 4.3 | Both",badge:"Trendy Cafe",desc:"Mocha, Iced Coffee, Pastries"}
    ]
  },
  pune: {
  breakfast: [
    {emoji:"🥪",name:"Vaishali",rating:"⭐ 4.6 | Veg",badge:"Legendary Spot",desc:"Famous for South Indian dishes & sandwiches"},
    {emoji:"🥗",name:"Wadeshwar",rating:"⭐ 4.5 | Veg",badge:"Healthy Choice",desc:"Idli, Dosa, Upma, Juice"},
    {emoji:"🍛",name:"Goodluck Café",rating:"⭐ 4.4 | Both",badge:"Iconic Irani Café",desc:"Bun Maska, Omelette, Tea"},
    {emoji:"🍵",name:"Vohuman Café",rating:"⭐ 4.5 | Both",badge:"Classic Irani",desc:"Cheese Omelette, Bun Maska, Chai"},
    {emoji:"🥞",name:"Café Durga",rating:"⭐ 4.3 | Both",badge:"Cold Coffee Hub",desc:"Cold Coffee, Poha, Misal"},
    {emoji:"🍲",name:"Hotel Roopali",rating:"⭐ 4.4 | Veg",badge:"Family Spot",desc:"South Indian Breakfast"},
    {emoji:"🥘",name:"Sujata Mastani",rating:"⭐ 4.2 | Veg",badge:"Unique Pick",desc:"Mastani, Milkshakes"},
    {emoji:"🍳",name:"German Bakery",rating:"⭐ 4.3 | Both",badge:"Trendy Spot",desc:"Breakfast platters, Pastries"},
    {emoji:"🥯",name:"Katakir Misal",rating:"⭐ 4.4 | Veg",badge:"Spicy Favourite",desc:"Misal Pav"},
    {emoji:"🥣",name:"Hotel Vaibhav",rating:"⭐ 4.1 | Veg",badge:"Affordable Choice",desc:"Poha, Upma, Idli"}
  ],
  lunch: [
    {emoji:"🍽",name:"Shabree",rating:"⭐ 4.6 | Veg",badge:"Authentic Thali",desc:"Maharashtrian Veg Thali"},
    {emoji:"🍛",name:"Durvankur Dining Hall",rating:"⭐ 4.5 | Veg",badge:"Popular Spot",desc:"Unlimited Veg Thali"},
    {emoji:"🥩",name:"Blue Nile",rating:"⭐ 4.4 | Both",badge:"Biryani Expert",desc:"Chicken Biryani, Irani Curries"},
    {emoji:"🥘",name:"Vaishali Deluxe",rating:"⭐ 4.3 | Veg",badge:"Classic Veg Meals",desc:"Thali, Paneer, Dal Fry"},
    {emoji:"🍲",name:"Swaad",rating:"⭐ 4.2 | Veg",badge:"Homely Meals",desc:"Veg Thali, Roti, Curry"},
    {emoji:"🍖",name:"George Restaurant",rating:"⭐ 4.3 | Both",badge:"Non-Veg Famous",desc:"Chicken & Mutton Curries"},
    {emoji:"🥗",name:"Mathura",rating:"⭐ 4.4 | Veg",badge:"Daily Thali",desc:"Maharashtrian Veg Thali"},
    {emoji:"🍛",name:"Hotel Rajdhani",rating:"⭐ 4.1 | Veg",badge:"Gujarati/Rajasthani",desc:"Veg Thali"},
    {emoji:"🥘",name:"Sukanta",rating:"⭐ 4.2 | Veg",badge:"Classic Dining",desc:"Unlimited Veg Thali"},
    {emoji:"🥩",name:"Cafe Goodluck",rating:"⭐ 4.4 | Both",badge:"Old & Gold",desc:"Biryani, Omelette, Kebabs"}
  ],
  dinner: [
    {emoji:"🍗",name:"Barbeque Nation",rating:"⭐ 4.5 | Both",badge:"Buffet King",desc:"Grill, Starters, Multi-Cuisine"},
    {emoji:"🥘",name:"Mainland China",rating:"⭐ 4.4 | Both",badge:"Chinese Pick",desc:"Chinese & Asian Meals"},
    {emoji:"🍖",name:"Arthur’s Theme",rating:"⭐ 4.3 | Both",badge:"European Cuisine",desc:"Pasta, Steaks, Continental"},
    {emoji:"🥩",name:"Hotel Vaishali",rating:"⭐ 4.2 | Veg",badge:"Family Dinner",desc:"Veg South Indian & North Indian"},
    {emoji:"🍛",name:"Rasa",rating:"⭐ 4.3 | Both",badge:"Fine Dining",desc:"Indian, Fusion Meals"},
    {emoji:"🥢",name:"China Gate",rating:"⭐ 4.2 | Both",badge:"Chinese Spot",desc:"Noodles, Manchurian"},
    {emoji:"🍗",name:"Hotel Shreyas",rating:"⭐ 4.4 | Veg",badge:"Authentic Thali",desc:"Veg Dinner Thali"},
    {emoji:"🍤",name:"Fish Curry Rice",rating:"⭐ 4.3 | Both",badge:"Seafood Special",desc:"Fish Thali, Prawns Curry"},
    {emoji:"🥘",name:"Terttulia",rating:"⭐ 4.1 | Both",badge:"Trendy Dining",desc:"Pizza, Pasta, Burgers"},
    {emoji:"🍖",name:"Siddhi Restaurant",rating:"⭐ 4.0 | Both",badge:"Affordable Dinner",desc:"Veg/Non-Veg Meals"}
  ],
  snacks: [
    {emoji:"🍔",name:"Joshi Wadewale",rating:"⭐ 4.5 | Veg",badge:"Vada Pav King",desc:"Vada Pav, Misal Pav"},
    {emoji:"🥟",name:"Garden Vada Pav",rating:"⭐ 4.4 | Veg",badge:"Street Favourite",desc:"Vada Pav, Bhaji"},
    {emoji:"🍜",name:"Chitale Bandhu",rating:"⭐ 4.3 | Veg",badge:"Sweets & Snacks",desc:"Bakarwadi, Chiwda"},
    {emoji:"🍟",name:"Bipin Snacks",rating:"⭐ 4.2 | Veg",badge:"Quick Bites",desc:"Poha, Misal, Upma"},
    {emoji:"🥪",name:"Hotel Roopali Snacks",rating:"⭐ 4.3 | Veg",badge:"Classic Snacks",desc:"Sandwich, Misal"},
    {emoji:"🍲",name:"Ganesh Bhel",rating:"⭐ 4.5 | Veg",badge:"Bhel Famous",desc:"Bhel, Pani Puri"},
    {emoji:"🥨",name:"Kaka Halwai",rating:"⭐ 4.3 | Veg",badge:"Sweets & Namkeen",desc:"Chiwda, Farsan"},
    {emoji:"🍘",name:"Joshi Snacks",rating:"⭐ 4.0 | Veg",badge:"Local Pick",desc:"Misal, Upma"},
    {emoji:"🍿",name:"Durvankur Snacks",rating:"⭐ 4.1 | Veg",badge:"Pocket Friendly",desc:"Poha, Sheera"},
    {emoji:"🥟",name:"Shree Snacks Corner",rating:"⭐ 4.2 | Veg",badge:"Student Choice",desc:"Vada Pav, Misal Pav"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Coffee Day (Pune)",rating:"⭐ 4.4 | Both",badge:"Popular Cafe",desc:"Cappuccino, Latte, Pastries"},
    {emoji:"🍵",name:"Irani Café",rating:"⭐ 4.5 | Both",badge:"Classic Irani",desc:"Chai, Bun Maska"},
    {emoji:"☕",name:"Vohuman Café",rating:"⭐ 4.6 | Both",badge:"Tea & Coffee Hub",desc:"Irani Chai, Bun Maska"},
    {emoji:"☕",name:"Starbucks Pune",rating:"⭐ 4.4 | Both",badge:"Trendy Spot",desc:"Espresso, Cappuccino, Cold Brew"},
    {emoji:"🍵",name:"Cafe Peter",rating:"⭐ 4.3 | Both",badge:"Korean Twist",desc:"Coffee, Korean Snacks"},
    {emoji:"☕",name:"Café Kathaa",rating:"⭐ 4.2 | Both",badge:"Student Favourite",desc:"Cold Coffee, Maggi"},
    {emoji:"🍵",name:"Third Wave Coffee",rating:"⭐ 4.5 | Both",badge:"Specialty Coffee",desc:"Pour-over, Cold Brew"},
    {emoji:"☕",name:"Pagdandi Books & Cafe",rating:"⭐ 4.4 | Both",badge:"Cozy Spot",desc:"Coffee, Sandwiches"},
    {emoji:"🍵",name:"Cafe Durga",rating:"⭐ 4.3 | Both",badge:"Cold Coffee Hub",desc:"Cold Coffee, Poha"},
    {emoji:"☕",name:"Fat Cat’s Café",rating:"⭐ 4.2 | Both",badge:"Trendy Cafe",desc:"Coffee, Cheesecake"}
  ]
},
  solapur: {
  breakfast: [
    {emoji:"🥪",name:"Hotel Kamath",rating:"⭐ 4.4 | Veg",badge:"Classic Spot",desc:"Idli, Dosa, Upma"},
    {emoji:"🥗",name:"Laxmi Dosa Center",rating:"⭐ 4.3 | Veg",badge:"Popular Pick",desc:"Varieties of Dosa, Uttapam"},
    {emoji:"🍵",name:"Shivraj Tea House",rating:"⭐ 4.2 | Veg",badge:"Local Favourite",desc:"Tea, Poha, Sheera"},
    {emoji:"🥣",name:"Hotel Surya",rating:"⭐ 4.1 | Veg",badge:"Quick Service",desc:"Poha, Idli, Vada"},
    {emoji:"🥯",name:"Hotel Padmavati",rating:"⭐ 4.2 | Veg",badge:"Family Spot",desc:"Misal Pav, Upma"},
    {emoji:"🍛",name:"Hotel Priya",rating:"⭐ 4.3 | Veg",badge:"Morning Favourite",desc:"Dosa, Idli, Sheera"},
    {emoji:"🥘",name:"Durga Bhavan",rating:"⭐ 4.0 | Veg",badge:"Affordable Choice",desc:"Poha, Upma"},
    {emoji:"🍳",name:"Hotel Madhuvan",rating:"⭐ 4.2 | Both",badge:"Non-Veg Pick",desc:"Omelette, Egg Curry"},
    {emoji:"🥗",name:"Hotel Natraj",rating:"⭐ 4.3 | Veg",badge:"Classic Pick",desc:"South Indian Breakfast"},
    {emoji:"🥞",name:"Hotel Anand",rating:"⭐ 4.1 | Veg",badge:"Pocket Friendly",desc:"Idli, Dosa, Tea"}
  ],
  lunch: [
    {emoji:"🍽",name:"Hotel Surya International",rating:"⭐ 4.4 | Both",badge:"Family Spot",desc:"Veg/Non-Veg Thali"},
    {emoji:"🍛",name:"Hotel Priya",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Paneer Curries, Dal Fry"},
    {emoji:"🥩",name:"Hotel Manas",rating:"⭐ 4.4 | Both",badge:"Non-Veg Famous",desc:"Chicken/Mutton Thali"},
    {emoji:"🥘",name:"Hotel Sarovar",rating:"⭐ 4.2 | Veg",badge:"Authentic Meals",desc:"Maharashtrian Veg Thali"},
    {emoji:"🍲",name:"Hotel Laxmi",rating:"⭐ 4.1 | Veg",badge:"Daily Meals",desc:"Veg Thali, Rice, Curry"},
    {emoji:"🥗",name:"Hotel Geeta",rating:"⭐ 4.0 | Veg",badge:"Budget Friendly",desc:"Veg Meals"},
    {emoji:"🍖",name:"Hotel Samadhan",rating:"⭐ 4.3 | Both",badge:"Non-Veg Spot",desc:"Mutton Curry, Chicken Curry"},
    {emoji:"🥘",name:"Hotel Anmol",rating:"⭐ 4.2 | Veg",badge:"Classic Dining",desc:"Thali, Veg Curry"},
    {emoji:"🥗",name:"Hotel Shreepad",rating:"⭐ 4.1 | Veg",badge:"Affordable Pick",desc:"Veg Meals"},
    {emoji:"🥩",name:"Hotel Sagar",rating:"⭐ 4.3 | Both",badge:"Popular Choice",desc:"Non-Veg Thali"}
  ],
  dinner: [
    {emoji:"🍗",name:"Hotel Center Point",rating:"⭐ 4.5 | Both",badge:"Family Favourite",desc:"Indian, Tandoori"},
    {emoji:"🥘",name:"Hotel Surya Deluxe",rating:"⭐ 4.3 | Veg",badge:"Veg Dinner",desc:"Paneer Curries, Dal Fry"},
    {emoji:"🍖",name:"Hotel Manas",rating:"⭐ 4.4 | Both",badge:"Grill Spot",desc:"Chicken, Mutton"},
    {emoji:"🥩",name:"Hotel Priya",rating:"⭐ 4.2 | Veg",badge:"Veg Dinner",desc:"Veg Thali"},
    {emoji:"🍛",name:"Hotel Anmol",rating:"⭐ 4.1 | Veg",badge:"Daily Dinner",desc:"Veg Curry, Roti"},
    {emoji:"🥢",name:"Chinese Corner",rating:"⭐ 4.0 | Both",badge:"Chinese Pick",desc:"Noodles, Fried Rice"},
    {emoji:"🍤",name:"Hotel Samadhan",rating:"⭐ 4.2 | Both",badge:"Seafood Pick",desc:"Fish Curry"},
    {emoji:"🍗",name:"Hotel Sagar",rating:"⭐ 4.3 | Both",badge:"Non-Veg Special",desc:"Chicken Tandoori"},
    {emoji:"🥘",name:"Hotel Sarovar",rating:"⭐ 4.2 | Veg",badge:"Classic Veg",desc:"Veg Thali"},
    {emoji:"🍖",name:"Hotel Surya Palace",rating:"⭐ 4.1 | Both",badge:"Family Dining",desc:"Veg/Non-Veg"}
  ],
  snacks: [
    {emoji:"🍲",name:"Shree Snacks Center",rating:"⭐ 4.5 | Veg",badge:"Street Favourite",desc:"Bhel, Pani Puri"},
    {emoji:"🥪",name:"Joshi Wadewale",rating:"⭐ 4.4 | Veg",badge:"Vada Pav Spot",desc:"Vada Pav, Misal"},
    {emoji:"🍟",name:"Hotel Samrat Snacks",rating:"⭐ 4.2 | Veg",badge:"Student Pick",desc:"Poha, Misal Pav"},
    {emoji:"🥟",name:"Hotel Priya Snacks",rating:"⭐ 4.1 | Veg",badge:"Quick Bites",desc:"Samosa, Kachori"},
    {emoji:"🍜",name:"Bhel House",rating:"⭐ 4.3 | Veg",badge:"Local Favourite",desc:"Bhel, Shev Puri"},
    {emoji:"🍔",name:"Hotel Natraj Snacks",rating:"⭐ 4.0 | Veg",badge:"Affordable Pick",desc:"Misal, Sandwich"},
    {emoji:"🍘",name:"Ganesh Snacks",rating:"⭐ 4.2 | Veg",badge:"Classic Spot",desc:"Poha, Upma"},
    {emoji:"🍿",name:"Hotel Shreyas",rating:"⭐ 4.1 | Veg",badge:"Pocket Friendly",desc:"Misal, Sheera"},
    {emoji:"🥨",name:"Hotel Geeta",rating:"⭐ 4.0 | Veg",badge:"Snack Corner",desc:"Poha, Idli"},
    {emoji:"🍲",name:"Hotel Laxmi",rating:"⭐ 4.2 | Veg",badge:"Family Snacks",desc:"Misal, Sandwich"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Hotel Kamath Tea Center",rating:"⭐ 4.5 | Veg",badge:"Classic Tea",desc:"Masala Chai"},
    {emoji:"🍵",name:"Irani Café",rating:"⭐ 4.3 | Both",badge:"Old Spot",desc:"Irani Chai, Bun Maska"},
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.2 | Both",badge:"Modern Pick",desc:"Coffee, Pastries"},
    {emoji:"🍵",name:"Durga Café",rating:"⭐ 4.3 | Both",badge:"Cold Coffee Hub",desc:"Cold Coffee, Poha"},
    {emoji:"☕",name:"Hotel Surya Café",rating:"⭐ 4.1 | Veg",badge:"Quick Tea",desc:"Chai, Snacks"},
    {emoji:"🍵",name:"Cafe Raj",rating:"⭐ 4.2 | Both",badge:"Trendy Spot",desc:"Coffee, Sandwich"},
    {emoji:"☕",name:"Hotel Laxmi Tea Stall",rating:"⭐ 4.0 | Veg",badge:"Affordable",desc:"Chai, Biscuits"},
    {emoji:"🍵",name:"Cafe Samrat",rating:"⭐ 4.2 | Both",badge:"Student Choice",desc:"Cold Coffee"},
    {emoji:"☕",name:"Cafe Blend",rating:"⭐ 4.1 | Both",badge:"Modern Cafe",desc:"Coffee, Snacks"},
    {emoji:"🍵",name:"Shree Tea Center",rating:"⭐ 4.0 | Veg",badge:"Pocket Friendly",desc:"Cutting Chai"}
  ]
},

kolhapur: {
  breakfast: [
    {emoji:"🥯",name:"Hotel Opal",rating:"⭐ 4.5 | Both",badge:"Iconic Spot",desc:"Misal Pav, Thalipeeth"},
    {emoji:"🥗",name:"Phadatare Misal",rating:"⭐ 4.6 | Veg",badge:"Spicy Favourite",desc:"Kolhapuri Misal Pav"},
    {emoji:"🍵",name:"Hotel Padma",rating:"⭐ 4.4 | Veg",badge:"Classic Breakfast",desc:"Poha, Upma, Tea"},
    {emoji:"🥘",name:"Parakh Misal",rating:"⭐ 4.5 | Veg",badge:"Local Favourite",desc:"Misal Pav"},
    {emoji:"🍲",name:"Hotel Samrat",rating:"⭐ 4.2 | Veg",badge:"Morning Choice",desc:"Poha, Idli"},
    {emoji:"🥪",name:"Shree Snacks",rating:"⭐ 4.1 | Veg",badge:"Affordable Pick",desc:"Sandwich, Misal"},
    {emoji:"🥞",name:"Hotel Geeta",rating:"⭐ 4.0 | Veg",badge:"Budget Friendly",desc:"Upma, Sheera"},
    {emoji:"🍳",name:"Hotel Rajpurohit",rating:"⭐ 4.3 | Both",badge:"Non-Veg Spot",desc:"Egg Curry, Omelette"},
    {emoji:"🥘",name:"Hotel Abhishek",rating:"⭐ 4.2 | Veg",badge:"Classic Spot",desc:"Dosa, Idli"},
    {emoji:"🥣",name:"Hotel Prakash",rating:"⭐ 4.1 | Veg",badge:"Old & Gold",desc:"Poha, Idli, Tea"}
  ],
  lunch: [
    {emoji:"🍽",name:"Hotel Opal",rating:"⭐ 4.6 | Both",badge:"Authentic Thali",desc:"Mutton Thali, Veg Thali"},
    {emoji:"🍛",name:"Hotel Parakh",rating:"⭐ 4.5 | Both",badge:"Kolhapuri Special",desc:"Tambada & Pandhara Rassa"},
    {emoji:"🥘",name:"Hotel Padma",rating:"⭐ 4.3 | Veg",badge:"Classic Veg",desc:"Veg Thali"},
    {emoji:"🥩",name:"Hotel Rajpurohit",rating:"⭐ 4.4 | Both",badge:"Non-Veg Famous",desc:"Chicken/Mutton Thali"},
    {emoji:"🍲",name:"Hotel Geeta",rating:"⭐ 4.2 | Veg",badge:"Veg Meals",desc:"Paneer, Dal Fry"},
    {emoji:"🍖",name:"Hotel Opal Deluxe",rating:"⭐ 4.5 | Both",badge:"Family Spot",desc:"Mutton, Chicken"},
    {emoji:"🥗",name:"Hotel Samrat",rating:"⭐ 4.1 | Veg",badge:"Daily Meals",desc:"Veg Thali"},
    {emoji:"🍛",name:"Hotel Rajat",rating:"⭐ 4.2 | Both",badge:"Classic Kolhapuri",desc:"Chicken Curry, Rassa"},
    {emoji:"🥘",name:"Hotel Abhishek",rating:"⭐ 4.3 | Veg",badge:"Veg Special",desc:"Thali, Paneer"},
    {emoji:"🥩",name:"Hotel Rudra",rating:"⭐ 4.2 | Both",badge:"Non-Veg Pick",desc:"Kolhapuri Thali"}
  ],
  dinner: [
    {emoji:"🍗",name:"Hotel Opal",rating:"⭐ 4.5 | Both",badge:"Family Favourite",desc:"Kolhapuri Thali"},
    {emoji:"🥘",name:"Hotel Padma",rating:"⭐ 4.3 | Veg",badge:"Veg Dinner",desc:"Paneer Curry, Dal"},
    {emoji:"🍖",name:"Hotel Parakh",rating:"⭐ 4.4 | Both",badge:"Spicy Famous",desc:"Tambada/Pandhara Rassa"},
    {emoji:"🥩",name:"Hotel Rudra",rating:"⭐ 4.2 | Both",badge:"Grill Spot",desc:"Mutton Curry"},
    {emoji:"🍛",name:"Hotel Abhishek",rating:"⭐ 4.3 | Veg",badge:"Classic Veg",desc:"Veg Thali"},
    {emoji:"🥢",name:"Chinese Wok",rating:"⭐ 4.0 | Both",badge:"Chinese Pick",desc:"Noodles, Fried Rice"},
    {emoji:"🍤",name:"Hotel Samrat Deluxe",rating:"⭐ 4.1 | Both",badge:"Seafood Special",desc:"Fish Curry"},
    {emoji:"🥘",name:"Hotel Geeta",rating:"⭐ 4.0 | Veg",badge:"Pocket Friendly",desc:"Veg Thali"},
    {emoji:"🍖",name:"Hotel Rajpurohit",rating:"⭐ 4.3 | Both",badge:"Kolhapuri Famous",desc:"Chicken/Mutton Thali"},
    {emoji:"🥘",name:"Hotel Suruchi",rating:"⭐ 4.1 | Both",badge:"Multi-Cuisine",desc:"Veg & Non-Veg"}
  ],
  snacks: [
    {emoji:"🍲",name:"Phadatare Misal",rating:"⭐ 4.6 | Veg",badge:"Spicy Icon",desc:"Misal Pav"},
    {emoji:"🥪",name:"Parakh Misal",rating:"⭐ 4.5 | Veg",badge:"Street Favourite",desc:"Misal Pav"},
    {emoji:"🍟",name:"Joshi Snacks",rating:"⭐ 4.3 | Veg",badge:"Quick Bites",desc:"Poha, Misal"},
    {emoji:"🥟",name:"Hotel Samrat Snacks",rating:"⭐ 4.2 | Veg",badge:"Classic Pick",desc:"Samosa, Kachori"},
    {emoji:"🍜",name:"Hotel Geeta Snacks",rating:"⭐ 4.0 | Veg",badge:"Student Choice",desc:"Poha, Misal"},
    {emoji:"🍔",name:"Hotel Raj Snacks",rating:"⭐ 4.1 | Veg",badge:"Pocket Friendly",desc:"Vada Pav"},
    {emoji:"🍘",name:"Hotel Padma Snacks",rating:"⭐ 4.2 | Veg",badge:"Family Spot",desc:"Bhel, Poha"},
    {emoji:"🍿",name:"Hotel Abhishek Snacks",rating:"⭐ 4.1 | Veg",badge:"Local Pick",desc:"Misal, Sheera"},
    {emoji:"🥨",name:"Hotel Rudra Snacks",rating:"⭐ 4.0 | Veg",badge:"Affordable",desc:"Poha, Sandwich"},
    {emoji:"🍲",name:"Hotel Surya Snacks",rating:"⭐ 4.2 | Veg",badge:"Classic Snack",desc:"Misal, Upma"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Hotel Opal Tea Center",rating:"⭐ 4.5 | Both",badge:"Classic Tea",desc:"Chai, Snacks"},
    {emoji:"🍵",name:"Cafe Coffee Day",rating:"⭐ 4.3 | Both",badge:"Popular Cafe",desc:"Coffee, Latte"},
    {emoji:"☕",name:"Irani Café Kolhapur",rating:"⭐ 4.4 | Both",badge:"Old Spot",desc:"Irani Tea, Bun Maska"},
    {emoji:"🍵",name:"Cafe Peter",rating:"⭐ 4.2 | Both",badge:"Trendy Spot",desc:"Coffee, Sandwich"},
    {emoji:"☕",name:"Durga Café",rating:"⭐ 4.3 | Both",badge:"Cold Coffee Hub",desc:"Cold Coffee, Poha"},
    {emoji:"🍵",name:"Cafe Kathaa",rating:"⭐ 4.1 | Both",badge:"Student Favourite",desc:"Tea, Coffee"},
    {emoji:"☕",name:"Cafe Third Wave",rating:"⭐ 4.2 | Both",badge:"Specialty Coffee",desc:"Pour-over, Espresso"},
    {emoji:"🍵",name:"Hotel Samrat Tea Stall",rating:"⭐ 4.0 | Veg",badge:"Classic Chai",desc:"Masala Chai"},
    {emoji:"☕",name:"Cafe Blend",rating:"⭐ 4.1 | Both",badge:"Modern Cafe",desc:"Coffee, Burgers"},
    {emoji:"🍵",name:"Shree Tea Center",rating:"⭐ 4.0 | Veg",badge:"Affordable",desc:"Cutting Chai"}
  ]
},
mumbai: {
  breakfast: [
    {emoji:"🥪",name:"Kyani & Co.",rating:"⭐ 4.5 | Both",badge:"Irani Café",desc:"Bun Maska, Chai"},
    {emoji:"🥯",name:"Cafe Madras",rating:"⭐ 4.6 | Veg",badge:"South Indian Icon",desc:"Idli, Dosa, Upma"},
    {emoji:"🍳",name:"The Nutcracker",rating:"⭐ 4.4 | Both",badge:"Trendy Pick",desc:"Pancakes, Eggs"},
    {emoji:"🥗",name:"A Ramanayak Udipi",rating:"⭐ 4.5 | Veg",badge:"Classic Udipi",desc:"Idli, Medu Vada"},
    {emoji:"🥞",name:"Cafe Mondegar",rating:"⭐ 4.3 | Both",badge:"Retro Café",desc:"Eggs, Sandwiches"},
    {emoji:"🍵",name:"Yazdani Bakery",rating:"⭐ 4.5 | Both",badge:"Legendary Spot",desc:"Brun Maska, Irani Chai"},
    {emoji:"🥘",name:"Cafe Excelsior",rating:"⭐ 4.2 | Both",badge:"Heritage Café",desc:"Omelette, Kheema Pav"},
    {emoji:"🍩",name:"Britannia & Co.",rating:"⭐ 4.3 | Both",badge:"Parsi Special",desc:"Berry Pulao, Bun Maska"},
    {emoji:"🥙",name:"Cafe Gulshan",rating:"⭐ 4.1 | Both",badge:"Pocket Friendly",desc:"Pav Bhaji, Sandwich"},
    {emoji:"🍳",name:"Colaba Social",rating:"⭐ 4.4 | Both",badge:"Youth Favourite",desc:"All-Day Breakfast"}
  ],
  lunch: [
    {emoji:"🍛",name:"Britannia & Co.",rating:"⭐ 4.6 | Both",badge:"Parsi Icon",desc:"Berry Pulao, Dhansak"},
    {emoji:"🥘",name:"Mahesh Lunch Home",rating:"⭐ 4.5 | Both",badge:"Seafood Famous",desc:"Fish Curry, Crab"},
    {emoji:"🍲",name:"Trishna",rating:"⭐ 4.6 | Both",badge:"Seafood Luxury",desc:"Butter Garlic Crab"},
    {emoji:"🥗",name:"Rajdhani Thali",rating:"⭐ 4.4 | Veg",badge:"Rajasthani/Gujarati",desc:"Unlimited Thali"},
    {emoji:"🥩",name:"Bademiya",rating:"⭐ 4.5 | Both",badge:"Street Legend",desc:"Seekh Kebab, Chicken"},
    {emoji:"🍤",name:"Gajalee",rating:"⭐ 4.5 | Both",badge:"Malvani Special",desc:"Fish Fry, Curry"},
    {emoji:"🍚",name:"Aaswad",rating:"⭐ 4.3 | Veg",badge:"Maharashtrian Taste",desc:"Puran Poli, Misal"},
    {emoji:"🍜",name:"Global Fusion",rating:"⭐ 4.4 | Both",badge:"Buffet King",desc:"Chinese, Sushi"},
    {emoji:"🥘",name:"Hotel Deluxe",rating:"⭐ 4.2 | Veg",badge:"South Indian Meals",desc:"Veg Thali"},
    {emoji:"🍱",name:"Status Restaurant",rating:"⭐ 4.3 | Veg",badge:"Family Spot",desc:"Veg Thali"}
  ],
  dinner: [
    {emoji:"🥩",name:"Bademiya",rating:"⭐ 4.6 | Both",badge:"Late Night Legend",desc:"Kebabs, Rolls"},
    {emoji:"🥘",name:"Mahesh Lunch Home",rating:"⭐ 4.5 | Both",badge:"Seafood Famous",desc:"Butter Crab"},
    {emoji:"🍤",name:"Trishna",rating:"⭐ 4.6 | Both",badge:"Luxury Dining",desc:"Seafood Specials"},
    {emoji:"🥢",name:"China Gate",rating:"⭐ 4.4 | Both",badge:"Chinese Favourite",desc:"Dimsum, Noodles"},
    {emoji:"🍜",name:"Global Fusion",rating:"⭐ 4.5 | Both",badge:"Buffet King",desc:"Indian, Sushi"},
    {emoji:"🍖",name:"Khyber",rating:"⭐ 4.5 | Both",badge:"Mughlai Special",desc:"Tandoori, Curries"},
    {emoji:"🍗",name:"Leopold Café",rating:"⭐ 4.3 | Both",badge:"Iconic Spot",desc:"Grills, Continental"},
    {emoji:"🥘",name:"Pratap Lunch Home",rating:"⭐ 4.2 | Both",badge:"Seafood",desc:"Pomfret Curry"},
    {emoji:"🥗",name:"Rajdhani Thali",rating:"⭐ 4.3 | Veg",badge:"Rajasthani/Gujarati",desc:"Veg Thali"},
    {emoji:"🍛",name:"Delhi Darbar",rating:"⭐ 4.3 | Both",badge:"Mughlai Hub",desc:"Biryani, Curries"}
  ],
  snacks: [
    {emoji:"🌭",name:"Bademiya Rolls",rating:"⭐ 4.5 | Both",badge:"Street Favourite",desc:"Seekh Kebab Rolls"},
    {emoji:"🥪",name:"Sandwizzaa",rating:"⭐ 4.3 | Veg",badge:"College Favourite",desc:"Grilled Sandwich"},
    {emoji:"🍔",name:"Burger King (Mumbai)",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers, Fries"},
    {emoji:"🥟",name:"Cannon Pav Bhaji",rating:"⭐ 4.4 | Veg",badge:"Street Icon",desc:"Pav Bhaji"},
    {emoji:"🍲",name:"Aaswad",rating:"⭐ 4.5 | Veg",badge:"Maharashtrian Taste",desc:"Misal Pav"},
    {emoji:"🌮",name:"Elco Pani Puri",rating:"⭐ 4.6 | Veg",badge:"Street Icon",desc:"Pani Puri, Chaat"},
    {emoji:"🍘",name:"Sukh Sagar",rating:"⭐ 4.4 | Veg",badge:"Street Pick",desc:"Dosa, Sandwich"},
    {emoji:"🥨",name:"Shiv Sagar",rating:"⭐ 4.3 | Veg",badge:"Classic Veg",desc:"Sandwich, Pav Bhaji"},
    {emoji:"🍟",name:"McDonald's Mumbai",rating:"⭐ 4.2 | Both",badge:"Global Fast Food",desc:"Burgers, Fries"},
    {emoji:"🥙",name:"Tibbs Frankie",rating:"⭐ 4.5 | Both",badge:"Street Legend",desc:"Frankies, Rolls"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Irani Cafés",rating:"⭐ 4.5 | Both",badge:"Classic Mumbai",desc:"Bun Maska, Cutting Chai"},
    {emoji:"🍵",name:"Prithvi Café",rating:"⭐ 4.6 | Both",badge:"Trendy Hub",desc:"Cold Coffee, Sandwich"},
    {emoji:"☕",name:"Yazdani Bakery",rating:"⭐ 4.5 | Both",badge:"Irani Special",desc:"Chai, Brun Maska"},
    {emoji:"🍵",name:"Cafe Mondegar",rating:"⭐ 4.3 | Both",badge:"Retro Spot",desc:"Coffee, Snacks"},
    {emoji:"☕",name:"Leopold Café",rating:"⭐ 4.4 | Both",badge:"Tourist Favourite",desc:"Coffee, Beer"},
    {emoji:"🍵",name:"Coffee By Di Bella",rating:"⭐ 4.5 | Both",badge:"Trendy Pick",desc:"Waffles, Coffee"},
    {emoji:"☕",name:"Starbucks Mumbai",rating:"⭐ 4.4 | Both",badge:"Global Café",desc:"Espresso, Latte"},
    {emoji:"🍵",name:"Tea Villa Café",rating:"⭐ 4.3 | Both",badge:"Popular",desc:"Bubble Tea, Coffee"},
    {emoji:"☕",name:"Chaayos",rating:"⭐ 4.3 | Both",badge:"Modern Chai",desc:"Masala Chai, Snacks"},
    {emoji:"🍵",name:"Blue Tokai Coffee",rating:"⭐ 4.5 | Both",badge:"Coffee Roasters",desc:"Espresso, Cold Brew"}
  ]
},
nagpur: {
  breakfast: [
    {emoji:"🥪",name:"Haldiram’s Nagpur",rating:"⭐ 4.5 | Veg",badge:"Nagpur Famous",desc:"Poha, Samosa"},
    {emoji:"🥯",name:"Panchavati Gaurav",rating:"⭐ 4.4 | Veg",badge:"Veg Special",desc:"Thali, Snacks"},
    {emoji:"🍳",name:"The Breakfast Story",rating:"⭐ 4.5 | Both",badge:"Trendy Spot",desc:"Pancakes, Omelette"},
    {emoji:"🥗",name:"Ashoka Restaurant",rating:"⭐ 4.3 | Veg",badge:"Classic Choice",desc:"Idli, Dosa"},
    {emoji:"🥞",name:"Checkers",rating:"⭐ 4.2 | Both",badge:"Family Restaurant",desc:"South Indian, North Indian"},
    {emoji:"🍵",name:"Veeraswami",rating:"⭐ 4.3 | Veg",badge:"Old Favourite",desc:"Filter Coffee, Snacks"},
    {emoji:"🥘",name:"Thaat Baat",rating:"⭐ 4.4 | Veg",badge:"Pure Veg",desc:"Breakfast Thali"},
    {emoji:"🍩",name:"Haldiram’s Sadar",rating:"⭐ 4.5 | Veg",badge:"Iconic",desc:"Kachori, Jalebi"},
    {emoji:"🥙",name:"Ramji-Shyamji Pohewale",rating:"⭐ 4.4 | Veg",badge:"Street Famous",desc:"Poha, Jalebi"},
    {emoji:"🍳",name:"Cafe Coffee Day (Nagpur)",rating:"⭐ 4.2 | Both",badge:"Café",desc:"Coffee, Sandwich"}
  ],
  lunch: [
    {emoji:"🍛",name:"Barbeque Nation",rating:"⭐ 4.5 | Both",badge:"Buffet King",desc:"BBQ, Grill"},
    {emoji:"🥘",name:"Haldiram’s Thaat Baat",rating:"⭐ 4.4 | Veg",badge:"Veg Thali",desc:"North Indian Meals"},
    {emoji:"🍲",name:"Barbeque House",rating:"⭐ 4.3 | Both",badge:"Buffet",desc:"Grills, Starters"},
    {emoji:"🥗",name:"Panchavati Gaurav",rating:"⭐ 4.4 | Veg",badge:"Veg Thali",desc:"Gujarati/Rajasthani"},
    {emoji:"🥩",name:"Hotel Tuli Imperial",rating:"⭐ 4.5 | Both",badge:"Fine Dining",desc:"Indian & Continental"},
    {emoji:"🍤",name:"Barbecue Hub",rating:"⭐ 4.3 | Both",badge:"Buffet",desc:"Indian, BBQ"},
    {emoji:"🍚",name:"Ashoka Restaurant",rating:"⭐ 4.3 | Veg",badge:"Family Spot",desc:"Indian Meals"},
    {emoji:"🍜",name:"Fionaa Lounge & Restaurant",rating:"⭐ 4.4 | Both",badge:"Trendy",desc:"Indian, Chinese"},
    {emoji:"🥘",name:"Thaat Baat",rating:"⭐ 4.2 | Veg",badge:"Veg Thali",desc:"Indian Veg Thali"},
    {emoji:"🍱",name:"Haldiram’s Sitabuldi",rating:"⭐ 4.4 | Veg",badge:"Iconic",desc:"Thali, Snacks"}
  ],
  dinner: [
    {emoji:"🥩",name:"Barbeque Nation",rating:"⭐ 4.5 | Both",badge:"Buffet King",desc:"Dinner Buffet"},
    {emoji:"🥘",name:"Hotel Centre Point",rating:"⭐ 4.4 | Both",badge:"Luxury Dining",desc:"Indian, Continental"},
    {emoji:"🍤",name:"Hotel Tuli Imperial",rating:"⭐ 4.5 | Both",badge:"Fine Dining",desc:"Seafood, Curries"},
    {emoji:"🥢",name:"Fionaa Lounge & Restaurant",rating:"⭐ 4.4 | Both",badge:"Trendy Dining",desc:"Indian, Oriental"},
    {emoji:"🍜",name:"Ashoka Restaurant",rating:"⭐ 4.3 | Veg",badge:"Classic Veg",desc:"Indian Dinner"},
    {emoji:"🍖",name:"The Breakfast Story (Dinner Menu)",rating:"⭐ 4.2 | Both",badge:"Café",desc:"Sandwich, Pizza"},
    {emoji:"🍗",name:"Barbecue Hub",rating:"⭐ 4.3 | Both",badge:"Buffet",desc:"Grill, BBQ"},
    {emoji:"🥘",name:"Hotel Tuli International",rating:"⭐ 4.3 | Both",badge:"Luxury",desc:"North Indian"},
    {emoji:"🥗",name:"Thaat Baat",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Traditional Veg Meals"},
    {emoji:"🍛",name:"Haldiram’s",rating:"⭐ 4.4 | Veg",badge:"Iconic",desc:"Veg Thali, Snacks"}
  ],
  snacks: [
    {emoji:"🌭",name:"Ramji-Shyamji Pohewale",rating:"⭐ 4.5 | Veg",badge:"Street Favourite",desc:"Poha, Jalebi"},
    {emoji:"🥪",name:"Haldiram’s",rating:"⭐ 4.4 | Veg",badge:"Famous Spot",desc:"Samosa, Chaat"},
    {emoji:"🍔",name:"Domino’s Pizza (Nagpur)",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Pizza, Garlic Bread"},
    {emoji:"🥟",name:"McDonald’s (Nagpur)",rating:"⭐ 4.2 | Both",badge:"Global Chain",desc:"Burgers, Fries"},
    {emoji:"🍲",name:"Ashoka Restaurant",rating:"⭐ 4.3 | Veg",badge:"Classic",desc:"Snacks, Chaat"},
    {emoji:"🌮",name:"Pachhbhai Pohewale",rating:"⭐ 4.4 | Veg",badge:"Local Spot",desc:"Poha, Samosa"},
    {emoji:"🍘",name:"CCD Nagpur",rating:"⭐ 4.2 | Both",badge:"Café",desc:"Coffee, Sandwich"},
    {emoji:"🥨",name:"Kalyan Bhel",rating:"⭐ 4.3 | Veg",badge:"Street Food",desc:"Bhel, Pani Puri"},
    {emoji:"🍟",name:"Haldiram’s Sitabuldi",rating:"⭐ 4.4 | Veg",badge:"Iconic",desc:"Snacks, Chaat"},
    {emoji:"🥙",name:"Panchavati Gaurav Snacks",rating:"⭐ 4.2 | Veg",badge:"Veg",desc:"Mini Meals, Chaat"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.3 | Both",badge:"Café Chain",desc:"Espresso, Cold Coffee"},
    {emoji:"🍵",name:"Mocha Café & Bar",rating:"⭐ 4.4 | Both",badge:"Trendy",desc:"Coffee, Shakes"},
    {emoji:"☕",name:"Haldiram’s",rating:"⭐ 4.4 | Veg",badge:"Iconic",desc:"Tea, Coffee"},
    {emoji:"🍵",name:"CCD Nagpur",rating:"⭐ 4.3 | Both",badge:"Classic Chain",desc:"Cold Coffee, Snacks"},
    {emoji:"☕",name:"Fionaa Lounge",rating:"⭐ 4.3 | Both",badge:"Trendy Café",desc:"Coffee, Desserts"},
    {emoji:"🍵",name:"Mocha Nagpur",rating:"⭐ 4.4 | Both",badge:"Youth Favourite",desc:"Coffee, Pizza"},
    {emoji:"☕",name:"Ashoka Restaurant",rating:"⭐ 4.2 | Veg",badge:"Classic",desc:"Tea, Coffee"},
    {emoji:"🍵",name:"Chai Point",rating:"⭐ 4.3 | Both",badge:"Modern Chai",desc:"Masala Chai, Snacks"},
    {emoji:"☕",name:"Cafe Crème",rating:"⭐ 4.3 | Both",badge:"Local Café",desc:"Coffee, Sandwich"},
    {emoji:"🍵",name:"Cafe Chocolate",rating:"⭐ 4.4 | Both",badge:"Trendy Pick",desc:"Cold Coffee, Shakes"}
  ]
},
nashik: {
  breakfast: [
    {emoji:"🥪",name:"Sadhana Misal",rating:"⭐ 4.6 | Veg",badge:"Iconic Nashik",desc:"Misal Pav"},
    {emoji:"🥯",name:"Sayantara Misal",rating:"⭐ 4.5 | Veg",badge:"Local Favourite",desc:"Misal Pav"},
    {emoji:"🍳",name:"Cafe Bliss",rating:"⭐ 4.4 | Both",badge:"Trendy Café",desc:"Pancakes, Sandwich"},
    {emoji:"🥘",name:"Hotel Panchavati",rating:"⭐ 4.3 | Veg",badge:"Classic Spot",desc:"Veg Breakfast"},
    {emoji:"🥗",name:"Cafe Coffee Culture",rating:"⭐ 4.4 | Both",badge:"Popular Café",desc:"Sandwich, Coffee"},
    {emoji:"🍵",name:"Cafe Coffee Day Nashik",rating:"⭐ 4.2 | Both",badge:"Chain Café",desc:"Coffee, Snacks"},
    {emoji:"🥯",name:"Utsav Pure Veg",rating:"⭐ 4.3 | Veg",badge:"Family Spot",desc:"Idli, Dosa"},
    {emoji:"🍳",name:"The Oven Classics",rating:"⭐ 4.4 | Both",badge:"Bakery Café",desc:"Breads, Omelettes"},
    {emoji:"🥗",name:"Cafe Toast",rating:"⭐ 4.3 | Both",badge:"Youth Spot",desc:"Sandwiches, Coffee"},
    {emoji:"🍩",name:"Brownie Point Nashik",rating:"⭐ 4.2 | Both",badge:"Bakery",desc:"Pastries, Coffee"}
  ],
  lunch: [
    {emoji:"🍛",name:"Rajdhani Thali",rating:"⭐ 4.5 | Veg",badge:"Unlimited Thali",desc:"Rajasthani/Gujarati"},
    {emoji:"🥘",name:"Hotel Panchavati",rating:"⭐ 4.4 | Veg",badge:"Traditional Meals",desc:"Veg Thali"},
    {emoji:"🍲",name:"Barbeque Nation Nashik",rating:"⭐ 4.4 | Both",badge:"Buffet",desc:"Grills, Starters"},
    {emoji:"🥗",name:"Thakkar’s Dining Hall",rating:"⭐ 4.5 | Veg",badge:"Gujarati Thali",desc:"Traditional Meals"},
    {emoji:"🥩",name:"RiverDine",rating:"⭐ 4.4 | Both",badge:"Fine Dining",desc:"Indian, Continental"},
    {emoji:"🍤",name:"Curry Leaves",rating:"⭐ 4.3 | Both",badge:"Seafood",desc:"Fish, Prawns"},
    {emoji:"🍚",name:"Hurry Curry",rating:"⭐ 4.2 | Both",badge:"Family Restaurant",desc:"Veg & Non-Veg"},
    {emoji:"🍜",name:"Barbeque Ville",rating:"⭐ 4.4 | Both",badge:"Buffet",desc:"Grilled Dishes"},
    {emoji:"🥘",name:"Shree Rajbhog Thali",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Rajasthani Meals"},
    {emoji:"🍱",name:"Spice Garden",rating:"⭐ 4.2 | Both",badge:"Multi-Cuisine",desc:"North Indian"}
  ],
  dinner: [
    {emoji:"🥩",name:"RiverDine",rating:"⭐ 4.5 | Both",badge:"Fine Dining",desc:"Indian, Continental"},
    {emoji:"🥘",name:"Hotel Panchavati",rating:"⭐ 4.3 | Veg",badge:"Classic Veg",desc:"Thali, Curries"},
    {emoji:"🍤",name:"Curry Leaves",rating:"⭐ 4.4 | Both",badge:"Seafood",desc:"Prawns, Fish"},
    {emoji:"🥢",name:"Barbeque Nation Nashik",rating:"⭐ 4.4 | Both",badge:"Buffet",desc:"Indian, Grill"},
    {emoji:"🍜",name:"Barbeque Ville",rating:"⭐ 4.4 | Both",badge:"Buffet",desc:"Live Grill"},
    {emoji:"🍖",name:"Rendezvous",rating:"⭐ 4.3 | Both",badge:"Mughlai Special",desc:"Kebabs, Curries"},
    {emoji:"🍗",name:"Hotel Yahoo",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"North Indian"},
    {emoji:"🥘",name:"Spice Garden",rating:"⭐ 4.3 | Both",badge:"Multi-Cuisine",desc:"Veg/Non-Veg"},
    {emoji:"🥗",name:"Thakkar’s Dining Hall",rating:"⭐ 4.5 | Veg",badge:"Veg Thali",desc:"Gujarati Meals"},
    {emoji:"🍛",name:"Little Italy Nashik",rating:"⭐ 4.4 | Veg",badge:"Italian",desc:"Pizza, Pasta"}
  ],
  snacks: [
    {emoji:"🥪",name:"Sadhana Misal",rating:"⭐ 4.6 | Veg",badge:"Misal Famous",desc:"Misal Pav"},
    {emoji:"🍲",name:"Sayantara Misal",rating:"⭐ 4.5 | Veg",badge:"Local Pick",desc:"Misal Pav"},
    {emoji:"🍘",name:"Cafe Bliss",rating:"⭐ 4.4 | Both",badge:"Modern Café",desc:"Sandwiches"},
    {emoji:"🌮",name:"Cafe Toast",rating:"⭐ 4.3 | Both",badge:"Youth Spot",desc:"Snacks"},
    {emoji:"🍟",name:"McDonald's Nashik",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers, Fries"},
    {emoji:"🍔",name:"Burger King Nashik",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers"},
    {emoji:"🥨",name:"Cafe Coffee Culture",rating:"⭐ 4.3 | Both",badge:"Café",desc:"Snacks, Coffee"},
    {emoji:"🍩",name:"Brownie Point",rating:"⭐ 4.2 | Both",badge:"Bakery",desc:"Desserts"},
    {emoji:"🥟",name:"Street Misal Joints",rating:"⭐ 4.3 | Veg",badge:"Street Food",desc:"Misal, Vada Pav"},
    {emoji:"🥙",name:"Domino’s Pizza Nashik",rating:"⭐ 4.2 | Both",badge:"Pizza Chain",desc:"Pizza, Sides"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Bliss",rating:"⭐ 4.4 | Both",badge:"Café",desc:"Coffee, Sandwiches"},
    {emoji:"🍵",name:"Cafe Coffee Culture",rating:"⭐ 4.3 | Both",badge:"Trendy Spot",desc:"Coffee, Snacks"},
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.2 | Both",badge:"Chain Café",desc:"Coffee, Tea"},
    {emoji:"🍵",name:"Third Wave Coffee",rating:"⭐ 4.4 | Both",badge:"Specialty Café",desc:"Espresso, Latte"},
    {emoji:"☕",name:"Tea Villa Café",rating:"⭐ 4.3 | Both",badge:"Popular Spot",desc:"Bubble Tea"},
    {emoji:"🍵",name:"Blue Tokai Coffee Nashik",rating:"⭐ 4.4 | Both",badge:"Roastery",desc:"Coffee"},
    {emoji:"☕",name:"Starbucks Nashik",rating:"⭐ 4.4 | Both",badge:"Global Chain",desc:"Coffee"},
    {emoji:"🍵",name:"Local Tapris",rating:"⭐ 4.5 | Both",badge:"Street Chai",desc:"Cutting Chai"},
    {emoji:"☕",name:"Roastery Café",rating:"⭐ 4.3 | Both",badge:"Trendy Pick",desc:"Coffee, Snacks"},
    {emoji:"🍵",name:"Tea Trails",rating:"⭐ 4.2 | Both",badge:"Specialty Tea",desc:"Varieties of Tea"}
  ]
},

nanded: {
  breakfast: [
    {emoji:"🥪",name:"Hotel City Pride",rating:"⭐ 4.3 | Both",badge:"Popular Spot",desc:"Paratha, Sandwich"},
    {emoji:"🥯",name:"Hotel Ashok",rating:"⭐ 4.2 | Both",badge:"Classic",desc:"Idli, Dosa"},
    {emoji:"🍳",name:"Annapurna Restaurant",rating:"⭐ 4.3 | Veg",badge:"Local Favourite",desc:"Breakfast Thali"},
    {emoji:"🥘",name:"Hotel Nirmal Palace",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Veg Breakfast"},
    {emoji:"🥗",name:"Cafe Coffee Day Nanded",rating:"⭐ 4.1 | Both",badge:"Chain Café",desc:"Coffee, Snacks"},
    {emoji:"🍵",name:"Hotel Guru",rating:"⭐ 4.3 | Both",badge:"Traditional",desc:"Parathas, Tea"},
    {emoji:"🥯",name:"Hotel Anmol",rating:"⭐ 4.2 | Both",badge:"Veg",desc:"South Indian"},
    {emoji:"🍳",name:"Cafe Corner",rating:"⭐ 4.1 | Both",badge:"Youth Spot",desc:"Sandwich, Coffee"},
    {emoji:"🥗",name:"Sai Palace",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Snacks, Tea"},
    {emoji:"🍩",name:"Local Sweet Shops",rating:"⭐ 4.2 | Veg",badge:"Traditional",desc:"Jalebi, Poha"}
  ],
  lunch: [
    {emoji:"🍛",name:"Hotel City Pride",rating:"⭐ 4.3 | Both",badge:"Family Spot",desc:"Veg/Non-Veg Meals"},
    {emoji:"🥘",name:"Hotel Guru",rating:"⭐ 4.2 | Veg",badge:"Traditional Meals",desc:"Veg Thali"},
    {emoji:"🍲",name:"Hotel Ashok",rating:"⭐ 4.3 | Both",badge:"South Indian",desc:"Veg Meals"},
    {emoji:"🥗",name:"Hotel Nirmal Palace",rating:"⭐ 4.2 | Both",badge:"Popular",desc:"Veg/Non-Veg"},
    {emoji:"🥩",name:"Sai Palace",rating:"⭐ 4.2 | Both",badge:"Multi-Cuisine",desc:"Indian, Chinese"},
    {emoji:"🍤",name:"Hotel Anmol",rating:"⭐ 4.2 | Both",badge:"Seafood",desc:"Fish Curry"},
    {emoji:"🍚",name:"Annapurna Restaurant",rating:"⭐ 4.3 | Veg",badge:"Veg Meals",desc:"Thali"},
    {emoji:"🍜",name:"Hotel Classic",rating:"⭐ 4.1 | Both",badge:"Family Restaurant",desc:"North Indian"},
    {emoji:"🥘",name:"Hotel Taj",rating:"⭐ 4.2 | Both",badge:"Popular Spot",desc:"Veg/Non-Veg"},
    {emoji:"🍱",name:"Hotel Star",rating:"⭐ 4.1 | Both",badge:"Multi-Cuisine",desc:"Chinese, Indian"}
  ],
  dinner: [
    {emoji:"🥩",name:"Hotel City Pride",rating:"⭐ 4.3 | Both",badge:"Family Dining",desc:"Veg/Non-Veg"},
    {emoji:"🥘",name:"Hotel Guru",rating:"⭐ 4.3 | Veg",badge:"Veg Spot",desc:"Thali, Veg Meals"},
    {emoji:"🍤",name:"Hotel Ashok",rating:"⭐ 4.2 | Both",badge:"South Indian",desc:"Dosa, Curry"},
    {emoji:"🥢",name:"Hotel Classic",rating:"⭐ 4.2 | Both",badge:"Multi-Cuisine",desc:"Chinese, Indian"},
    {emoji:"🍜",name:"Hotel Anmol",rating:"⭐ 4.2 | Both",badge:"Seafood",desc:"Fish Curry"},
    {emoji:"🍖",name:"Sai Palace",rating:"⭐ 4.2 | Both",badge:"Popular",desc:"Non-Veg Curries"},
    {emoji:"🍗",name:"Hotel Taj",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Chicken, Curry"},
    {emoji:"🥘",name:"Annapurna Restaurant",rating:"⭐ 4.3 | Veg",badge:"Veg Meals",desc:"Thali"},
    {emoji:"🥗",name:"Hotel Star",rating:"⭐ 4.1 | Both",badge:"Multi-Cuisine",desc:"Indian Meals"},
    {emoji:"🍛",name:"Local Dhaba Joints",rating:"⭐ 4.3 | Both",badge:"Highway Special",desc:"Veg/Non-Veg"}
  ],
  snacks: [
    {emoji:"🥪",name:"Local Poha Joints",rating:"⭐ 4.3 | Veg",badge:"Street Food",desc:"Poha, Tea"},
    {emoji:"🍲",name:"Jalebi Fafda Stalls",rating:"⭐ 4.2 | Veg",badge:"Traditional",desc:"Jalebi, Fafda"},
    {emoji:"🍘",name:"Cafe Coffee Day",rating:"⭐ 4.1 | Both",badge:"Chain Café",desc:"Coffee, Snacks"},
    {emoji:"🌮",name:"Street Vada Pav",rating:"⭐ 4.4 | Veg",badge:"Street Pick",desc:"Vada Pav"},
    {emoji:"🍟",name:"McDonald's Nanded",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers, Fries"},
    {emoji:"🍔",name:"Burger King Nanded",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers"},
    {emoji:"🥨",name:"Samosa Corners",rating:"⭐ 4.3 | Veg",badge:"Street Snacks",desc:"Samosa, Kachori"},
    {emoji:"🍩",name:"Local Sweet Shops",rating:"⭐ 4.2 | Veg",badge:"Traditional",desc:"Sweets, Snacks"},
    {emoji:"🥟",name:"Momos Stalls",rating:"⭐ 4.2 | Both",badge:"Street Food",desc:"Momos, Rolls"},
    {emoji:"🥙",name:"Domino’s Pizza Nanded",rating:"⭐ 4.2 | Both",badge:"Pizza Chain",desc:"Pizza, Pasta"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.1 | Both",badge:"Chain Café",desc:"Coffee, Tea"},
    {emoji:"🍵",name:"Local Tapris",rating:"⭐ 4.4 | Both",badge:"Street Tea",desc:"Cutting Chai"},
    {emoji:"☕",name:"Sai Palace Café",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Tea, Snacks"},
    {emoji:"🍵",name:"Hotel Guru Tea Stall",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Tea, Poha"},
    {emoji:"☕",name:"Hotel Anmol Café",rating:"⭐ 4.2 | Both",badge:"Veg Spot",desc:"Tea, Snacks"},
    {emoji:"🍵",name:"Cafe Corner",rating:"⭐ 4.1 | Both",badge:"Trendy Pick",desc:"Coffee, Sandwich"},
    {emoji:"☕",name:"Local Irani Cafés",rating:"⭐ 4.3 | Both",badge:"Heritage",desc:"Bun Maska, Chai"},
    {emoji:"🍵",name:"Street Tea Stalls",rating:"⭐ 4.4 | Both",badge:"Quick Tea",desc:"Chai"},
    {emoji:"☕",name:"Sai Café",rating:"⭐ 4.2 | Both",badge:"Popular",desc:"Coffee, Tea"},
    {emoji:"🍵",name:"Nirmal Café",rating:"⭐ 4.2 | Both",badge:"Local",desc:"Tea, Snacks"}
  ]
},
satara: {
  breakfast: [
    {emoji:"🥪",name:"Hotel Priti",rating:"⭐ 4.3 | Both",badge:"Popular Spot",desc:"Poha, Upma"},
    {emoji:"🥯",name:"Hotel Radhika",rating:"⭐ 4.4 | Veg",badge:"South Indian",desc:"Idli, Dosa"},
    {emoji:"🍳",name:"Cafe Coffee Day Satara",rating:"⭐ 4.2 | Both",badge:"Trendy Pick",desc:"Sandwich, Coffee"},
    {emoji:"🥞",name:"Hotel Woodland",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Paratha, Tea"},
    {emoji:"🥘",name:"Hotel Surya",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Poha, Tea"},
    {emoji:"🍵",name:"Hotel Mahendra",rating:"⭐ 4.1 | Both",badge:"Affordable",desc:"Misal Pav"},
    {emoji:"🍳",name:"Maharaja Hotel",rating:"⭐ 4.3 | Both",badge:"Local Favourite",desc:"Egg Bhurji"},
    {emoji:"🥗",name:"Shivraj Hotel",rating:"⭐ 4.2 | Veg",badge:"Healthy",desc:"Upma, Poha"},
    {emoji:"🍩",name:"Bakers Point",rating:"⭐ 4.1 | Both",badge:"Bakery",desc:"Pastries, Tea"},
    {emoji:"🥯",name:"Hotel Shreyas",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Paratha, Chai"}
  ],
  lunch: [
    {emoji:"🍛",name:"Hotel Rajdhani",rating:"⭐ 4.4 | Veg",badge:"Thali Spot",desc:"Veg Thali"},
    {emoji:"🥘",name:"Hotel Woodland",rating:"⭐ 4.5 | Both",badge:"Family Restaurant",desc:"Paneer Curry"},
    {emoji:"🍲",name:"Hotel Priti Executive",rating:"⭐ 4.3 | Both",badge:"Popular",desc:"Veg & Non-Veg Thali"},
    {emoji:"🥩",name:"Hotel Sagar",rating:"⭐ 4.4 | Both",badge:"Non-Veg Hub",desc:"Chicken Curry"},
    {emoji:"🍤",name:"Hotel Abhiruchi",rating:"⭐ 4.2 | Both",badge:"Local Taste",desc:"Mutton Curry"},
    {emoji:"🍚",name:"Hotel Radhika",rating:"⭐ 4.5 | Veg",badge:"South Indian",desc:"Veg Meals"},
    {emoji:"🍜",name:"Shivsagar Hotel",rating:"⭐ 4.3 | Both",badge:"Veg Special",desc:"Veg Thali"},
    {emoji:"🥘",name:"Hotel Shivraj",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Maharashtrian Thali"},
    {emoji:"🥗",name:"Hotel Pankaj",rating:"⭐ 4.1 | Veg",badge:"Simple Meals",desc:"Veg Thali"},
    {emoji:"🍱",name:"Hotel Ashoka",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Veg & Non-Veg"}
  ],
  dinner: [
    {emoji:"🥩",name:"Hotel Woodland",rating:"⭐ 4.5 | Both",badge:"Family Spot",desc:"Paneer, Chicken"},
    {emoji:"🥘",name:"Hotel Sagar",rating:"⭐ 4.4 | Both",badge:"Non-Veg Favourite",desc:"Mutton Curry"},
    {emoji:"🍤",name:"Hotel Abhiruchi",rating:"⭐ 4.3 | Both",badge:"Seafood Pick",desc:"Fish Fry"},
    {emoji:"🥢",name:"Chinese Corner",rating:"⭐ 4.1 | Both",badge:"Street Food",desc:"Noodles, Fried Rice"},
    {emoji:"🍜",name:"Hotel Rajdhani",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Rajasthani/Gujarati"},
    {emoji:"🍖",name:"Hotel Maharaja",rating:"⭐ 4.4 | Both",badge:"Non-Veg Pick",desc:"Chicken Tandoori"},
    {emoji:"🍗",name:"Hotel Prasad",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Paneer Masala"},
    {emoji:"🥘",name:"Hotel Mahendra",rating:"⭐ 4.3 | Both",badge:"Maharashtrian",desc:"Bhakri, Curry"},
    {emoji:"🥗",name:"Hotel Shreyas",rating:"⭐ 4.2 | Veg",badge:"Veg Special",desc:"Paneer Curry"},
    {emoji:"🍛",name:"Hotel Ashoka",rating:"⭐ 4.2 | Both",badge:"Classic",desc:"Thali"}
  ],
  snacks: [
    {emoji:"🌭",name:"Satara Misal",rating:"⭐ 4.6 | Veg",badge:"Street Icon",desc:"Misal Pav"},
    {emoji:"🥪",name:"Hotel Woodland Snacks",rating:"⭐ 4.3 | Both",badge:"Popular",desc:"Sandwiches"},
    {emoji:"🍔",name:"Burger King Satara",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers"},
    {emoji:"🥟",name:"Shiv Misal",rating:"⭐ 4.5 | Veg",badge:"Local Favourite",desc:"Misal Pav"},
    {emoji:"🍲",name:"Hotel Pankaj",rating:"⭐ 4.1 | Veg",badge:"Maharashtrian",desc:"Poha"},
    {emoji:"🌮",name:"Street Corner Chaat",rating:"⭐ 4.3 | Veg",badge:"Street Pick",desc:"Chaat"},
    {emoji:"🍘",name:"Shivsagar Snacks",rating:"⭐ 4.2 | Veg",badge:"Classic",desc:"Dosa, Sandwich"},
    {emoji:"🥨",name:"Hotel Surya",rating:"⭐ 4.1 | Both",badge:"Local",desc:"Pav Bhaji"},
    {emoji:"🍟",name:"McDonald's Satara",rating:"⭐ 4.3 | Both",badge:"Global",desc:"Fries, Burgers"},
    {emoji:"🥙",name:"Frankie Corner",rating:"⭐ 4.2 | Both",badge:"Street Food",desc:"Frankie Rolls"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.3 | Both",badge:"Trendy",desc:"Coffee, Snacks"},
    {emoji:"🍵",name:"Tea Villa Café",rating:"⭐ 4.2 | Both",badge:"Modern",desc:"Bubble Tea"},
    {emoji:"☕",name:"Hotel Woodland Tea",rating:"⭐ 4.4 | Both",badge:"Classic",desc:"Tea, Coffee"},
    {emoji:"🍵",name:"Irani Café",rating:"⭐ 4.3 | Both",badge:"Local",desc:"Chai, Bun Maska"},
    {emoji:"☕",name:"Hotel Surya Tea",rating:"⭐ 4.1 | Both",badge:"Affordable",desc:"Tea, Snacks"},
    {emoji:"🍵",name:"Hotel Shreyas Tea",rating:"⭐ 4.2 | Both",badge:"Family",desc:"Tea, Pakoda"},
    {emoji:"☕",name:"Blue Tokai Coffee Satara",rating:"⭐ 4.3 | Both",badge:"Coffee Roasters",desc:"Cold Brew"},
    {emoji:"🍵",name:"Street Tea Stall",rating:"⭐ 4.5 | Both",badge:"Street Favourite",desc:"Cutting Chai"},
    {emoji:"☕",name:"Cafe Corner",rating:"⭐ 4.2 | Both",badge:"Youth Pick",desc:"Coffee"},
    {emoji:"🍵",name:"Shivraj Tea",rating:"⭐ 4.1 | Both",badge:"Local Pick",desc:"Masala Chai"}
  ]
},
latur: {
  breakfast: [
    {emoji:"🥪",name:"Hotel Sudarshan",rating:"⭐ 4.3 | Both",badge:"Popular Spot",desc:"Poha, Upma"},
    {emoji:"🥯",name:"Hotel Vasant",rating:"⭐ 4.4 | Veg",badge:"South Indian",desc:"Idli, Dosa"},
    {emoji:"🍳",name:"Cafe Coffee Day Latur",rating:"⭐ 4.2 | Both",badge:"Trendy Pick",desc:"Sandwich, Coffee"},
    {emoji:"🥞",name:"Hotel Shree",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Paratha, Tea"},
    {emoji:"🥘",name:"Hotel Amrit",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Misal Pav, Tea"},
    {emoji:"🍵",name:"Hotel Samrat",rating:"⭐ 4.1 | Both",badge:"Affordable",desc:"Poha, Tea"},
    {emoji:"🍳",name:"Hotel Savera",rating:"⭐ 4.3 | Both",badge:"Local Favourite",desc:"Egg Bhurji"},
    {emoji:"🥗",name:"Hotel Shrinath",rating:"⭐ 4.2 | Veg",badge:"Healthy",desc:"Upma, Poha"},
    {emoji:"🍩",name:"Bakers Delight",rating:"⭐ 4.1 | Both",badge:"Bakery",desc:"Pastries, Tea"},
    {emoji:"🥯",name:"Hotel Grand",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Paratha, Chai"}
  ],
  lunch: [
    {emoji:"🍛",name:"Hotel Vasant Thali",rating:"⭐ 4.4 | Veg",badge:"Thali Spot",desc:"Veg Thali"},
    {emoji:"🥘",name:"Hotel Sudarshan",rating:"⭐ 4.5 | Both",badge:"Family Restaurant",desc:"Paneer Curry"},
    {emoji:"🍲",name:"Hotel Amrapali",rating:"⭐ 4.3 | Both",badge:"Popular",desc:"Veg & Non-Veg Thali"},
    {emoji:"🥩",name:"Hotel Ashirwad",rating:"⭐ 4.4 | Both",badge:"Non-Veg Hub",desc:"Chicken Curry"},
    {emoji:"🍤",name:"Hotel Aroma",rating:"⭐ 4.2 | Both",badge:"Local Taste",desc:"Mutton Curry"},
    {emoji:"🍚",name:"Hotel Abhiruchi",rating:"⭐ 4.5 | Veg",badge:"South Indian",desc:"Veg Meals"},
    {emoji:"🍜",name:"Shivsagar Hotel",rating:"⭐ 4.3 | Both",badge:"Veg Special",desc:"Veg Thali"},
    {emoji:"🥘",name:"Hotel Pride",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Maharashtrian Thali"},
    {emoji:"🥗",name:"Hotel Anjani",rating:"⭐ 4.1 | Veg",badge:"Simple Meals",desc:"Veg Thali"},
    {emoji:"🍱",name:"Hotel Sai International",rating:"⭐ 4.3 | Both",badge:"Classic",desc:"Veg & Non-Veg"}
  ],
  dinner: [
    {emoji:"🥩",name:"Hotel Sudarshan",rating:"⭐ 4.5 | Both",badge:"Family Spot",desc:"Paneer, Chicken"},
    {emoji:"🥘",name:"Hotel Ashirwad",rating:"⭐ 4.4 | Both",badge:"Non-Veg Favourite",desc:"Mutton Curry"},
    {emoji:"🍤",name:"Hotel Aroma",rating:"⭐ 4.3 | Both",badge:"Seafood Pick",desc:"Fish Fry"},
    {emoji:"🥢",name:"Chinese Corner Latur",rating:"⭐ 4.1 | Both",badge:"Street Food",desc:"Noodles, Fried Rice"},
    {emoji:"🍜",name:"Hotel Vasant Thali",rating:"⭐ 4.3 | Veg",badge:"Veg Thali",desc:"Gujarati Meals"},
    {emoji:"🍖",name:"Hotel Sai International",rating:"⭐ 4.4 | Both",badge:"Non-Veg Pick",desc:"Chicken Tandoori"},
    {emoji:"🍗",name:"Hotel Samrat",rating:"⭐ 4.2 | Both",badge:"Family Spot",desc:"Paneer Masala"},
    {emoji:"🥘",name:"Hotel Amrit",rating:"⭐ 4.3 | Both",badge:"Maharashtrian",desc:"Bhakri, Curry"},
    {emoji:"🥗",name:"Hotel Shrinath",rating:"⭐ 4.2 | Veg",badge:"Veg Special",desc:"Paneer Curry"},
    {emoji:"🍛",name:"Hotel Grand",rating:"⭐ 4.2 | Both",badge:"Classic",desc:"Thali"}
  ],
  snacks: [
    {emoji:"🌭",name:"Latur Misal",rating:"⭐ 4.6 | Veg",badge:"Street Icon",desc:"Misal Pav"},
    {emoji:"🥪",name:"Hotel Sudarshan Snacks",rating:"⭐ 4.3 | Both",badge:"Popular",desc:"Sandwiches"},
    {emoji:"🍔",name:"Burger King Latur",rating:"⭐ 4.2 | Both",badge:"Fast Food",desc:"Burgers"},
    {emoji:"🥟",name:"Shree Misal",rating:"⭐ 4.5 | Veg",badge:"Local Favourite",desc:"Misal Pav"},
    {emoji:"🍲",name:"Hotel Anjani",rating:"⭐ 4.1 | Veg",badge:"Maharashtrian",desc:"Poha"},
    {emoji:"🌮",name:"Street Chaat Corner",rating:"⭐ 4.3 | Veg",badge:"Street Pick",desc:"Chaat"},
    {emoji:"🍘",name:"Shivsagar Snacks",rating:"⭐ 4.2 | Veg",badge:"Classic",desc:"Dosa, Sandwich"},
    {emoji:"🥨",name:"Hotel Amrapali Snacks",rating:"⭐ 4.1 | Both",badge:"Local",desc:"Pav Bhaji"},
    {emoji:"🍟",name:"McDonald's Latur",rating:"⭐ 4.3 | Both",badge:"Global",desc:"Fries, Burgers"},
    {emoji:"🥙",name:"Frankie Point",rating:"⭐ 4.2 | Both",badge:"Street Food",desc:"Frankie Rolls"}
  ],
  "tea-coffee": [
    {emoji:"☕",name:"Cafe Coffee Day",rating:"⭐ 4.3 | Both",badge:"Trendy",desc:"Coffee, Snacks"},
    {emoji:"🍵",name:"Tea Villa Café",rating:"⭐ 4.2 | Both",badge:"Modern",desc:"Bubble Tea"},
    {emoji:"☕",name:"Hotel Sudarshan Tea",rating:"⭐ 4.4 | Both",badge:"Classic",desc:"Tea, Coffee"},
    {emoji:"🍵",name:"Irani Café Latur",rating:"⭐ 4.3 | Both",badge:"Local",desc:"Chai, Bun Maska"},
    {emoji:"☕",name:"Hotel Samrat Tea",rating:"⭐ 4.1 | Both",badge:"Affordable",desc:"Tea, Snacks"},
    {emoji:"🍵",name:"Hotel Shrinath Tea",rating:"⭐ 4.2 | Both",badge:"Family",desc:"Tea, Pakoda"},
    {emoji:"☕",name:"Blue Tokai Coffee Latur",rating:"⭐ 4.3 | Both",badge:"Coffee Roasters",desc:"Cold Brew"},
    {emoji:"🍵",name:"Street Tea Stall",rating:"⭐ 4.5 | Both",badge:"Street Favourite",desc:"Cutting Chai"},
    {emoji:"☕",name:"Cafe Mocha",rating:"⭐ 4.2 | Both",badge:"Youth Pick",desc:"Coffee"},
    {emoji:"🍵",name:"Shiv Tea Corner",rating:"⭐ 4.1 | Both",badge:"Local Pick",desc:"Masala Chai"}
  ]
},

};
 
function showRestaurants() {
  const city = document.getElementById("city").value;
  const category = document.getElementById("category").value;
  const grid = document.getElementById("restaurantGrid");
  grid.innerHTML = "";

  const list = restaurants[city][category];
  list.forEach(r => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + city)}`;
    grid.innerHTML += `
      <div class="card">
        <div class="emoji">${r.emoji}</div>
        <h3>${r.name}</h3>
        <p>${r.rating}</p>
        <span class="badge">${r.badge}</span>
        <p>${r.desc}</p>
        <a href="${mapUrl}" target="_blank" class="map-btn">📍 View on Map</a>
      </div>
    `;
  });
}
