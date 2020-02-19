const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || isNaN(position - 1) || position > this.getLength()) {
      this.chain = [];
      throw new Error();
    }
    let ch = this.chain;
    this.chain = ch.filter((item, index) => {
      if (position - 1 !== index) {
        return true;
      } else {
        return false;
      }
    });
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
