class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Map di JS menyimpan urutan insersi (penting!)
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    
    // Refresh item: hapus lalu set ulang (pindah ke paling belakang/baru)
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
      // Map.keys().next().value mengambil item pertama (paling lama/LRU)
      // Ini O(1) di JS Map implementation modern
      this.cache.delete(this.cache.keys().next().value); 
    }
  }
}

console.log(new LRUCache(2));
