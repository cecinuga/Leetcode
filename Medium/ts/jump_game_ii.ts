function jump(nums: number[]): number {
    if ( nums.length === 1 ) return 0

    let minJump = 0
    let jumps: [number, number][] = []
    let fuelReserve: [number, number] = [0, 0]
    let currentFuel = [nums[0], 0]
    for ( let i = 1; i < nums.length; i++ ){
        currentFuel[0]--
        const ipoNewFuel = nums[i] > currentFuel[0] ? nums[i] - currentFuel[0]: 0
        if ( ipoNewFuel > fuelReserve[0] ) fuelReserve = [ipoNewFuel, i]
        
        if ( currentFuel[0] >= ( (nums.length-1)-i ) ) {
            minJump++
            break
        }
        if ( currentFuel[0] === 0 ) {
            minJump++
            jumps.push([nums[currentFuel[1]], currentFuel[1]])
            currentFuel = fuelReserve
            fuelReserve = [0, 0]
        }
    }

    return minJump
};

const testCase = [5,9,3,2,1,0,2,3,3,1,0,0]
const res = jump(testCase)