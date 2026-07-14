// ===== TEST VERSION: Sirf check karega ke JS chal rahi hai =====
console.log("🚀 MENU.JS IS RUNNING!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOMContentLoaded event fire ho gaya!");
    
    const cat = document.getElementById('menu-categories');
    const grid = document.getElementById('menu-items-grid');
    
    console.log("🔍 menu-categories element:", cat);
    console.log("🔍 menu-items-grid element:", grid);
    
    if (cat) {
        cat.innerHTML = '<h1 style="color:green; text-align:center;">✅ JavaScript CHAL RAHI HAI! ID MIL GAYI!</h1>';
    }
    if (grid) {
        grid.innerHTML = '<p style="color:blue; text-align:center;">Agar yeh dikh raha hai toh menu.js sahi chal rahi hai.</p>';
    }
});