function maxRepeating(sequence: string, word: string): number {
    let origWord = word
    let k = 0, oldK = -1

    while (oldK !== k){
        oldK = k
        const M: number[][] = Array.from({length: word.length+1}, (_,i)=>new Array(sequence.length+1).fill(0))

        for ( let i = 0; i < word.length; i++ ){
            for ( let j = 0; j < sequence.length; j++ ){
                if ( word[i] === sequence[j] ){
                    M[i+1][j+1] = M[i][j]+1 
                    if ( M[i+1][j+1] === word.length ) {
                        k++
                        word = word.concat(origWord)
                        break
                    }
                }
            }
            if ( oldK !== k ) break
        }
    }

    return k
};

//const seq = "eeaaabck"
//const w = "abc"

const seq = "ababab"
const w = "ab"
const k = maxRepeating(seq, w)