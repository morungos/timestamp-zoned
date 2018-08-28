const value = require('../index');

describe('getTimestamp', () => {

  it('should return a time string', () => {
    const result = value.getTimestamp();
    expect(result).toEqual(expect.stringMatching(/^(\d{4,4})-(\d{2,2})-(\d{2,2})T(\d{2,2}):(\d{2,2}):(\d{2,2}).(\d{3,3})/));
  });

  it('should return a time string with a zone', () => {
    const result = value.getTimestamp({zone: true});
    expect(result).toEqual(expect.stringMatching(/^(\d{4,4})-(\d{2,2})-(\d{2,2})T(\d{2,2}):(\d{2,2}):(\d{2,2}).(\d{3,3})/));
    expect(result).toEqual(expect.stringMatching(/America/));
    expect(result).toEqual(expect.stringMatching(/Toronto/));
  });
});