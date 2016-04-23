
function User(){
  var obj = JSON.parse(document.cookie.split('=')[1]);
  for (prop in obj){
    this[prop] = obj[prop];
  };
  User.prototype.toggleValue = function(skill, subSkill){
    var curSkill = this[skill];
    curSkill[subSkill] = curSkill[subSkill] == 0 ? 1 : 0;
    document.cookie = 'user='+JSON.stringify(this);
  };
  User.prototype.getAverage = function(skill){
    var sum = 0, count = 0;
    for (prop in skill){
      if (prop != 'title'){
        sum += skill[prop];
        count++;
      };
    };
    return sum / count;
  };
};

function setCookie(){
  if (!document.cookie) {
  var user = {
    basicDataTypes: {
      title: "Basic Data Types",
      numbers: 0,
      strings: 0,
      booleans: 0
    },
    advancedDataTypes: {
      title: "Advanced Data Types",
      arrays: 0,
      objects: 0,
      undefinedAndNull: 0
    },
    operators: {
      title: "Operators",
      arithmeticOperators: 0,
      logicalOperators: 0,
      otherOperators: 0
    }
  };
  var cookieStr = JSON.stringify(user);
  document.cookie = 'user='+cookieStr;
  };
};
setCookie();
var user = new User();
