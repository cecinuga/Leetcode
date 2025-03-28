function longestNiceSubstring(s: string): string {
    if (s.length < 2) return ""
      const charSet = new Set(s.split(''))
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i]
      if (charSet.has(c.toLowerCase()) && charSet.has(c.toUpperCase())) 
        continue
      
      const left  = longestNiceSubstring(s.substring(0, i))
      const right = longestNiceSubstring(s.substring(i + 1))
      
      return left.length >= right.length ? left : right
    }
  
    return s
  }
  