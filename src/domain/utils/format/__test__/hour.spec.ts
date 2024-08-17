import {hourFormatted} from '../hour';

describe('Unit test', () => {
  it('should return time in hour format ', () => {
    const hourFormat = hourFormatted({hour: 240});

    expect(hourFormat).toBe('4');
  });
});
