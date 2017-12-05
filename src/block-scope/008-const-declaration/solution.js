// 8: block scope - const (solution)
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it('number', () => {
      const constNum = 0;
      //constNum = 1; => it throws TypeError: Assignment to constant variable.
      assert.equal(constNum, 0);
    });

    it('string', () => {
      const constString = 'I am a const';
      //constString = 'Cant change you?'; => it throws TypeError: Assignment to constant variable.
      assert.equal(constString, 'I am a const');
    });

  });

  const notChangeable = 23;

  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });

  describe('complex types are NOT fully read-only', () => {

    it('array', () => {
      const arr = [42, 23];
      arr[1] = 0;
      assert.equal(arr[0], 42);
    });

    it('object', () => {
      const obj = {x: 1};
      obj.x = 3;
      assert.equal(obj.x, 3);
    });

  });

});
