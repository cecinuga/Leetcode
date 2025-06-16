class _Node {
    val: number
    children: _Node[]
    
    constructor(v: number) {
        this.val = v;
        this.children = [];
    }
}



function levelOrder(root: _Node | null): number[][] {
    if ( root === null ) return []
    
	const res: number[][] = []
    const queue: [_Node, number][] = [[root!, 0]]

    while ( queue.length > 0 ){
        const [actNode, actLevel] = queue.shift()!

        for ( const son of actNode.children ){
            queue.push([son, actLevel+1])
        }

        if ( res[actLevel] === undefined )
            res[actLevel] = new Array()

        res[actLevel].push(actNode.val)
    }

    return res
};
