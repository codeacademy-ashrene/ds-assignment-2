const insertion = require('./insertion')

describe('circularSort', () => {
  xit('should give sorted array', () => {
    expect(insertion([25, 57, 37, 48, 12, 92, 86, 33])).toEqual([ 33, 37, 48, 57, 86, 92, 12, 25 ])
  })
  it('should give sorted array', () => {
    expect(insertion([86, 57, 37, 48, 12, 92, 25, 33])).toEqual() //12 25 33 37 48 57 86 92
  })
  xit('should give sorted array', () => {
    expect(insertion([1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7])
  })
  xit('should give sorted array', () => {
    expect(insertion([9,8,7,6,5,4,3,2,1])).toEqual()
  })

})