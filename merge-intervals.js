function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  
  // Sort berdasarkan start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];
    
    if (last[1] >= current[0]) {
      // Merge: ambil max end time
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  
  return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
