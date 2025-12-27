package main

import "fmt"

func convert(s string, numRows int) string {
	var out = make([]rune, len(s))
	var skip = (numRows * 2) - 1

	for i, c := range s {
		out[i] = c
		i += skip

		if i >= len(s) {
			i = len(s) - skip
		}
	}

	return string(out)
}

func main() {
	out := convert("PAHNAPLSIIGYIR", 3)
	fmt.Println(out);
}