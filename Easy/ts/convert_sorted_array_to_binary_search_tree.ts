class TreeNodeV2 {
    val: number
    left: TreeNodeV2 | null
    right: TreeNodeV2 | null

    constructor(val?: number, left?: TreeNodeV2 | null, right?: TreeNodeV2 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 }

const sxSon = (i: number) => i*2+1
const dxSon = (i: number) => i*2+2

function sortedArrayToBST(arr: number[]): TreeNodeV2 {
    const root = new TreeNodeV2(arr[Math.floor(arr.length/2)])
    
    function recMakeAbr(arr: number[], node: TreeNodeV2, i: number=0, stop:number=-1) {
        if (stop == -1)
            stop = Math.floor(arr.length / 2);
        if( arr.length == 0 ) return
        
        const middle = Math.floor(arr.length/2)
        const sx = arr.slice(0, middle)
        const dx = arr.slice(middle+1)

        const middleSx = Math.floor(sx.length/2)
        const middleDx = Math.floor(dx.length/2)

        if ( sx.length > 0 ) {
            node.left = new TreeNodeV2(sx[middleSx]);
            recMakeAbr(sx, node.left, sxSon(i), stop);
        }


        if ( dx.length > 0) {
            node.right = new TreeNodeV2(dx[middleDx]);
            recMakeAbr(dx, node.right, dxSon(i), stop);
        }
    }
    recMakeAbr(arr, root)
    return root
}