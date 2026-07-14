// ==========================================
// ALL DATA FOR THE RESTAURANT WEBSITE
// ==========================================

// 1. FOOD CATEGORIES (6)
export const categories = [
    { id: 1, name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', desc: 'Wood-fired perfection' },
    { id: 2, name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', desc: 'Juicy & gourmet' },
    { id: 3, name: 'BBQ', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ce2c?w=400', desc: 'Smoked to perfection' },
    { id: 4, name: 'Chinese', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400', desc: 'Authentic & flavorful' },
    { id: 5, name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', desc: 'Sweet indulgence' },
    { id: 6, name: 'Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400', desc: 'Refreshing beverages' }
];

// 2. TODAY'S SPECIAL (3)
export const specials = [
    { id: 1, name: 'Grilled Salmon', price: 24.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500', discount: 20 },
    { id: 2, name: 'Ribeye Steak', price: 32.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500', discount: 15 },
    { id: 3, name: 'Margherita Pizza', price: 18.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500', discount: 25 }
];

// 3. POPULAR MENU (12 Items)
export const menuItems = [
    { id: 1, name: 'Truffle Pasta', category: 'Lunch', price: 22.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400' },
    { id: 2, name: 'Chicken Burger', category: 'Burger', price: 14.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
    { id: 3, name: 'Pepperoni Pizza', category: 'Pizza', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
    { id: 4, name: 'BBQ Ribs', category: 'BBQ', price: 28.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ce2c?w=400' },
    { id: 5, name: 'Sushi Platter', category: 'Chinese', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400' },
    { id: 6, name: 'Chocolate Cake', category: 'Desserts', price: 9.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
    { id: 7, name: 'Mango Smoothie', category: 'Drinks', price: 7.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400' },
    { id: 8, name: 'Grilled Chicken', category: 'Lunch', price: 18.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400' },
    { id: 9, name: 'Double Cheese Burger', category: 'Burger', price: 16.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400' },
    { id: 10, name: 'Hawaiian Pizza', category: 'Pizza', price: 20.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
    { id: 11, name: 'Tiramisu', category: 'Desserts', price: 8.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
    { id: 12, name: 'Iced Latte', category: 'Drinks', price: 6.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' }
];

// 4. CHEFS (4)
export const chefs = [
    { id: 1, name: 'Marco Rossi', position: 'Executive Chef', image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400' },
    { id: 2, name: 'Maria Gonzalez', position: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400' },
    { id: 3, name: 'James Chen', position: 'Head Chef', image: 'https://images.unsplash.com/photo-1611062623628-9aa17fb97acc?w=400' },
    { id: 4, name: 'Sarah Williams', position: 'Sous Chef', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400' }
];

// 5. TESTIMONIALS (3)
export const testimonials = [
    { id: 1, name: 'Emily Johnson', review: 'An unforgettable dining experience. The flavors, the ambiance, the service – everything was impeccable!', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { id: 2, name: 'Michael Smith', review: 'Best restaurant in town! The steak was cooked to perfection.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 3, name: 'Sophia Lee', review: 'The desserts are absolutely divine! A must-visit.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' }
];

// 6. WHY CHOOSE US (6)
export const whyChoose = [
    { icon: 'fa-leaf', title: 'Fresh Ingredients', desc: 'Locally sourced, seasonal produce daily.' },
    { icon: 'fa-user-chef', title: 'Professional Chefs', desc: 'World-class culinary talent.' },
    { icon: 'fa-truck', title: 'Fast Delivery', desc: 'Hot and fresh food delivered to your door.' },
    { icon: 'fa-star', title: 'Best Quality', desc: 'Uncompromising standards in every dish.' },
    { icon: 'fa-calendar-check', title: 'Online Reservation', desc: 'Easy booking at your convenience.' },
    { icon: 'fa-lock', title: 'Secure Payment', desc: 'Safe and trusted payment methods.' }
];

// 7. GALLERY IMAGES (24)
export const galleryImages = [
    { id: 1, category: 'food', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
    { id: 2, category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300' },
    { id: 3, category: 'food', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300' },
    { id: 4, category: 'food', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300' },
    { id: 5, category: 'interior', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300' },
    { id: 6, category: 'interior', image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=300' },
    { id: 7, category: 'interior', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300' },
    { id: 8, category: 'interior', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300' },
    { id: 9, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556911073-a0c7f39a1a3a?w=300' },
    { id: 10, category: 'kitchen', image: 'https://images.unsplash.com/photo-1586993464450-d4b8a0d3aa21?w=300' },
    { id: 11, category: 'kitchen', image: 'https://images.unsplash.com/photo-1581791151450-15fb200c0a3e?w=300' },
    { id: 12, category: 'kitchen', image: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?w=300' },
    { id: 13, category: 'events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300' },
    { id: 14, category: 'events', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300' },
    { id: 15, category: 'events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300' },
    { id: 16, category: 'events', image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=300' },
    { id: 17, category: 'staff', image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300' },
    { id: 18, category: 'staff', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300' },
    { id: 19, category: 'staff', image: 'https://images.unsplash.com/photo-1611062623628-9aa17fb97acc?w=300' },
    { id: 20, category: 'staff', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=300' },
    { id: 21, category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300' },
    { id: 22, category: 'food', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300' },
    { id: 23, category: 'food', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300' },
    { id: 24, category: 'food', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' }
];

// 8. INSTAGRAM FEED (8)
export const instagramImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300',
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
    'https://images.unsplash.com/photo-1529193591184-b1d58069ce2c?w=300'
];

// 9. BLOG POSTS (6)
export const blogs = [
    { id: 1, title: '10 Tips for Perfect Pasta', author: 'Chef Marco', date: 'Jan 15, 2026', category: 'Cooking Tips', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600' },
    { id: 2, title: 'The Art of Grilling Steak', author: 'Chef James', date: 'Feb 02, 2026', category: 'Recipes', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600' },
    { id: 3, title: 'Seasonal Desserts to Try', author: 'Chef Maria', date: 'Feb 20, 2026', category: 'Desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600' },
    { id: 4, title: 'Wine Pairing Guide', author: 'Sommelier Tom', date: 'Mar 05, 2026', category: 'Drinks', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600' },
    { id: 5, title: 'Healthy Eating at Restaurants', author: 'Chef Sarah', date: 'Mar 18, 2026', category: 'Health', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600' },
    { id: 6, title: 'Behind the Scenes in Our Kitchen', author: 'Admin', date: 'Apr 01, 2026', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1586993464450-d4b8a0d3aa21?w=600' }
];

// 10. FAQS (15)
export const faqs = [
    { q: 'What are your opening hours?', a: 'We are open Monday to Friday 11:00 AM to 11:00 PM, and Saturday to Sunday 10:00 AM to 12:00 AM.' },
    { q: 'Do you take reservations?', a: 'Yes, you can book a table online through our Reservation page or call us directly.' },
    { q: 'Is there a dress code?', a: 'We recommend smart casual attire for a comfortable dining experience.' },
    { q: 'Do you offer vegetarian options?', a: 'Absolutely! We have a dedicated vegetarian menu with delicious options.' },
    { q: 'Can I host a private event?', a: 'Yes, we have private dining rooms available for events and celebrations.' },
    { q: 'Do you offer delivery?', a: 'Yes, we offer fast delivery through our partners. Order online or call us.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and digital wallets.' },
    { q: 'Is there parking available?', a: 'Yes, complimentary valet parking is available for all guests.' },
    { q: 'Do you have gluten-free options?', a: 'Yes, we offer a variety of gluten-free dishes. Please inform your server.' },
    { q: 'Can I bring my own wine?', a: 'Corkage fee applies. Please check with our sommelier for details.' },
    { q: 'Do you have a kids menu?', a: 'Yes, we have a special menu for children with their favorite dishes.' },
    { q: 'How do I apply for a job?', a: 'Visit our Contact page and send us your resume. We are always hiring.' },
    { q: 'Are pets allowed?', a: 'Service animals are welcome. Please inform us in advance.' },
    { q: 'Do you offer cooking classes?', a: 'Yes, we host monthly cooking classes. Check our Blog for updates.' },
    { q: 'Is there a loyalty program?', a: 'Yes, sign up for our newsletter to get exclusive offers and rewards.' }
];