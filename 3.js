/**
 * 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 示例： 
 输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {\} s 
 */

var lengthOfLongestSubstring = function (s) {
  let res = "",
    length = 0;
  let state = "",
    sLength = 0;
  for (let i = 0; i < s.length; i++) {
    let index = state.indexOf(s[i]);
    if (index === -1) {
      state += s[i];
      sLength++;
    } else if (sLength >= length) {
      res = state;
      length = sLength;
      state = state.substring(index + 1) + s[i];
      sLength = state.length;
    } else {
      state = state.substring(index + 1) + s[i];
      sLength = state.length;
    }
  }
  if (sLength > length) {
    res = state;
    length = sLength;
  }
  return length;
};

lengthOfLongestSubstring("ggububgvfk");
