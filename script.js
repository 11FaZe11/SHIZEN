// Quick View Modal
document.querySelectorAll('.quick-view').forEach(item => {
    item.addEventListener('click', function() {
        const productCard = item.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        const productImage = productCard.querySelector('img').src;

        document.getElementById('modal-product-name').textContent = productName;
        document.getElementById('modal-product-price').textContent = productPrice;
        document.getElementById('modal-product-img').src = productImage;

        document.querySelector('.quick-view-modal').style.display = 'block';
    });
});

// Close Modal
document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.quick-view-modal').style.display = 'none';
});

document.querySelectorAll('.skin-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        document.querySelectorAll('.skin-card').forEach(c => c.classList.remove('active'));

        // Add active class to the clicked card
        card.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');

        // Show the content section corresponding to the clicked card
        const type = card.getAttribute('data-type');
        const contentToShow = document.querySelector(`.content-section[data-type="${type}"]`);
        if (contentToShow) {
            contentToShow.style.display = 'block';
        }

        // Show only products related to the selected card
        document.querySelectorAll('.product-card').forEach(product => {
            if (product.classList.contains(type)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Ensure the default content for 'bestseller' is displayed on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultContent = document.querySelector('.content-section[data-type="bestseller"]');
    if (defaultContent) {
        defaultContent.style.display = 'block';
    }

    document.querySelectorAll('.product-card').forEach(product => {
        if (product.classList.contains('bestseller')) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    const priceFilter = document.getElementById('price-filter');

    priceFilter.addEventListener('change', () => {
        const selectedRange = priceFilter.value;
        const activeCard = document.querySelector('.skin-card.active');
        const activeType = activeCard ? activeCard.getAttribute('data-type') : null;

        const products = activeType === 'all' 
            ? document.querySelectorAll('.product-card') 
            : document.querySelectorAll(`.product-card.${activeType}`);

        products.forEach(product => {
            const productPrice = parseInt(product.getAttribute('data-price'), 10);

            if (selectedRange === 'all') {
                product.style.display = 'block';
            } else if (selectedRange === '0-50' && productPrice <= 50) {
                product.style.display = 'block';
            } else if (selectedRange === '50-100' && productPrice > 50 && productPrice <= 100) {
                product.style.display = 'block';
            } else if (selectedRange === '100+' && productPrice > 100) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    const searchBox = document.querySelector('.search-box input');

    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();
        const activeCard = document.querySelector('.skin-card.active');
        const activeType = activeCard ? activeCard.getAttribute('data-type') : null;

        document.querySelectorAll('.product-card').forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();

            if (activeType && !product.classList.contains(activeType)) {
                product.style.display = 'none';
            } else if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});