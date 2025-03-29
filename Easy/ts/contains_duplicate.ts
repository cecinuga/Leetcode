function containsDuplicate(nums: number[]): boolean {
  const fq:Map<number, boolean> = new Map()
  for ( const num of nums ){
    if ( !fq.has(num) ) fq.set(num, false)
    else return true
  }
  return false
};