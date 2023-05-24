import itemCounter from './itemsCounter.js';

describe('Items Counter', () => {
  test('Tests when the array has some value', () => {
    const items = [{ item: 1 }, { item: 2 }, { item: 3 }];
    expect(itemCounter(items)).toBe(3);
  });
  test('Test when the array is empty', () => {
    const items = [];
    expect(itemCounter(items)).toBe(0);
  });
  test('Test when the array has one value', () => {
    const items = [{}];
    expect(itemCounter(items)).toBe(1);
  });
});
