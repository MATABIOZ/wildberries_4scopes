document.getElementById('search-form').addEventListener('submit', function(event)) {
   event.preventDefault();

   const searchTerm = document.getElementById('search-input').value;
   searchProducts(searchTerm);
}