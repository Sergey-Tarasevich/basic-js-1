module.exports = function createDreamTeam(members) {
  let str = '';
  if (!(Array.isArray(members))) return false;
  for (let i=0; i < members.length; i++) {
    if (typeof(members[i]) != 'string');
    else {
      let j = 0;
      while (members[i][j] === ' ') j++;
      str += members[i][j];
    }
  }
  str = str.toUpperCase();
  let arr = str.split('');
  arr = arr.sort();
  str = arr.join('');
  return str;
};