const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node'
    }, {
      id: '2',
      name: 'Jen',
      room: 'Node'
    }, {
      id: '3',
      name: 'Julie',
      room: 'React'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Maciej',
      room: 'Lannisters'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node'
    });
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var user = users.removeUser('4');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.getUser('1');
    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node'
    });
  });

  it('should not find a user', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });

  it('should return names for Node course', () => {
    var res = users.getUserList('Node');
    expect(res).toEqual(['Mike', 'Jen']);
  });

  it('should return names for React course', () => {
    var res = users.getUserList('React');
    expect(res).toEqual(['Julie']);
  });

});
