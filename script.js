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

window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}); //Barra de enchimento

// Easter Egg - Versão Simplificada
let clickCount = 0;
let lastClickTime = 0;

document.querySelector('.egg').addEventListener('click', (e) => {
    const currentTime = new Date().getTime();
    
    // Reset count se passar mais de 1 segundo entre os cliques
    if (currentTime - lastClickTime > 1000) {
        clickCount = 0;
    }

    clickCount++;
    lastClickTime = currentTime;

    if (clickCount === 5) {
        showEasterEgg();
        clickCount = 0;
    }
});

function showEasterEgg() {
    // Criar modal
    const egg = document.createElement('div');
    egg.className = 'easter-egg';
    egg.innerHTML = `
        <div class="easter-content">
            <h3>🎉 Parabéns!!</h3>
            <p>Você encontrou um dos melhores estagiários candidatos!!</p>
            <p>Agora dê uma chance para ele, pois ele irá mudar o seu jeito de ver as coisas!</p>
            <p>Caso você tenha encontrado, me chame no whatsapp que irei fazer um pix de 5 reais hehe</p>
            <button class="close-egg">Fechar</button>
        </div>
    `;

    // Adicionar ao body
    document.body.appendChild(egg);

    // Fechar modal
    egg.querySelector('.close-egg').addEventListener('click', () => {
        egg.remove();
    });
}

// Adicionar CSS
const eggStyle = document.createElement('style');
eggStyle.textContent = `
    .easter-egg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: eggFadeIn 0.5s;
    }

    .easter-content {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        max-width: 500px;
        box-shadow: 0 0 20px rgba(0,102,255,0.5);
    }

    .easter-content h3 {
        color: #0066FF;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .easter-content p {
        font-size: 1.1rem;
        margin: 1rem 0;
        color: #333;
    }

    .close-egg {
        background: #0066FF;
        color: white;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 1rem;
        transition: transform 0.3s;
    }

    .close-egg:hover {
        transform: scale(1.05);
    }

    @keyframes eggFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(eggStyle);