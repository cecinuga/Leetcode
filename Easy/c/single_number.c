#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int singleNumber(int* nums, int numsSize) {
    int res = nums[0];

    for(int i = 1; i < numsSize; i++){
        res = res ^ nums[i];
    }

    return res;
}

int main(void){
    int nums[] = {2, 2, 1};
    int numsSize = 1;

    int single = singleNumber(nums, numsSize);

    printf("%d\n", single);

    return 0;
}