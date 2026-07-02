/**
 * ============================================================
 * MEADOWS DINER — SITE CONFIGURATION
 * ============================================================
 * Edit this file to update business info across the entire site.
 * ============================================================
 */

export const siteConfig = {
  businessName: "Meadows Diner",
  tagline: "Classic Breakfast & Lunch",
  heroHeadline: "Little Italy's Favourite Breakfast Spot",
  heroSubheadline:
    "A cozy neighbourhood diner on Preston Street serving classic all-day breakfast, hearty lunch, and home-cooked meals since day one. Open daily 8 AM – 2 PM.",

  address: {
    street: "455 Preston Street",
    city: "Ottawa",
    province: "Ontario",
    postalCode: "K1S 3L2",
  },
  phone: "(613) 567-5214",
  priceRange: "CA$10–20",

  links: {
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Meadows+Diner+455+Preston+Street+Ottawa+ON+K1S+3L2",
    googleMapsEmbed: "https://www.google.com/maps?q=455+Preston+Street,+Ottawa,+ON+K1S+3L2&output=embed",
  },

  walkInNotice: "Walk-ins welcome — no reservations needed.",

  hours: [
    { day: "Monday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Tuesday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Wednesday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Thursday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Friday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Saturday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
    { day: "Sunday", time: "8:00 a.m. – 2:00 p.m.", closed: false },
  ],
  hoursDisclaimer: "Hours may change during holidays. Please call ahead to confirm before visiting.",

  menu: {
    disclaimer: "Prices are approximate and may vary. Menu items may change based on availability.",
    priceNote: "Prices are approximate and may vary",
    sections: [
      {
        title: "Breakfast",
        note: "Served all day.",
        items: [
          { name: "2 Egg Traditional Breakfast", price: "$10.99", description: "Two eggs, home fries, choice of bacon, ham, or sausage, toast, and coffee.", tag: "Popular" },
          { name: "3 Egg Traditional Breakfast", price: "$12.99", description: "Three eggs, home fries, choice of bacon, ham, or sausage, toast, and coffee." },
          { name: "Fontenelle-style Big Breakfast", price: "$14.99", description: "A hearty platter to start your morning off right." },
          { name: "Smoked Meat Eggs Benedict", price: "$15.99", description: "House smoked meat, poached eggs, and hollandaise on an English muffin with home fries.", tag: "Signature" },
          { name: "Back Bacon Eggs Benedict", price: "$14.99", description: "Canadian back bacon, poached eggs, and hollandaise on an English muffin with home fries." },
          { name: "Western Omelette", price: "$13.99", description: "Ham, peppers, onions, and cheese folded into a fluffy omelette with home fries and toast." },
          { name: "Cheese Omelette", price: "$12.99", description: "Melted cheese in a classic fluffy omelette with home fries and toast." },
          { name: "Veggie Omelette", price: "$13.99", description: "Seasonal vegetables and cheese in a fluffy omelette with home fries and toast.", tag: "Vegetarian" },
          { name: "French Toast", price: "$10.99", description: "Three slices of thick-cut French toast with maple syrup and butter." },
          { name: "Pancakes", price: "$9.99", description: "A stack of three fluffy pancakes with maple syrup and butter." },
          { name: "Steak and Eggs", price: "$17.99", description: "Grilled steak with two eggs, home fries, and toast." },
        ],
      },
      {
        title: "Lunch",
        items: [
          { name: "Smoked Meat Sandwich", price: "$14.99", description: "Piled-high smoked meat on rye bread with mustard.", tag: "Popular" },
          { name: "Reuben Sandwich", price: "$14.99", description: "Smoked meat, sauerkraut, Swiss cheese, and Russian dressing on grilled rye." },
          { name: "Club Sandwich", price: "$14.99", description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo." },
          { name: "BLT", price: "$11.99", description: "Crispy bacon, lettuce, and tomato on toasted bread with mayo." },
          { name: "Grilled Cheese", price: "$9.99", description: "Classic melted cheese on golden grilled bread." },
          { name: "Hamburger & Fries", price: "$13.99", description: "Juicy beef patty with lettuce, tomato, and onion, served with fries." },
          { name: "Cheeseburger & Fries", price: "$14.99", description: "Beef patty with melted cheese, lettuce, tomato, and onion, served with fries." },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Home Fries", price: "$4.99", description: "Crispy seasoned potato home fries." },
          { name: "Poutine", price: "$10.99", description: "Fresh-cut fries, cheese curds, and gravy.", tag: "Fan Favourite" },
          { name: "Side of Fruit", price: "$5.99", description: "Fresh seasonal fruit." },
          { name: "Side Pancakes (2)", price: "$5.99" },
          { name: "Side French Toast (2)", price: "$5.99" },
          { name: "Toast & Jam", price: "$3.99" },
          { name: "Side Bacon or Sausage", price: "$4.99" },
        ],
      },
      {
        title: "Drinks",
        items: [
          { name: "Coffee", price: "$3.50", description: "Freshly brewed with free refills.", tag: "Free Refills" },
          { name: "Tea", price: "$3.50" },
          { name: "Orange Juice", price: "$4.00" },
          { name: "Apple Juice", price: "$4.00" },
          { name: "Soft Drinks", price: "$3.00" },
          { name: "Milkshake", price: "$7.99", description: "Thick and creamy, made to order." },
        ],
      },
    ],
  },

  reviews: {
    rating: 4.5,
    totalReviews: 154,
    testimonials: [
      { text: "A fantastic diner with an extensive menu of delicious breakfast and lunch meals. The staff is friendly and accommodates most requests. Very busy on Sundays — you must try it!", author: "Sunday Regular" },
      { text: "We have been going to Meadows for breakfast every Saturday for a few months. The food is great and fresh, but the service is the star. The owner and the staff are always in a good mood.", author: "Weekend Regular" },
      { text: "Great local mom & pop shop. Lovely family owned business. Super friendly, feels like home. Will definitely be back.", author: "First-time Visitor" },
      { text: "Currently my favourite poutine in Ottawa. Loaded with cheese curds, bacon, onions, and hollandaise sauce. Everything is delicious and well-priced.", author: "Poutine Fan" },
      { text: "The smoked meat eggs benny is incredible. Generous portions and very reasonable prices. A true gem in Little Italy.", author: "Brunch Enthusiast" },
      { text: "We visited on a rainy Sunday morning for breakfast. A warm friendly welcome, willingness to accommodate our dietary preference, prompt service and great food.", author: "Weekend Visitor" },
    ],
  },

  featuredDishes: [
    { name: "Smoked Meat Eggs Benny", label: "Signature", description: "House smoked meat with poached eggs and hollandaise — a Little Italy favourite." },
    { name: "Traditional Breakfast", label: "Classic", description: "Eggs, home fries, your choice of meat, toast, and coffee. The way breakfast should be." },
    { name: "French Toast", label: "Classic", description: "Three slices of thick-cut French toast with real maple syrup." },
    { name: "Poutine", label: "Fan Favourite", description: "Fresh-cut fries loaded with cheese curds, bacon, onions, and hollandaise." },
  ],

  faq: [
    { q: "Do you serve breakfast all day?", a: "Yes! Our full breakfast menu is available from open to close, every day." },
    { q: "Do you take reservations?", a: "No, we're walk-in only. On busy weekends there may be a short wait, but tables turn over quickly." },
    { q: "Is there parking nearby?", a: "Yes, street parking is available along Preston Street. There are also nearby public lots." },
    { q: "Do you have vegetarian options?", a: "Yes, we have several vegetarian options including our veggie omelette, French toast, pancakes, grilled cheese, and more." },
    { q: "Is the poutine really that good?", a: "Our regulars think so! Loaded with cheese curds, bacon, onions, and hollandaise sauce — it's one of our most talked-about dishes." },
    { q: "Do you offer free coffee refills?", a: "Absolutely. Enjoy as many refills as you'd like with your meal." },
    { q: "How busy are weekends?", a: "Weekends can be busy, especially Sunday mornings. Arriving earlier helps, and the wait is always worth it." },
  ],

  seo: {
    title: "Meadows Diner | Breakfast & Lunch in Little Italy, Ottawa",
    description: "Visit Meadows Diner at 455 Preston Street for classic all-day breakfast, hearty lunch, famous poutine, and home-cooked meals in Ottawa's Little Italy. Open daily 8 AM – 2 PM.",
  },
} as const;
