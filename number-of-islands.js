function numberIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  
  const dfs = (r, c) => {
    // Boundary check dan cek apakah air ('0')
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return;
    }
    
    // Tandai sebagai dikunjungi (ubah jadi '0' agar tidak dihitung lagi)
    grid[r][c] = '0';
    
    // Kunjungi tetangga (atas, bawah, kiri, kanan)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  
  return count;
}
  
console.log(numberIslands([['1','1','1','1','0'],
                          ['1','1','0','1','0'],
                          ['1','1','0','0','0'],
                          ['0','0','0','0','0']]));
console.log(numberIslands([[]]));
