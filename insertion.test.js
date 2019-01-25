const insertion = require('./insertion');

describe('circularSort', () => {
  it('should give sorted array for random combination', () => {
    expect(insertion([25, 57, 37, 48, 12, 92, 86, 33])).toEqual([33, 37, 48, 57, 86, 92, 12, 25]);
  });
  it('should give sorted array for random combination', () => {
    expect(insertion([86, 57, 37, 48, 12, 92, 25, 33])).toEqual([86, 92, 12, 25, 33, 37, 48, 57]);
  });
  it('should give sorted array for already sorted array', () => {
    expect(insertion([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('should give sorted array for reverse sorted aray', () => {
    expect(insertion([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([9, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('should give sorted array for different length', () => {
    expect(insertion([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
  it('should give sorted array for single element', () => {
    expect(insertion([1])).toEqual([1]);
  });
  it('should give sorted array when one element is out of order in upper half', () => {
    expect(insertion([1, 2, 3, 4, 5, 6, 8, 7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should give sorted array when one element is out of order in lower half', () => {
    expect(insertion([1, 3, 2, 4, 5, 6, 8, 7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should give sorted array when more than half are sorted in ascending and other half in descending', () => {
    expect(insertion([23, 45, 67, 89, 76, 54, 32])).toEqual([45, 54, 67, 76, 89, 23, 32]);
  });
  it('should give sorted array when half are sorted in ascending and other half in descending', () => {
    expect(insertion([23, 45, 76, 54, 32, 9])).toEqual([32, 45, 54, 76, 9, 23]);
  });
  it('should give sorted array when less than half are sorted in ascending and other half in descending', () => {
    expect(insertion([23, 76, 60, 54, 32, 9, 1])).toEqual([54, 60, 76, 1, 9, 23, 32]);
  });
  it('should give sorted array when half are sorted in ascending and other half in ascending and all together in circular sort', () => {
    expect(insertion([5, 6, 7, 8, 1, 2, 3, 4])).toEqual([5, 6, 7, 8, 1, 2, 3, 4]);
  });
  it('should give sorted array when more than half are sorted in ascending and other half in ascending and all together in circular sort', () => {
    expect(insertion([5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5])).toEqual([5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5]);
  });
});
