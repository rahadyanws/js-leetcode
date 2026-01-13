async function promisePool(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const [index, task] of tasks.entries()) {
    const promise = Promise.resolve().then(() => task());
    results.push(promise);
    
    const cleanup = promise.then(() => {
      executing.splice(executing.indexOf(cleanup), 1);
    });
    
    executing.push(cleanup);
    
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}

// Alternatif lebih efisien
async function promisePoolEfficient(tasks, limit) {
  const results = new Array(tasks.length);
  let index = 0;
  
  async function runNext() {
    if (index >= tasks.length) return;
    const currentIndex = index++;
    const task = tasks[currentIndex];
    results[currentIndex] = await task();
    await runNext();
  }
  
  const runners = Array(Math.min(limit, tasks.length)).fill(null).map(runNext);
  await Promise.all(runners);
  return results;
}

const tasks = [
  () => new Promise(r => setTimeout(() => { console.log(1); r(1) }, 1000)),
  () => new Promise(r => setTimeout(() => { console.log(2); r(2) }, 2000)),
  () => new Promise(r => setTimeout(() => { console.log(3); r(3) }, 1000)),
  () => new Promise(r => setTimeout(() => { console.log(4); r(4) }, 500)),
];

promisePool(tasks, 2).then(results => {
  console.log('All done:', results); // [1, 2, 3, 4]
});