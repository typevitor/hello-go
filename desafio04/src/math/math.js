class Math {
  sum(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  times(a, b) {
    return a * b;
  }

  div(a, b) {
    return a / b;
  }

  mod(a, b) {
    return a % b;
  }

  inc(a) {
    return ++a;
  }
  
  dec(a) {
    return --a;
  }
}

module.exports = Math;