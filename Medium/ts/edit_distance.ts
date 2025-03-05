function printMatrix(M: number[][]){
    for ( let i = 0; i < M.length; i++ ){
        console.log([...M[i]])
    }
}

function minDistance(word1: string, word2: string): number {
    const M: number[][] = []
    for ( let i = 0; i <= word1.length; i++ ){
        M.push([])
        for ( let j = 0; j <= word2.length; j++ ){
            M[i].push(0)
            M[0][j] = j
        }
        M[i][0] = i
    }
    M[0][0] = 0
    
    
    for ( let i = 1; i < word1.length; i++ ){
        for ( let j = 1; j < word2.length; j++ ){
            const localDistance = word1[i] == word2[j] ? 0 : 1
            M[i][j] = Math.min(M[i][j-1]+1, M[i-1][j]+1, M[i-1][j-1]+localDistance)
        }
    }
    
    return M[M.length-1][M[0].length-1]
};  

const word1 = "horse"
const word2 = "ros"

const min = minDistance(word1, word2)

console.log(min)