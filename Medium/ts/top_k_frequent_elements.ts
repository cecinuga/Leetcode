function heapify(nums: [number, number][], i: number) {
    const n = nums.length;
    while (true) {
        let largest = i;
        const leftIndex = (2 * i) + 1;
        const rightIndex = (2 * i) + 2;

        if (leftIndex < n && nums[leftIndex][1] > nums[largest][1]) {
            largest = leftIndex;
        }
        if (rightIndex < n && nums[rightIndex][1] > nums[largest][1]) {
            largest = rightIndex;
        }
        
        if (largest !== i) {
            const temp = nums[i];
            nums[i] = nums[largest];
            nums[largest] = temp;
            i = largest;
        } else {
            break;
        }
    }
}

function topKFrequent(nums: number[], k: number): number[] {
    if ( nums.length == 1 ) return nums

    const fq: Object = {}
    const res: number[] = []
    const maxHeap: [number, number][] = []

    for ( let i = 0; i < nums.length; i++ ){
        if ( fq[nums[i]] === undefined ) fq[nums[i]] = 0
        fq[nums[i]]++
    }

    for ( const key of Object.keys(fq) ){
        const num = Number(key)
        const fre = Number(fq[key])
        
        maxHeap.push([num, fre])
    }
    
    for ( let i = Math.floor(maxHeap.length/2)-1; i >= 0; i-- ){
        heapify(maxHeap, i)
    }

    for ( let i = 0; i < k; i++ ){
        res.push(maxHeap[0][0])
        maxHeap[0] = maxHeap[maxHeap.length - 1];
        maxHeap.pop();

        heapify(maxHeap, 0);
    }

    return res
};


const nums = [6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0]
const k = 6

const res = topKFrequent(nums, k)