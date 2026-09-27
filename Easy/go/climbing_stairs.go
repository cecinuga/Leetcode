package main;

import "fmt";

func climbStairs(n int) int {
	if n == 1 || n == 2 { return n }

	i1 := 0
	i2 := 1
	tot := 0
	for i := 0; i < n; i++ {
		tot = i1 + i2

		i1 = i2
		i2 = tot
	}

	return tot
}

func main(){
	i1 := 1; i2 := 2; i3 := 3; i4 := 4; i5 := 45



	fmt.Printf("input=%d, output=%d\n", i1, climbStairs(i1))
	fmt.Printf("input=%d, output=%d\n", i2, climbStairs(i2))
	fmt.Printf("input=%d, output=%d\n", i3, climbStairs(i3))
	fmt.Printf("input=%d, output=%d\n", i4, climbStairs(i4))
	fmt.Printf("input=%d, output=%d\n", i5, climbStairs(i5))
}