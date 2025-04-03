document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResult = document.getElementById('searchResult');

    const performSearch = () => {
        const searchText = searchInput.value.trim();
        if (searchText) {
            searchResult.style.display = 'block';
            searchResult.innerHTML = `<p>Você buscou por: '${searchText}'</p>`;
        } else {
            searchResult.style.display = 'none';
            searchResult.innerHTML = '';
        }
    };

    searchInput.addEventListener('input', performSearch);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Initialize product carousel
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300',
            name: 'Camiseta Casual Masculina',
            price: 129.90,
            oldPrice: 149.00
        },
        {
            image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300',
            name: 'Camiseta Premium',
            price: 199.90,
            oldPrice: 249.00
        },
        {
            image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300',
            name: 'Wireless Headphones',
            price: 299.90,
            oldPrice: 399.00
        },
        {
            image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300',
            name: 'Gaming Console Pro',
            price: 2499.90,
            oldPrice: 2999.00
        },
        {
            image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300',
            name: 'Ultra HD Camera',
            price: 1899.90,
            oldPrice: 2199.00
        }
    ];

    const productCarousel = document.querySelector('.product-carousel');

    // Add navigation buttons
    productCarousel.insertAdjacentHTML('beforebegin', `
        <div class="carousel-nav">
            <button class="nav-btn prev-btn">&lt;</button>
            <button class="nav-btn next-btn">&gt;</button>
        </div>
    `);

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <span class="badge bg-primary">NOVO</span>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="old-price">R$ ${product.oldPrice.toFixed(2)}</p>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button class="btn btn-primary">Comprar</button>
            </div>
        `;
        productCarousel.innerHTML += productCard;
    });

    // Add navigation functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    nextBtn.addEventListener('click', () => {
        productCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        productCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
});
