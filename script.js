// Simulate dynamic product suggestions (mock data)
const products = [
    "Apple iPhone 14",
    "Samsung Galaxy S21",
    "Sony Noise Cancelling Headphones",
    "Apple MacBook Pro 16",
    "Adidas Running Shoes",
    "Nike Air Max Sneakers",
    "Sony Bravia 4K TV",
    "PlayStation 5 Console",
    "Apple Watch Series 8",
    "JBL Bluetooth Speaker",
    "Dell XPS 13 Laptop",
    "Canon DSLR Camera",
    "Samsung Smart Refrigerator",
    "Apple AirPods Pro",
    "Oculus Quest 2 VR Headset"
  ];
  
  // Get elements
  const searchInput = document.getElementById('search-input');
  const suggestionsList = document.getElementById('suggestions-list');
  
  // Debounce function to delay search suggestions
  function debounce(func, delay) {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }
  
  // Show suggestions with debouncing
  const showSuggestions = debounce(function () {
    const input = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';
    if (input.length > 0) {
      const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(input)
      );
  
      if (filteredProducts.length > 0) {
        suggestionsList.style.display = 'block';
        filteredProducts.forEach(product => {
          const li = document.createElement('li');
          li.textContent = product;
          li.addEventListener('click', () => selectSuggestion(product));
          suggestionsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = 'No suggestions found';
        suggestionsList.appendChild(li);
      }
    } else {
      suggestionsList.style.display = 'none';
    }
  }, 300); // Debounce delay of 300ms
  
  // Select suggestion and hide list
  function selectSuggestion(product) {
    searchInput.value = product;
    suggestionsList.style.display = 'none';
  }
  
  // Listen for input events
  searchInput.addEventListener('input', showSuggestions);
  