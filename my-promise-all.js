function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((p, index) => {
      // Gunakan Promise.resolve untuk handle non-promise values
      Promise.resolve(p)
        .then((val) => {
          results[index] = val; // Pastikan urutan hasil sesuai input
          completed++;
          
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          // Fail fast: jika satu gagal, semua gagal
          reject(err);
        });
    });
  });
}

console.log(myPromiseAll([1, 2, 3]));
