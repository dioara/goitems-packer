// script.js for GoItems Packer (Static Version with Hardcoded Data)

// --- Hardcoded Data ---
// Items are now objects: { name: "Item Name", quantity: 1, notes: "", category: "" }
const packingData = {
    "Travel (General)": {
        "Weekend Getaway": [
            { name: "Clothes (2 outfits)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Pajamas", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries (travel size)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Book/Entertainment", quantity: 1, notes: "", category: "Misc" },
            { name: "Snacks", quantity: 1, notes: "", category: "Food" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" }
        ],
        "Beach Vacation (1 week)": [
            { name: "Swimsuits", quantity: 3, notes: "", category: "Clothing" },
            { name: "Beach Towel", quantity: 1, notes: "", category: "Misc" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "After-Sun Lotion", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunglasses", quantity: 1, notes: "", category: "Accessories" },
            { name: "Flip-Flops/Sandals", quantity: 1, notes: "", category: "Clothing" },
            { name: "Casual Outfits (7 days)", quantity: 7, notes: "", category: "Clothing" },
            { name: "Dinner Outfits", quantity: 3, notes: "", category: "Clothing" },
            { name: "Pajamas", quantity: 2, notes: "", category: "Clothing" },
            { name: "Underwear", quantity: 7, notes: "", category: "Clothing" },
            { name: "Socks", quantity: 7, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Medications", quantity: 1, notes: "", category: "Health" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Camera", quantity: 1, notes: "", category: "Electronics" },
            { name: "Book/Entertainment", quantity: 1, notes: "", category: "Misc" },
            { name: "Passport/ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Travel Documents", quantity: 1, notes: "", category: "Documents" },
            { name: "Wallet/Cash/Cards", quantity: 1, notes: "", category: "Essentials" }
        ],
        "City Break (3 days)": [
            { name: "Comfortable Walking Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Day Bag/Backpack", quantity: 1, notes: "", category: "Accessories" },
            { name: "Clothes (3 outfits)", quantity: 3, notes: "", category: "Clothing" },
            { name: "Jacket/Sweater", quantity: 1, notes: "", category: "Clothing" },
            { name: "Pajamas", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Portable Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Camera", quantity: 1, notes: "", category: "Electronics" },
            { name: "City Map/Guidebook", quantity: 1, notes: "", category: "Misc" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Umbrella (optional)", quantity: 1, notes: "", category: "Misc" },
            { name: "Passport/ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Wallet/Cash/Cards", quantity: 1, notes: "", category: "Essentials" }
        ],
        "Business Trip (2 days)": [
            { name: "Business Attire (2 outfits)", quantity: 2, notes: "", category: "Clothing" },
            { name: "Casual Outfit", quantity: 1, notes: "", category: "Clothing" },
            { name: "Dress Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Pajamas", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Laptop & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Notebook & Pen", quantity: 1, notes: "", category: "Misc" },
            { name: "Business Cards", quantity: 1, notes: "", category: "Misc" },
            { name: "Presentation Materials (if needed)", quantity: 1, notes: "", category: "Misc" },
            { name: "Travel Documents", quantity: 1, notes: "", category: "Documents" },
            { name: "Wallet/Cash/Cards", quantity: 1, notes: "", category: "Essentials" }
        ],
        "Road Trip": [
            { name: "Driver's License", quantity: 1, notes: "", category: "Documents" },
            { name: "Car Registration & Insurance", quantity: 1, notes: "", category: "Documents" },
            { name: "Spare Tire & Jack", quantity: 1, notes: "", category: "Car" },
            { name: "Jumper Cables", quantity: 1, notes: "", category: "Car" },
            { name: "First-Aid Kit", quantity: 1, notes: "", category: "Health" },
            { name: "Snacks & Drinks", quantity: 1, notes: "", category: "Food" },
            { name: "Water Bottles", quantity: 1, notes: "", category: "Food" },
            { name: "Music/Podcasts Playlist", quantity: 1, notes: "", category: "Entertainment" },
            { name: "Phone Charger & Mount", quantity: 1, notes: "", category: "Electronics" },
            { name: "Sunglasses", quantity: 1, notes: "", category: "Accessories" },
            { name: "Comfortable Clothes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Pillow & Blanket (optional)", quantity: 1, notes: "", category: "Misc" },
            { name: "GPS/Maps App", quantity: 1, notes: "", category: "Electronics" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" }
        ],
        "Theme Park Visit": [
            { name: "Park Tickets", quantity: 1, notes: "", category: "Documents" },
            { name: "Comfortable Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunglasses", quantity: 1, notes: "", category: "Accessories" },
            { name: "Small Backpack", quantity: 1, notes: "", category: "Accessories" },
            { name: "Reusable Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Portable Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Wallet/Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Rain Poncho (optional)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Snacks", quantity: 1, notes: "", category: "Food" }
        ],
        "Conference/Convention": [
            { name: "Conference Badge/Ticket", quantity: 1, notes: "", category: "Documents" },
            { name: "Business Casual Attire", quantity: 1, notes: "", category: "Clothing" },
            { name: "Comfortable Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Laptop/Tablet & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Portable Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Notebook & Pens", quantity: 1, notes: "", category: "Misc" },
            { name: "Business Cards", quantity: 1, notes: "", category: "Misc" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Snacks", quantity: 1, notes: "", category: "Food" },
            { name: "Jacket/Sweater", quantity: 1, notes: "", category: "Clothing" }
        ],
        "Holiday (Abroad)": [
            { name: "Passport & Visas", quantity: 1, notes: "", category: "Documents" },
            { name: "Flight/Travel Tickets", quantity: 1, notes: "", category: "Documents" },
            { name: "Travel Insurance Info", quantity: 1, notes: "", category: "Documents" },
            { name: "Copies of Important Documents", quantity: 1, notes: "", category: "Documents" },
            { name: "Foreign Currency", quantity: 1, notes: "", category: "Essentials" },
            { name: "Credit/Debit Cards (notify banks)", quantity: 1, notes: "", category: "Essentials" },
            { name: "Universal Power Adapter", quantity: 1, notes: "", category: "Electronics" },
            { name: "Phone & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Portable Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Medications (with prescription)", quantity: 1, notes: "", category: "Health" },
            { name: "First-Aid Kit", quantity: 1, notes: "", category: "Health" },
            { name: "Appropriate Clothing (weather/culture)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Comfortable Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Phrasebook/Translation App", quantity: 1, notes: "", category: "Misc" },
            { name: "Guidebook/Maps", quantity: 1, notes: "", category: "Misc" },
            { name: "Entertainment for Travel", quantity: 1, notes: "", category: "Entertainment" }
        ],
        "Holiday (Family)": [
            { name: "Clothes for Everyone", quantity: 1, notes: "", category: "Clothing" },
            { name: "Kids' Specific Items (diapers, formula, etc.)", quantity: 1, notes: "", category: "Kids" },
            { name: "Toys/Games/Books", quantity: 1, notes: "", category: "Entertainment" },
            { name: "Snacks & Drinks", quantity: 1, notes: "", category: "Food" },
            { name: "First-Aid Kit (child-friendly)", quantity: 1, notes: "", category: "Health" },
            { name: "Medications (adult & child)", quantity: 1, notes: "", category: "Health" },
            { name: "Stroller/Carrier (if needed)", quantity: 1, notes: "", category: "Kids" },
            { name: "Car Seats (if driving)", quantity: 1, notes: "", category: "Kids" },
            { name: "Sunscreen (adult & child)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hats", quantity: 1, notes: "", category: "Clothing" },
            { name: "Comfortable Shoes for Everyone", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Phone Chargers", quantity: 1, notes: "", category: "Electronics" },
            { name: "Camera", quantity: 1, notes: "", category: "Electronics" },
            { name: "Travel Documents/IDs", quantity: 1, notes: "", category: "Documents" }
        ]
    },
    "Outdoor & Adventure": {
        "Camping (Tent)": [
            { name: "Tent", quantity: 1, notes: "", category: "Gear" },
            { name: "Sleeping Bag", quantity: 1, notes: "", category: "Gear" },
            { name: "Sleeping Pad", quantity: 1, notes: "", category: "Gear" },
            { name: "Pillow", quantity: 1, notes: "", category: "Gear" },
            { name: "Headlamp/Flashlight", quantity: 1, notes: "", category: "Gear" },
            { name: "Extra Batteries", quantity: 1, notes: "", category: "Gear" },
            { name: "Camp Chairs", quantity: 1, notes: "", category: "Gear" },
            { name: "Cooler", quantity: 1, notes: "", category: "Gear" },
            { name: "Food & Drinks", quantity: 1, notes: "", category: "Food" },
            { name: "Cooking Gear (stove, fuel, pots, utensils)", quantity: 1, notes: "", category: "Gear" },
            { name: "Water Filter/Tablets", quantity: 1, notes: "", category: "Gear" },
            { name: "First-Aid Kit", quantity: 1, notes: "", category: "Health" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Bug Spray", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Pocket Knife/Multi-tool", quantity: 1, notes: "", category: "Gear" },
            { name: "Map & Compass/GPS", quantity: 1, notes: "", category: "Gear" },
            { name: "Backpack", quantity: 1, notes: "", category: "Gear" },
            { name: "Hiking Boots", quantity: 1, notes: "", category: "Clothing" },
            { name: "Socks (wool)", quantity: 3, notes: "", category: "Clothing" },
            { name: "Layers of Clothing", quantity: 1, notes: "", category: "Clothing" },
            { name: "Rain Gear", quantity: 1, notes: "", category: "Clothing" },
            { name: "Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries (biodegradable soap)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Trash Bags", quantity: 1, notes: "", category: "Misc" }
        ],
        "Hiking (Day Trip)": [
            { name: "Daypack", quantity: 1, notes: "", category: "Gear" },
            { name: "Water Bottle/Hydration Pack", quantity: 1, notes: "", category: "Gear" },
            { name: "Snacks/Lunch", quantity: 1, notes: "", category: "Food" },
            { name: "Hiking Boots/Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Socks", quantity: 1, notes: "", category: "Clothing" },
            { name: "Appropriate Clothing (layers)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Rain Gear (if needed)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunglasses", quantity: 1, notes: "", category: "Accessories" },
            { name: "First-Aid Kit (small)", quantity: 1, notes: "", category: "Health" },
            { name: "Map & Compass/GPS", quantity: 1, notes: "", category: "Gear" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Pocket Knife", quantity: 1, notes: "", category: "Gear" }
        ],
        "Skiing/Snowboarding Trip": [
            { name: "Skis/Snowboard & Boots", quantity: 1, notes: "", category: "Gear" },
            { name: "Helmet", quantity: 1, notes: "", category: "Gear" },
            { name: "Goggles", quantity: 1, notes: "", category: "Gear" },
            { name: "Ski Jacket & Pants", quantity: 1, notes: "", category: "Clothing" },
            { name: "Base Layers (thermal)", quantity: 2, notes: "", category: "Clothing" },
            { name: "Mid Layers (fleece)", quantity: 2, notes: "", category: "Clothing" },
            { name: "Ski Socks (multiple pairs)", quantity: 3, notes: "", category: "Clothing" },
            { name: "Gloves/Mittens", quantity: 1, notes: "", category: "Clothing" },
            { name: "Neck Gaiter/Balaclava", quantity: 1, notes: "", category: "Clothing" },
            { name: "Beanie/Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Lip Balm (SPF)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hand/Toe Warmers", quantity: 1, notes: "", category: "Misc" },
            { name: "Casual Clothes (après-ski)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Snow Boots", quantity: 1, notes: "", category: "Clothing" },
            { name: "Lift Pass", quantity: 1, notes: "", category: "Documents" },
            { name: "Wallet/Cash/Cards", quantity: 1, notes: "", category: "Essentials" }
        ]
    },
    "Special Events": {
        "Wedding Guest": [
            { name: "Formal Outfit (dress, suit)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Dress Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Accessories (tie, jewelry, clutch)", quantity: 1, notes: "", category: "Accessories" },
            { name: "Outerwear (if needed)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Pajamas", quantity: 1, notes: "", category: "Clothing" },
            { name: "Casual Outfit (for travel/other events)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Makeup", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hair Styling Tools", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Gift for Couple", quantity: 1, notes: "", category: "Misc" },
            { name: "Card", quantity: 1, notes: "", category: "Misc" },
            { name: "Cash (for card/bar)", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone Charger", quantity: 1, notes: "", category: "Electronics" }
        ],
        "Music Festival": [
            { name: "Festival Tickets", quantity: 1, notes: "", category: "Documents" },
            { name: "ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Comfortable Shoes/Boots", quantity: 1, notes: "", category: "Clothing" },
            { name: "Festival Outfits", quantity: 1, notes: "", category: "Clothing" },
            { name: "Jacket/Hoodie", quantity: 1, notes: "", category: "Clothing" },
            { name: "Rain Poncho", quantity: 1, notes: "", category: "Clothing" },
            { name: "Hat", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sunglasses", quantity: 1, notes: "", category: "Accessories" },
            { name: "Sunscreen", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Lip Balm", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Small Backpack/Bag", quantity: 1, notes: "", category: "Accessories" },
            { name: "Reusable Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Portable Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Wet Wipes", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hand Sanitizer", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Ear Plugs", quantity: 1, notes: "", category: "Misc" },
            { name: "Camping Gear (if applicable)", quantity: 1, notes: "", category: "Gear" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" }
        ],
        "Party (Night Out)": [
            { name: "Outfit", quantity: 1, notes: "", category: "Clothing" },
            { name: "Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Jacket/Outerwear", quantity: 1, notes: "", category: "Clothing" },
            { name: "Small Bag/Clutch", quantity: 1, notes: "", category: "Accessories" },
            { name: "ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Keys", quantity: 1, notes: "", category: "Essentials" },
            { name: "Lipstick/Makeup (touch-ups)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Portable Charger (optional)", quantity: 1, notes: "", category: "Electronics" },
            { name: "Mints/Gum", quantity: 1, notes: "", category: "Misc" }
        ],
        "Birthday Party": [
            { name: "Party Outfit", quantity: 1, notes: "", category: "Clothing" },
            { name: "Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Gift for Host/Birthday Person", quantity: 1, notes: "", category: "Misc" },
            { name: "Card", quantity: 1, notes: "", category: "Misc" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Keys", quantity: 1, notes: "", category: "Essentials" },
            { name: "Jacket/Outerwear (if needed)", quantity: 1, notes: "", category: "Clothing" }
        ],
        "Housewarming Party": [
            { name: "Casual/Smart Outfit", quantity: 1, notes: "", category: "Clothing" },
            { name: "Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Housewarming Gift", quantity: 1, notes: "", category: "Misc" },
            { name: "Card", quantity: 1, notes: "", category: "Misc" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Keys", quantity: 1, notes: "", category: "Essentials" },
            { name: "Jacket/Outerwear (if needed)", quantity: 1, notes: "", category: "Clothing" }
        ],
        "Baby Shower": [
            { name: "Smart Casual Outfit", quantity: 1, notes: "", category: "Clothing" },
            { name: "Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Gift for Baby/Parents-to-be", quantity: 1, notes: "", category: "Misc" },
            { name: "Card", quantity: 1, notes: "", category: "Misc" },
            { name: "Cash/Cards", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" },
            { name: "Keys", quantity: 1, notes: "", category: "Essentials" }
        ]
    },
    "Health & Family": {
        "Hospital Stay (Surgery)": [
            { name: "Insurance Card & ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Hospital Paperwork", quantity: 1, notes: "", category: "Documents" },
            { name: "List of Medications", quantity: 1, notes: "", category: "Health" },
            { name: "Comfortable Pajamas/Robe", quantity: 1, notes: "", category: "Clothing" },
            { name: "Slippers/Non-slip Socks", quantity: 1, notes: "", category: "Clothing" },
            { name: "Loose Fitting Clothes (for going home)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries (toothbrush, toothpaste, hairbrush)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Lip Balm", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Book/Entertainment", quantity: 1, notes: "", category: "Misc" },
            { name: "Phone & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Eyeglasses/Contacts & Solution", quantity: 1, notes: "", category: "Health" },
            { name: "Small Amount of Cash", quantity: 1, notes: "", category: "Essentials" }
        ],
        "Hospital Stay (Giving Birth)": [
            { name: "Insurance Card & ID", quantity: 1, notes: "", category: "Documents" },
            { name: "Hospital Paperwork", quantity: 1, notes: "", category: "Documents" },
            { name: "Birth Plan (if any)", quantity: 1, notes: "", category: "Documents" },
            { name: "Robe", quantity: 1, notes: "", category: "Clothing" },
            { name: "Nursing Bras/Tops (if planning to breastfeed)", quantity: 2, notes: "", category: "Clothing" },
            { name: "Comfortable Pajamas", quantity: 2, notes: "", category: "Clothing" },
            { name: "Slippers/Socks", quantity: 1, notes: "", category: "Clothing" },
            { name: "Going-Home Outfit (loose)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Toiletries", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Lip Balm", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Hair Ties", quantity: 1, notes: "", category: "Accessories" },
            { name: "Phone & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Snacks & Drinks", quantity: 1, notes: "", category: "Food" },
            { name: "Pillow (optional)", quantity: 1, notes: "", category: "Misc" },
            { name: "Baby's Going-Home Outfit", quantity: 1, notes: "", category: "Baby" },
            { name: "Baby Car Seat (installed)", quantity: 1, notes: "", category: "Baby" },
            { name: "Baby Blanket", quantity: 1, notes: "", category: "Baby" }
        ],
        "Gym Workout": [
            { name: "Workout Clothes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Athletic Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Socks", quantity: 1, notes: "", category: "Clothing" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Towel", quantity: 1, notes: "", category: "Misc" },
            { name: "Headphones", quantity: 1, notes: "", category: "Electronics" },
            { name: "Fitness Tracker (optional)", quantity: 1, notes: "", category: "Electronics" },
            { name: "Gym Lock", quantity: 1, notes: "", category: "Misc" },
            { name: "Shower Supplies (if needed)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Change of Clothes (if needed)", quantity: 1, notes: "", category: "Clothing" }
        ]
    },
    "Community & Faith": {
        "Church Service": [
            { name: "Bible", quantity: 1, notes: "", category: "Faith" },
            { name: "Notebook & Pen", quantity: 1, notes: "", category: "Misc" },
            { name: "Offering/Donation", quantity: 1, notes: "", category: "Essentials" },
            { name: "Smart/Respectful Attire", quantity: 1, notes: "", category: "Clothing" },
            { name: "Comfortable Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Jacket/Outerwear (if needed)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Keys", quantity: 1, notes: "", category: "Essentials" },
            { name: "Phone", quantity: 1, notes: "", category: "Electronics" }
        ],
        "Evangelism/Outreach": [
            { name: "Bible", quantity: 1, notes: "", category: "Faith" },
            { name: "Tracts/Literature", quantity: 1, notes: "", category: "Faith" },
            { name: "Notebook & Pen", quantity: 1, notes: "", category: "Misc" },
            { name: "Comfortable Walking Shoes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Weather-Appropriate Clothing", quantity: 1, notes: "", category: "Clothing" },
            { name: "Water Bottle", quantity: 1, notes: "", category: "Misc" },
            { name: "Snacks", quantity: 1, notes: "", category: "Food" },
            { name: "Small Bag/Backpack", quantity: 1, notes: "", category: "Accessories" },
            { name: "Sunscreen/Hat (if outdoors)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Positive Attitude", quantity: 1, notes: "", category: "Misc" }
        ]
    },
    "Relocation": {
        "Moving (Essentials Box)": [
            { name: "Box Cutter", quantity: 1, notes: "", category: "Tools" },
            { name: "Trash Bags", quantity: 1, notes: "", category: "Misc" },
            { name: "Paper Towels", quantity: 1, notes: "", category: "Misc" },
            { name: "Basic Toiletries (soap, toilet paper)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Medications", quantity: 1, notes: "", category: "Health" },
            { name: "Phone Chargers", quantity: 1, notes: "", category: "Electronics" },
            { name: "Snacks & Water", quantity: 1, notes: "", category: "Food" },
            { name: "Important Documents (lease, contacts)", quantity: 1, notes: "", category: "Documents" },
            { name: "Basic Toolkit (screwdriver, wrench)", quantity: 1, notes: "", category: "Tools" },
            { name: "Flashlight", quantity: 1, notes: "", category: "Tools" },
            { name: "Pet Food & Bowls (if applicable)", quantity: 1, notes: "", category: "Pets" },
            { name: "Change of Clothes (1 day)", quantity: 1, notes: "", category: "Clothing" }
        ],
        "Moving to a New Country": [
            { name: "Passport & Visas", quantity: 1, notes: "", category: "Documents" },
            { name: "Flight/Travel Tickets", quantity: 1, notes: "", category: "Documents" },
            { name: "Important Documents (birth cert, marriage cert, work permits, school records) - Originals & Copies", quantity: 1, notes: "", category: "Documents" },
            { name: "Foreign Currency", quantity: 1, notes: "", category: "Essentials" },
            { name: "Credit/Debit Cards (notify banks of travel)", quantity: 1, notes: "", category: "Essentials" },
            { name: "Medications (with prescription)", quantity: 1, notes: "", category: "Health" },
            { name: "Basic Toiletries (travel size)", quantity: 1, notes: "", category: "Toiletries" },
            { name: "Phone & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Universal Power Adapter", quantity: 1, notes: "", category: "Electronics" },
            { name: "Laptop/Tablet & Charger", quantity: 1, notes: "", category: "Electronics" },
            { name: "Comfortable Travel Clothes", quantity: 1, notes: "", category: "Clothing" },
            { name: "Change of Clothes (1-2 days)", quantity: 1, notes: "", category: "Clothing" },
            { name: "Sentimental Items (small)", quantity: 1, notes: "", category: "Misc" },
            { name: "Contact Information (embassy, new address)", quantity: 1, notes: "", category: "Documents" }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("event-category");
    const typeSelect = document.getElementById("event-type");
    const generateListButton = document.getElementById("generate-list");
    const packingListUl = document.getElementById("packing-list");
    const addItemInput = document.getElementById("add-item-input");
    const addItemButton = document.getElementById("add-item-button");
    const printListButton = document.getElementById("print-list");
    const saveListButton = document.getElementById("save-list-button");
    const listNameInput = document.getElementById("list-name-input");
    const savedListsSelect = document.getElementById("saved-lists-select");
    const loadListButton = document.getElementById("load-list-button");
    const deleteListButton = document.getElementById("delete-list-button");
    const listControlsSection = document.getElementById("list-controls");
    const savedListsSection = document.getElementById("saved-lists-section");

    // New Template Elements (assuming they exist in HTML)
    const saveTemplateButton = document.getElementById("save-template-button");
    const templateNameInput = document.getElementById("template-name-input");
    const savedTemplatesSelect = document.getElementById("saved-templates-select");
    const loadTemplateButton = document.getElementById("load-template-button");
    const deleteTemplateButton = document.getElementById("delete-template-button");
    const savedTemplatesSection = document.getElementById("saved-templates-section");

    const LISTS_LOCAL_STORAGE_KEY = "goitems_packer_saved_lists_static_v2";
    const TEMPLATES_LOCAL_STORAGE_KEY = "goitems_packer_saved_templates_static_v2"; // New key for templates

    // --- Initialization ---
    loadCategories();
    populateSavedListsDropdown();
    populateSavedTemplatesDropdown(); // Populate templates dropdown
    // Disable type select initially
    typeSelect.disabled = true;
    generateListButton.disabled = true;
    listControlsSection.style.display = "none"; // Hide list controls initially
    savedListsSection.style.display = "block"; // Show saved lists section
    savedTemplatesSection.style.display = "block"; // Show saved templates section

    // --- Event Listeners ---
    categorySelect.addEventListener("change", handleCategoryChange);
    typeSelect.addEventListener("change", handleTypeChange);
    generateListButton.addEventListener("click", generateAndDisplayList);
    addItemButton.addEventListener("click", handleAddItem);
    addItemInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleAddItem();
        }
    });
    printListButton.addEventListener("click", handlePrintList);
    saveListButton.addEventListener("click", handleSaveList);
    loadListButton.addEventListener("click", handleLoadList);
    deleteListButton.addEventListener("click", handleDeleteList);

    // Template Listeners
    saveTemplateButton.addEventListener("click", handleSaveTemplate);
    loadTemplateButton.addEventListener("click", handleLoadTemplate);
    deleteTemplateButton.addEventListener("click", handleDeleteTemplate);

    // Event delegation for checking/unchecking, deleting items, and quantity changes
    packingListUl.addEventListener("click", (event) => {
        const target = event.target;
        const listItem = target.closest("li");
        if (!listItem) return;

        if (target.classList.contains("delete-item")) {
            deleteItem(listItem);
        } else if (target.classList.contains("quantity-increase")) {
            changeQuantity(listItem, 1);
        } else if (target.classList.contains("quantity-decrease")) {
            changeQuantity(listItem, -1);
        } else if (target.classList.contains("item-name")) {
            toggleItemCheck(listItem);
        } else if (target.type === "checkbox") {
            toggleItemCheckVisual(listItem);
        }
    });
    packingListUl.addEventListener("change", (event) => {
        const target = event.target;
        const listItem = target.closest("li");
        if (!listItem) return;

        if (target.classList.contains("quantity-input")) {
            updateQuantityFromInput(listItem, target);
        }
    });
    packingListUl.addEventListener("input", (event) => { // Use input for immediate feedback, or blur for saving on focus loss
        const target = event.target;
        const listItem = target.closest("li");
        if (!listItem) return;

        if (target.classList.contains("item-notes-input")) {
            updateNotesFromInput(listItem, target);
        }
    });

    // --- Functions ---

    // Load Categories from hardcoded data
    function loadCategories() {
        try {
            const categories = Object.keys(packingData).sort(); // Get categories from data

            categorySelect.innerHTML = 
                `<option value="" disabled selected>-- Select Category --</option>` + 
                categories.map(cat => `<option value="${cat}">${cat}</option>`).join("");
            
            categorySelect.disabled = false;
        } catch (error) {
            console.error("Error loading categories from data:", error);
            categorySelect.innerHTML = 
                `<option value="" disabled selected>Error loading categories</option>`;
            categorySelect.disabled = true;
        }
    }

    // Handle Category Change using hardcoded data
    function handleCategoryChange() {
        const selectedCategory = categorySelect.value;
        if (!selectedCategory || !packingData[selectedCategory]) {
            typeSelect.innerHTML = 
                `<option value="" disabled selected>-- Select Type --</option>`;
            typeSelect.disabled = true;
            generateListButton.disabled = true;
            return;
        }

        try {
            const eventTypes = Object.keys(packingData[selectedCategory]).sort(); // Get types for the category

            typeSelect.innerHTML = 
                `<option value="" disabled selected>-- Select Type --</option>` + 
                eventTypes.map(et => `<option value="${et}">${et}</option>`).join("");
            
            typeSelect.disabled = false;
            // Keep generate button disabled until a type is selected
            generateListButton.disabled = true; 
        } catch (error) {
            console.error("Error loading event types from data:", error);
            typeSelect.innerHTML = 
                `<option value="" disabled selected>Error loading types</option>`;
            typeSelect.disabled = true;
            generateListButton.disabled = true;
        }
    }

    // Handle Type Change
    function handleTypeChange() {
        generateListButton.disabled = !typeSelect.value; // Enable button only if a type is selected
    }

    // Generate and Display List from hardcoded data
    function generateAndDisplayList() {
        const selectedCategory = categorySelect.value;
        const selectedType = typeSelect.value;
        
        if (!selectedCategory || !selectedType || !packingData[selectedCategory] || !packingData[selectedCategory][selectedType]) {
            console.error("Invalid category or type selected for generating list.");
            packingListUl.innerHTML = "<li>Error: Could not find data for the selected event type.</li>";
            listControlsSection.style.display = "block";
            return;
        }

        packingListUl.innerHTML = "<li>Loading list...</li>";
        listControlsSection.style.display = "block"; // Show controls

        try {
            // Deep copy items to avoid modifying original data
            const items = JSON.parse(JSON.stringify(packingData[selectedCategory][selectedType])); 
            displayList(items);
            listNameInput.value = selectedType; // Set list name input based on selected event type
            templateNameInput.value = selectedType; // Also set template name input
        } catch (error) {
            console.error("Error generating list from data:", error);
            packingListUl.innerHTML = "<li>Error loading list. Please try again.</li>";
        }
    }

    // Display List Items
    function displayList(items) {
        packingListUl.innerHTML = ""; // Clear previous list
        if (!items || items.length === 0) {
            packingListUl.innerHTML = "<li>No suggested items found. Add your own!</li>";
        }
        items.forEach(item => {
            // Ensure item is an object with default quantity if needed
            const itemObj = typeof item === "string" ? { name: item, quantity: 1, notes: "", category: "" } : { ...item }; // Clone item object
            if (itemObj.quantity === undefined) itemObj.quantity = 1;
            if (itemObj.notes === undefined) itemObj.notes = "";
            if (itemObj.category === undefined) itemObj.category = "";
            if (itemObj.checked === undefined) itemObj.checked = false;
            addItemToListDOM(itemObj);
        });
        listControlsSection.style.display = "block"; // Ensure controls are visible
    }

    // Add Item to DOM (now takes an item object)
    function addItemToListDOM(itemObj) {
        if (!itemObj || !itemObj.name) return;

        // Remove placeholder if it exists
        const placeholder = packingListUl.querySelector("li:not([data-item-name])");
        if (placeholder && (placeholder.textContent.includes("No suggested items") || placeholder.textContent.includes("Error loading"))) {
            placeholder.remove();
        }

        const li = document.createElement("li");
        li.dataset.itemName = itemObj.name; // Store item name for saving
        li.dataset.quantity = itemObj.quantity; // Store quantity
        li.dataset.notes = itemObj.notes || ""; // Store notes
        li.dataset.category = itemObj.category || "Misc"; // Store category, default to Misc
        if (itemObj.checked) {
            li.classList.add("checked");
        }

        li.innerHTML = `
            <div class="item-details">
                <div class="item-main">
                    <span class="item-name">${itemObj.name}</span>
                    <div class="quantity-controls">
                        <button class="quantity-decrease" aria-label="Decrease quantity for ${itemObj.name}">-</button>
                        <input type="number" class="quantity-input" value="${itemObj.quantity}" min="1" aria-label="Quantity for ${itemObj.name}">
                        <button class="quantity-increase" aria-label="Increase quantity for ${itemObj.name}">+</button>
                    </div>
                </div>
                <div class="item-sub-details">
                    <input type="text" class="item-notes-input" placeholder="Add note..." value="${itemObj.notes || ''}" aria-label="Note for ${itemObj.name}">
                    <span class="item-category-display">${itemObj.category || 'Misc'}</span>
                </div>
            </div>
            <div class="item-actions">
                <input type="checkbox" ${itemObj.checked ? "checked" : ""} aria-label="Mark ${itemObj.name} as packed">
                <button class="delete-item" aria-label="Remove ${itemObj.name}">&times;</button>
            </div>
        `;
        packingListUl.appendChild(li);
    }

    // Handle Add Item Button Click
    function handleAddItem() {
        const itemName = addItemInput.value.trim();
        if (itemName) {
            addItemToListDOM({ name: itemName, quantity: 1, checked: false, notes: "", category: "" }); // Add as object
            addItemInput.value = ""; // Clear input
            addItemInput.focus();
        }
    }

    // Delete Item from DOM
    function deleteItem(listItem) {
        listItem.remove();
    }

    // Toggle Item Check State (Visual and Data)
    function toggleItemCheck(listItem) {
        const checkbox = listItem.querySelector("input[type='checkbox']");
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            toggleItemCheckVisual(listItem);
        }
    }
    
    // Update visual state based on checkbox
    function toggleItemCheckVisual(listItem) {
        const checkbox = listItem.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            listItem.classList.add("checked");
        } else {
            listItem.classList.remove("checked");
        }
    }

    // --- Quantity Functions ---
    function changeQuantity(listItem, delta) {
        const input = listItem.querySelector(".quantity-input");
        let currentQuantity = parseInt(input.value, 10);
        currentQuantity = isNaN(currentQuantity) ? 1 : currentQuantity;
        let newQuantity = Math.max(1, currentQuantity + delta); // Ensure quantity is at least 1
        input.value = newQuantity;
        listItem.dataset.quantity = newQuantity; // Update data attribute
    }

    function updateQuantityFromInput(listItem, input) {
        let newQuantity = parseInt(input.value, 10);
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1; // Reset to 1 if invalid
            input.value = newQuantity;
        }
        listItem.dataset.quantity = newQuantity; // Update data attribute
    }

    // Handle Print List
    function handlePrintList() {
        window.print();
    }

    // --- Local Storage Functions (Lists) ---

    function getSavedLists() {
        const listsJson = localStorage.getItem(LISTS_LOCAL_STORAGE_KEY);
        return listsJson ? JSON.parse(listsJson) : {};
    }

    function saveListsToStorage(lists) {
        localStorage.setItem(LISTS_LOCAL_STORAGE_KEY, JSON.stringify(lists));
    }

    function handleSaveList() {
        const listName = listNameInput.value.trim();
        if (!listName) {
            alert("Please enter a name for the list before saving.");
            listNameInput.focus();
            return;
        }

        const items = [];
        packingListUl.querySelectorAll("li[data-item-name]").forEach(li => {
            const itemName = li.dataset.itemName;
            const quantity = parseInt(li.dataset.quantity, 10) || 1;
            const isChecked = li.classList.contains("checked");
            const notes = li.querySelector(".item-notes-input")?.value || ""; // Get notes from input
            const category = li.dataset.category || "Misc"; // Get category from dataset
            items.push({ name: itemName, quantity: quantity, checked: isChecked, notes: notes, category: category });
        });

        if (items.length === 0) {
            alert("Cannot save an empty list.");
            return;
        }

        const savedLists = getSavedLists();
        savedLists[listName] = items;
        saveListsToStorage(savedLists);
        populateSavedListsDropdown();
        alert(`List "${listName}" saved successfully!`);
        savedListsSelect.value = listName; // Select the newly saved list
    }

    function populateSavedListsDropdown() {
        const savedLists = getSavedLists();
        const listNames = Object.keys(savedLists).sort();

        if (listNames.length === 0) {
            savedListsSelect.innerHTML = `<option value="" disabled selected>-- No saved lists --</option>`;
            loadListButton.disabled = true;
            deleteListButton.disabled = true;
        } else {
            savedListsSelect.innerHTML = 
                `<option value="" disabled selected>-- Select a list --</option>` + 
                listNames.map(name => `<option value="${name}">${name}</option>`).join("");
            loadListButton.disabled = false;
            deleteListButton.disabled = false;
        }
    }

    function handleLoadList() {
        const listName = savedListsSelect.value;
        if (!listName) {
            alert("Please select a list to load.");
            return;
        }

        const savedLists = getSavedLists();
        const items = savedLists[listName];

        if (items) {
            displayList(items); // displayList now handles item objects
            listNameInput.value = listName; // Update list name input
            templateNameInput.value = listName; // Update template name input too
            // Reset category/type dropdowns as the loaded list might not match
            categorySelect.value = "";
            typeSelect.innerHTML = `<option value="" disabled selected>-- Select Type --</option>`;
            typeSelect.disabled = true;
            generateListButton.disabled = true;
        } else {
            alert(`Error: Could not find saved list "${listName}".`);
        }
    }

    function handleDeleteList() {
        const listName = savedListsSelect.value;
        if (!listName) {
            alert("Please select a list to delete.");
            return;
        }

        if (confirm(`Are you sure you want to delete the list "${listName}"? This cannot be undone.`)) {
            const savedLists = getSavedLists();
            delete savedLists[listName];
            saveListsToStorage(savedLists);
            populateSavedListsDropdown();
            alert(`List "${listName}" deleted.`);
            // Optionally clear the current list if it was the one deleted
            if (listNameInput.value === listName) {
                packingListUl.innerHTML = "";
                listNameInput.value = "";
                listControlsSection.style.display = "none";
            }
        }
    }

    // --- Local Storage Functions (Templates) ---

    function getSavedTemplates() {
        const templatesJson = localStorage.getItem(TEMPLATES_LOCAL_STORAGE_KEY);
        return templatesJson ? JSON.parse(templatesJson) : {};
    }

    function saveTemplatesToStorage(templates) {
        localStorage.setItem(TEMPLATES_LOCAL_STORAGE_KEY, JSON.stringify(templates));
    }

    function handleSaveTemplate() {
        const templateName = templateNameInput.value.trim();
        if (!templateName) {
            alert("Please enter a name for the template before saving.");
            templateNameInput.focus();
            return;
        }

        const items = [];
        packingListUl.querySelectorAll("li[data-item-name]").forEach(li => {
            const itemName = li.dataset.itemName;
            const quantity = parseInt(li.dataset.quantity, 10) || 1;
            const category = li.dataset.category || "Misc"; // Get category from dataset
            // Templates save the structure (name, quantity, category), not checked state or notes
            items.push({ name: itemName, quantity: quantity, checked: false, notes: "", category: category }); 
        });

        if (items.length === 0) {
            alert("Cannot save an empty list as a template.");
            return;
        }

        const savedTemplates = getSavedTemplates();
        savedTemplates[templateName] = items;
        saveTemplatesToStorage(savedTemplates);
        populateSavedTemplatesDropdown();
        alert(`Template "${templateName}" saved successfully!`);
        savedTemplatesSelect.value = templateName; // Select the newly saved template
    }

    function populateSavedTemplatesDropdown() {
        const savedTemplates = getSavedTemplates();
        const templateNames = Object.keys(savedTemplates).sort();

        if (templateNames.length === 0) {
            savedTemplatesSelect.innerHTML = `<option value="" disabled selected>-- No saved templates --</option>`;
            loadTemplateButton.disabled = true;
            deleteTemplateButton.disabled = true;
        } else {
            savedTemplatesSelect.innerHTML = 
                `<option value="" disabled selected>-- Select a template --</option>` + 
                templateNames.map(name => `<option value="${name}">${name}</option>`).join("");
            loadTemplateButton.disabled = false;
            deleteTemplateButton.disabled = false;
        }
    }

    function handleLoadTemplate() {
        const templateName = savedTemplatesSelect.value;
        if (!templateName) {
            alert("Please select a template to load.");
            return;
        }

        const savedTemplates = getSavedTemplates();
        const items = savedTemplates[templateName];

        if (items) {
            // Deep copy items before displaying to avoid modifying stored template
            const itemsCopy = JSON.parse(JSON.stringify(items)); 
            displayList(itemsCopy); 
            listNameInput.value = templateName; // Update list name input
            templateNameInput.value = templateName; // Update template name input
            // Reset category/type dropdowns as the loaded template might not match
            categorySelect.value = "";
            typeSelect.innerHTML = `<option value="" disabled selected>-- Select Type --</option>`;
            typeSelect.disabled = true;
            generateListButton.disabled = true;
        } else {
            alert(`Error: Could not find saved template "${templateName}".`);
        }
    }

    function handleDeleteTemplate() {
        const templateName = savedTemplatesSelect.value;
        if (!templateName) {
            alert("Please select a template to delete.");
            return;
        }

        if (confirm(`Are you sure you want to delete the template "${templateName}"? This cannot be undone.`)) {
            const savedTemplates = getSavedTemplates();
            delete savedTemplates[templateName];
            saveTemplatesToStorage(savedTemplates);
            populateSavedTemplatesDropdown();
            alert(`Template "${templateName}" deleted.`);
        }
    }

});



    // --- Notes Function ---
    function updateNotesFromInput(listItem, input) {
        listItem.dataset.notes = input.value.trim(); // Update data attribute
    }

