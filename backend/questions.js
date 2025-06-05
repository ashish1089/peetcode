const QUESTIONS = [
  {
    problemId: "1",
    title: "Two Sum",
    acceptance: "53.5%",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and youmay not use thesame element twice.You can return the answer in any order.",
    examples: [
      {
        id: 1,
        Input: "nums = [2,7,11,15], target = 9",
        Output: "[0,1]",
        Explanation: "Because nums[0] + nums[1] == 9, we return [0,1]",
      },
      {
        id: 2,
        Input: "nums = [3,2,4], target = 6",
        Output: "[1,2]",
        Explanation: "Because nums[1] + nums[2] == 6, we return [1,2]",
      },
      {
        id: 3,
        Input: "nums = [3,3], target = 6",
        Output: "[0,1]",
        Explanation: ""
      },
    ],
    constraints: [
      "<code>2 <= nums.length <= 104</code>",
      "<code>-109 <= nums[i] <= 109</code>",
      "<code>-109 <= target <= 109</code>",
      "Only one valid answer exists."
    ]
  },
  {
    problemId: "2",
    title: "Add Two Numbers",
    acceptance: "43.8%",
    difficulty: "Medium",
    description: "You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. <br>You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        id: 1,
        img: "https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg",
        Input: "l1 = [2,4,3], l2 = [5,6,4]",
        Output: "[7,0,8]",
        Explanation: "342 + 465 = 807.",
      },
      {
        id: 2,
        Input: "l1 = [0], l2 = [0]",
        Output: "[0]",
      },
      {
        id: 3,
        Input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        Output: "[8,9,9,9,0,0,0,1]",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range <code>[1, 100]</code>.",
      "<code>0 <= Node.val <= 9</code>",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ]
  },
  {
    problemId: "3",
    title: "Longest Substring Without Repeating Characters",
    acceptance: "35.3%",
    difficulty: "Medium",
    description: "Given a string <code>s</code>, find the length of the longest <em>substring</em> without repeating characters.",
    examples: [
      {
        id: 1,
        Input: 's = "abcabcbb"',
        Output: '3',
        Explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        id: 2,
        Input: 's = "bbbbb"',
        Output: '1',
        Explanation: 'The answer is "b", with the length of 1.'
      },
      {
        id: 3,
        Input: 's = "pwwkew"',
        Output: '3',
        Explanation: 'The answer is "wke", with the length of 3. \nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.'
      },
    ],
    constraints: [
      "<code>0 <= s.length <= 5 * 10^4</code>",
      "<code>s</code> consists of English letters, digits, symbols and spaces."
    ]
  },
  {
    problemId: "4",
    title: "Median of Two Sorted Arrays",
    acceptance: "41.1%",
    difficulty: "Hard",
    description: "Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return the median of the two sorted arrays.The overall run time complexity should be <code>O(log (m+n))</code>.",
    examples: [
      {
        id: 1,
        Input: "nums1 = [1,3], nums2 = [2]",
        Output: "2.00000",
        Explanation: "merged array = [1,2,3] and median is 2.",

      },
      {
        id: 2,
        Input: "nums1 = [1,2], nums2 = [3,4]",
        Output: "2.50000",
        Explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: [
      "<code>nums1.length == m</code>",
      "<code>nums2.length == n</code>",
      "<code>0 <= m <= 1000</code>",
      "<code>0 <= n <= 1000</code>",
      "<code>1 <= m + n <= 2000</code>",
      "<code>-106 <= nums1[i], nums2[i] <= 106</code>",
    ]
  },
  {
    problemId: "5",
    title: "Longest Palindromic Substring",
    acceptance: "34.3%",
    difficulty: "Medium",
    description: "Given a string <code>s</code>, return the longest <em>palindromic substring</em> in <code>s</code>.",
    examples: [
      {
        id: 1,
        Input: 's = "babad"',
        Output: '"bab"',
        Explanation: '"aba" is also a valid answer.',
      },
      {
        id: 2,
        Input: ' s = "cbbd"',
        Output: ' "bb"',
      },
    ],
    constraints: [
      "<code>1 <= s.length <= 1000</code>",
      "<code>s</code> consist of only digits and English letters."
    ]
  },
  {
    problemId: "6",
    title: "Zigzag Conversion",
    acceptance: "49.0%",
    difficulty: "Medium",
    description: 'The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility) <code>\n\tP   A   H   N \n\tA P L S I I G \n\tY   I   R\n</code> And then read  by line: <code>"PAHNAPLSIIGYIR"\n</code> Write the code that will take a string and make this conversion given a number of rows: \n<code>string convert(string s, int numRows);</code>',
    examples: [
      {
        id: 1,
        Input: 's = "PAYPALISHIRING", numRows = 3',
        Output: '"PAHNAPLSIIGYIR"',
      },
      {
        id: 2,
        Input: 's = "PAYPALISHIRING", numRows = 4',
        Output: '"PINALSIGYAHRPI"',
        Explanation:
          "  \nP     I    N \nA   L S  I G \nY A   H R \nP     I"
      },
      {
        id: 3,
        Input: 's = "A", numRows = 1',
        Output: "A"
      },
    ],
    constraints: [
      "<code>1 <= s.length <= 1000</code>",
      "<code>s</code> consists of English letters (lower-case and upper-case), ',' and '.'.",
      "<code>1 <= numRows <= 1000</code>"
    ]
  },
  {
    problemId: "7",
    title: "Reverse Integer",
    acceptance: "29.0%",
    difficulty: "Medium",
    description: "Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-231, 231 - 1]</code>, then return 0. <br /><strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong>",
    examples: [
      {
        id: 1,
        Input: " x = 123",
        Output: "321",
      },
      {
        id: 2,
        Input: "x = -123",
        Output: "-321",
      },
      {
        id: 3,
        Input: "x = 120",
        Output: "21",

      },
    ],
    constraints: ['<code>-231 <= x <= 231 - 1</code>']
  },
  {
    problemId: "8",
    title: "String to Integer (atoi)",
    acceptance: "17.8%",
    difficulty: "Medium",
    description: 'Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.The algorithm for <code>myAtoi(string s)</code> is as follows:Whitespace: Ignore any leading whitespace <code>(" ")</code>.Signedness: Determine the sign by checking if the next character is <code>' - '</code> or <code>' + '</code>, assuming positivity if neither present.Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.Rounding: If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then round the integer to remain in the range. Specifically, integers less than -2<sup>31</sup> should be rounded to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup> - 1</code> should be rounded to <code>2<sup>31</sup> - 1</code>.Return the integer as the final result.',
    examples: [
      {
        id: 1,
        Input: 's = "42"',
        Output: "42",
        Explanation: 'The underlined characters are what is read in and the caret is the current reader position.Step 1: "42" (no characters read because there is no leading whitespace)^Step 2: "42"(no characters read because there is neither a ' - ' nor ' + ') ^ Step 3: "42"("42" is read in) ^ '
      },
    ],
    constraints: [
      "<code>0 <= s.length <= 200</code>",
      "<code>s</code> consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."
    ]
  },
  {
    problemId: "9",
    title: "Palindrome Number",
    acceptance: "57.3%",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    examples: [
      {
        id: 1,
        Input: "nums = [2,7,11,15], target = 9",
        Output: "[0,1]",
        Explanation: "Because nums[0] + nums[1] == 9, we return [0,1]",
      },
      {
        id: 2,
        Input: "nums = [3,2,4], target = 6",
        Output: "[1,2]",
        Explanation: "Because nums[1] + nums[2] == 6, we return [1,2]",
      },
      {
        id: 3,
        Input: "nums = [3,3], target = 6",
        Output: "[0,1]",
        Explanation: ""
      },
    ],
    constraints: [
      "<code>0 <= s.length <= 200</code>",
      "<code>s</code> consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."
    ]
  },
  {
    problemId: "10",
    title: "Regular Expression Matching",
    acceptance: "28.3%",
    difficulty: "Hard",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    examples: [
      {
        id: 1,
        Input: "nums = [2,7,11,15], target = 9",
        Output: "[0,1]",
        Explanation: "Because nums[0] + nums[1] == 9, we return [0,1]",
      },
      {
        id: 2,
        Input: "nums = [3,2,4], target = 6",
        Output: "[1,2]",
        Explanation: "Because nums[1] + nums[2] == 6, we return [1,2]",
      },
      {
        id: 3,
        Input: "nums = [3,3], target = 6",
        Output: "[0,1]",
        Explanation: ""
      },
    ],
    constraints: [
      "<code>0 <= s.length <= 200</code>",
      "<code>s</code> consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."
    ]
  },
];


export default QUESTIONS;


