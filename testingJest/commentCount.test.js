const fetchMock = require('jest-fetch-mock');

jest.setMock('node-fetch', fetchMock);

const fetch = require('node-fetch');
const commentCounter = require('./commentCount.js');

jest.mock('node-fetch');

describe('commentCounter', () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test('Successful fetch and valid JSON data', async () => {
    fetch.mockResolvedValue({
      status: 200,
      json: async () => [
        {
          item: 'item1',
          name: 'hola',
          comment: 'me siento bien',
        },
        {
          item: 'item1',
          name: 'hello',
          comment: 'I feel great',
        },
      ],
    });

    const result = await commentCounter(123);
    expect(result).toBe(2);
  });

  test('Unsuccessful fetch (status code 400)', async () => {
    fetch.mockResolvedValue({
      status: 400,
    });

    const result = await commentCounter(456);
    expect(result).toBe(0);
  });

  test('Empty JSON data array', async () => {
    fetch.mockResolvedValue({
      status: 200,
      json: async () => [],
    });

    const result = await commentCounter(789);
    expect(result).toBe(0);
  });
});
