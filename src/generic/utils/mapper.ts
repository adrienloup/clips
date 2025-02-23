export function mapper(value: number, ranges: number[], results: number[]) {
  let min: number = 0;
  for (let i: number = 0; i < ranges.length; i++) {
    const max: number = ranges[i];
    if (value >= min && value <= max) {
      return results[i];
    }
    min = max + 1;
  }
  if (value > ranges[ranges.length - 1]) {
    return results[results.length - 1];
  }
  return results[0];
}
