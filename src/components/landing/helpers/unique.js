function unique(n) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 105);
    nums.push(num);
  }
  return Array.from(new Set(nums));
}

export { unique };
