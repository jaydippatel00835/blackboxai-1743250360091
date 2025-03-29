// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden.p-2.rounded-full');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden fixed inset-0 bg-white z-50 p-4';
    mobileMenu.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <div class="flex items-center space-x-2">
                <i class="fas fa-utensils text-2xl text-orange-500"></i>
                <h1 class="text-xl font-bold text-gray-800">FoodExpress</h1>
            </div>
            <button class="p-2 rounded-full bg-gray-100 text-gray-600 close-mobile-menu">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <nav class="space-y-4">
            <a href="#" class="block text-gray-700 hover:text-orange-500 text-lg">Home</a>
            <a href="#" class="block text-gray-700 hover:text-orange-500 text-lg">Restaurants</a>
            <a href="#" class="block text-gray-700 hover:text-orange-500 text-lg">Offers</a>
            <a href="#" class="block text-gray-700 hover:text-orange-500 text-lg">My Orders</a>
            <button class="w-full mt-8 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                Sign In
            </button>
        </nav>
    `;

    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
    });

    document.querySelector('.close-mobile-menu').addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.fa-plus-circle');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.closest('.bg-white').querySelector('h4').textContent;
            alert(`${itemName} added to cart!`);
        });
    });

    // Favorite functionality
    const favoriteButtons = document.querySelectorAll('.fa-heart');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('text-red-500');
            this.classList.toggle('text-gray-400');
        });
    });
});