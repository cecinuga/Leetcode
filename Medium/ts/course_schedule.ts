interface VertexDFS { 
    id: number
    color: "white" | "gray" | "black"
    pred?: VertexDFS
    start: number, 
    end: number 
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let time = 0
    const DFT = new Array<VertexDFS>()
    const Graph: number[][] = new Array<number[]>(numCourses)
    const sortedDAG: [number, number[]][] = []

    function DFSVisit(G: number[][], actV: VertexDFS) {
        time += 1
        actV.color = "gray"
        actV.start = time
        
        G[actV.id] ??= []
        for ( let i = 0; i < G[actV.id].length; i++ ){
            const adjV = DFT[G[actV.id][i]]
            if ( adjV.color == "white" ){
                adjV.pred = actV
                DFSVisit(G, adjV)
            }
        }
        time += 1
        actV.color = "black"
        actV.end = time
        sortedDAG.push([actV.id, G[actV.id]])
    }
    
    for ( let i=0; i < numCourses; i++ ) {
        const vert: VertexDFS = { id: i, color: "white", start: -Infinity, end: Infinity }
        DFT.push(vert)
    }

    for ( let edge of prerequisites ){
        const [ act, pre ] = edge
        Graph[act] ??= []
        Graph[pre] ??= []
        Graph[act].push(pre)
    }

    for ( let i = 0; i < numCourses; i++ ){
        if ( DFT[i].color == "white" )
            DFSVisit(Graph, DFT[i])
    }

    for ( let v of sortedDAG ) {
        for ( let adj of v[1] ) {
            if ( DFT[v[0]].end <= DFT[adj].end )
                return false
        }
    }

    return true
};
