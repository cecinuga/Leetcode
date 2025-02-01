function longestValidParenthesesSubstring(s: string): string {
    const stack: number[] = [-1];
    let maxLen = 0;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else { // s[i] === ')'
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                const currentLen = i - stack[stack.length - 1];
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    startIndex = stack[stack.length - 1] + 1;
                }
            }
        }
    }
    return s.substring(startIndex, startIndex + maxLen);
}