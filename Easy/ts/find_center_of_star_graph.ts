function findCenter(edges: number[][]): number {
    const fq: { [key: string]: number } = {}
    
    for ( let edge of edges ){
        const [ v, w ] = edge
        fq[v] ??= 0
        fq[w] ??= 0

        fq[v]++
        fq[w]++

        if ( fq[v] == edges.length )
            return v
        if ( fq[w] == edges.length )
            return w
    }
    return 0
};

const graph = [[1,2],[5,1],[1,3],[1,4]]
const center = findCenter(graph)

console.log(center)