const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    var from = 'aaa';
    var text = 'bbb';

    var result = generateMessage(from, text);

    expect(result).toInclude({from, text});
    expect(result.createdAt).toBeA('number');
  });

});

describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {
    var from = 'aaa';
    var latitude = 31;
    var longitude = -134.45;

    var result = generateLocationMessage(from, latitude, longitude);

    expect(result).toInclude({from});
    expect(result.url).toBe('https://www.google.com/maps?q=31,-134.45');
    expect(result.createdAt).toBeA('number');
  });

});
