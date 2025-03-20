type Vertex = {
    id: number
    pred?: Vertex
    trusting: number
    trusted: number
}

function findJudge(n: number, trust: [number, number][]): number {
    const Verts = new Array<Vertex>()
    for ( let i=1; i <= n; i++ ) {
        const vert: Vertex = { id: i, trusting:0, trusted: 0 }
        Verts.push(vert)
    }
    
    for ( let i = 0; i < trust.length; i++ ) {
        const currEdge = trust[i]
        const currVertex = Verts[currEdge[0]-1]
        const nextVertex = Verts[currEdge[1]-1]
        
        currVertex.trusting++
        nextVertex.trusted++
    }

    const townJudge = Verts.filter(v => v.trusting == 0 && v.trusted == n-1)
    if ( townJudge.length == 1 )
        return townJudge[0].id
    return -1
};

let people = 3
let city: [number, number][] = [[1,3],[2,3],[3,1]]
let judje = findJudge(people, city)

people = 3
city = [[1,3],[2,3]]
judje = findJudge(people, city)

people = 2
city = [[1,2]]
judje = findJudge(people, city)

people = 5
city = [[1,2], [2,3], [3, 4], [4, 3], [2, 5], [3, 5], [1, 5], [4, 5], [2, 4], [3, 1], [3, 2]]
judje = findJudge(people, city)
