/**
 * Created by YSingh on 14/01/17.
 */

var arr = [1, 2, 3, 4, 5];

arr.reduce((prev, current) =>  { return prev + current }, 0);


function balancedParentheses(str) {
    return !str.split('').reduce((prev, current) => {
      if(prev < 0) {
          return prev;
      }
      if(current == '(')  {
          prev++;
      }
      else if(current == ')') {
          prev--;
      }

      return prev;
    }, 0);
}

balancedParentheses('((()))'); // true
balancedParentheses('((())'); // false
balancedParentheses('()()()'); //true
balancedParentheses(')()('); //false