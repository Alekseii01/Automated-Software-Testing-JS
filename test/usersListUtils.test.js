import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken, } from '../src/usersListUtils.js';

const sampleUsers = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 20, email: 'charlie@example.com' },
];

describe('filterUsersByAge', () => {
  it('should return users within the age range', () => {
    const result = filterUsersByAge(sampleUsers, 21, 30);
    expect(result).to.deep.equal([
      { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
      { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    ]);
  });

  it('should return an empty array if no users match', () => {
    const result = filterUsersByAge(sampleUsers, 40, 50);
    expect(result).to.deep.equal([]);
  });

  it('should throw an error if users is not an array', () => {
    expect(() => filterUsersByAge(null, 18, 25)).to.throw('Users must be an array');
  });
});

describe('sortUsersByName', () => {
  it('should sort users alphabetically by name', () => {
    const result = sortUsersByName(sampleUsers);
    expect(result.map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
  });

  it('should not modify the original array', () => {
    const original = [...sampleUsers];
    sortUsersByName(sampleUsers);
    expect(sampleUsers).to.deep.equal(original);
  });

  it('should throw an error if users is not an array', () => {
    expect(() => sortUsersByName(undefined)).to.throw('Users must be an array');
  });
});

describe('findUserById', () => {
  it('should return the user with the given id', () => {
    const result = findUserById(sampleUsers, 2);
    expect(result.name).to.equal('Bob');
  });

  it('should return null if no user is found', () => {
    const result = findUserById(sampleUsers, 99);
    expect(result).to.be.null;
  });

  it('should throw an error if users is not an array', () => {
    expect(() => findUserById({}, 1)).to.throw('Users must be an array');
  });
});

describe('isEmailTaken', () => {
  it('should return true if email exists', () => {
    expect(isEmailTaken(sampleUsers, 'bob@example.com')).to.be.true;
  });

  it('should return false if email does not exist', () => {
    expect(isEmailTaken(sampleUsers, 'nobody@example.com')).to.be.false;
  });

  it('should throw an error if users is not an array', () => {
    expect(() => isEmailTaken(null, 'test@example.com')).to.throw('Users must be an array');
  });
});
