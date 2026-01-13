function debounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    const later = () => {
      timeoutId = null;
      if (!immediate) func.apply(context, args);
    };
    
    const shouldCallNow = immediate && timeoutId === undefined;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    
    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
}

// Versi dengan cancel
function debounceWithCancel(func, delay) {
  let timeoutId;
  
  const debounced = function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
  
  debounced.cancel = () => {
    clearTimeout(timeoutId);
  };
  
  return debounced;
}


// Contoh penggunaan
const searchAPI = (query) => console.log(`Searching: ${query}`);
const debouncedSearch = debounce(searchAPI, 3000);

// Simulasi ketikan cepat
debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");