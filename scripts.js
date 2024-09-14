document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Product 1", price: "$99.99", category: "electronics" },
        { name: "Product 2", price: "$129.99", category: "furniture" },
        { name: "Product 3", price: "$149.99", category: "clothing" },
        { name: "Product 4", price: "$79.99", category: "gadgets" },
        { name: "Product 5", price: "$89.99", category: "accessories" },
        { name: "Product 6", price: "$109.99", category: "appliances" }
    ];

    const slider = document.getElementById('slider');

    // Function to generate random image based on category
    const getRandomImage = (category) => {
        return `https://source.unsplash.com/300x200/?${category}`;
    };

    const renderProducts = () => {
        slider.innerHTML = products.map(product => `
            <div class="slider-item">
                <div class="product-card">
                    <img src="${getRandomImage(product.category)}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            </div>
        `).join('');
    };

    renderProducts();

    let currentIndex = 0;
    const totalSlides = products.length;
    const slidesToShow = 3;
    const slideWidth = document.querySelector('.slider-item').offsetWidth;

    const showSlide = (index) => {
        const offset = -index * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % (totalSlides - slidesToShow + 1);
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1);
        showSlide(currentIndex);
    };

    let slideInterval = setInterval(nextSlide, 5000);

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});
