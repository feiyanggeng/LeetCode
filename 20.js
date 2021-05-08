/**
 * 有效括号
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2) return false;
    let stack = [];
    let map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else {
            if (map[stack[stack.length - 1]] === s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};