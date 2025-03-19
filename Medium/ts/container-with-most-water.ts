function maxArea(height: number[]): number {  
    let localWidth = 0, localHeight = 0, localArea = 0, maxArea = 0;

    for ( let left = 0; left < height.length; left++ ){
        const minWidth = Math.ceil(maxArea / height[left])
        
        for ( let right = minWidth; right < height.length; right++ ) {
            localWidth = right - left
            localHeight = Math.min(height[left], height[right])
            localArea = localWidth * localHeight

            if ( localArea > maxArea )
                maxArea = localArea
        }
    }

    return maxArea
};

const heights = [1,8,6,2,5,4,8,3,7]
const max = maxArea(heights)

console.log(max)