module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let i = arguments[1] || 1;
        let max = arguments[2] || 0;
        let temp = 0;
        arr.map(el => {
          if(Array.isArray(el)){
            temp = this.calculateDepth(el, ++i, max)
            max = Math.max(temp, max)
            i--;
          }
          return i                   
        })
        max = Math.max(i, max)
        return max
    }
};