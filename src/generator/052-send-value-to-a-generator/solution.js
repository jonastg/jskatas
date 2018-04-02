// 52: Generator - Send value to a generator (solution)
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a value to a generator', () => {

  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next().value];
    assert.deepEqual(convertedToAnArray, iteratedOver);
  });

  it('pass a value to the iterator', function() {
    function* generatorFunction(param) {
      yield 1;
      yield param;
    }
    var iterator = generatorFunction(2);
    var iteratedOver = [iterator.next().value, iterator.next().value];
    assert.deepEqual([1, 2], iteratedOver);
  });

  it('a value passed to the 1st `next()` call is ignored', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    let iterator = generatorFunction();
    const values = [
      iterator.next('irrelevant').value,
      iterator.next().value
    ];
    assert.deepEqual(values, [1, 2]);
  });

});
