const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (exp) => ({
  toEq: (assertion) => {
    if (exp === assertion) {
      console.log('%c Your test have passed!!!', 'color: green')
      return true
    } else {
      console.log(`%c Failed: expected '${assertion}', but got '${exp}'`, 'color: red')
      return false
    }
  },

  toInclude: (assertion) => {
    if (exp.includes(assertion)) {
      console.log('%c Your test have passed!!!', 'color: green')
      return true
    } else {
      console.log(`%c Failed: expected '${exp}' to include '${assertion}'`, 'color: red')
      return false
    }
  },
  toBeTrue: () => {
    if (exp) {
      console.log('%c Pass', 'color: green, font-weight: bold')
      return true
    } else {
      console.log('%c Fail', 'color: red, font-weight: bold')
      return false
    }
  }
})