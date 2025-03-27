class DSU {
    parent: number[]
    size: number[]

    constructor(n: number) {
        this.parent = new Array(n).fill(0).map((_, i) => i)
        this.size = new Array(n).fill(1)
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(x: number, y: number): void {
        let rx = this.find(x),
            ry = this.find(y)
        if (rx === ry) return
        if (this.size[rx] < this.size[ry]) {
            this.parent[rx] = ry
            this.size[ry] += this.size[rx]
        } else {
            this.parent[ry] = rx
            this.size[rx] += this.size[ry]
        }
    }
}

function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    const n = vals.length
    const graph: number[][] = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }

    const valToNodes = new Map<number, number[]>()
    for (let i = 0; i < n; i++) {
        if (!valToNodes.has(vals[i])) valToNodes.set(vals[i], [])
        valToNodes.get(vals[i])!.push(i)
    }
    const uniqueVals = Array.from(valToNodes.keys()).sort((a, b) => a - b)
    const dsu = new DSU(n)
    const processed = new Array(n).fill(false)
    let result = 0

    for (const val of uniqueVals) {
        const nodes = valToNodes.get(val)!
        for (const node of nodes) {
            processed[node] = true
            for (const nei of graph[node]) {
                if (processed[nei]) {
                    dsu.union(node, nei)
                }
            }
        }
        const groupCount = new Map<number, number>()
        for (const node of nodes) {
            const root = dsu.find(node)
            groupCount.set(root, (groupCount.get(root) || 0) + 1)
        }
        for (const cnt of groupCount.values()) {
            result += (cnt * (cnt + 1)) / 2
        }
    }
    return result
}

const values = [3, 4, 1, 5, 2, 3, 5, 2, 1, 2, 5]
const edges = [[0, 1], [0, 2], [1, 3], [2, 4], [4, 5], [5, 6], [5, 7], [7, 8], [8, 9], [9, 10]]
const count = numberOfGoodPaths(values, edges)
console.log(count)