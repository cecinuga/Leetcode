class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


class BSTIterator {
    #done: boolean = false
    #iterator: IterableIterator<number>
    #prevNode: number = -Infinity
    #nextNode: number = -Infinity

    constructor(root: TreeNode | null) {
        this.#iterator = this.#next(root)
    }

    next(): number {
        if ( this.#nextNode === -Infinity ) {
            const next = this.#iterator.next()
            if ( next.done ) {
                this.#done = true
            }
            this.#prevNode = next.value
        } else {
            this.#prevNode = this.#nextNode
        }


        const next = this.#iterator.next()
        if ( next.done ) {
            this.#done = true
        }
        this.#nextNode = next.value

        return this.#prevNode
    }

    *#next(root: TreeNode | null): IterableIterator<number> {
        if ( root?.left ){
            const sxIterator = new BSTIterator(root?.left!)
            yield* sxIterator.#iterator
        }

        yield root?.val!

        if ( root?.right ){
            const dxIterator = new BSTIterator(root?.right!)
            yield* dxIterator.#iterator
        }
    }

    hasNext(): boolean {
        return !this.#done
    }
}

const dxsx = new TreeNode(9)
const dxdx = new TreeNode(20)
const dx = new TreeNode(15, dxsx, dxdx)
const sx = new TreeNode(3)
const root = new TreeNode(7, sx, dx)

const iterator = new BSTIterator(root)
while ( iterator.hasNext() ){
    console.log(iterator.next())
}
/**
Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */