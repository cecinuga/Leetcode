#include <stdio.h> 
#include <stdlib.h>

#define QUEUE_PORTION_LENGTH 1000

typedef struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

TreeNode *createNode(int val) {
    TreeNode* node = malloc(sizeof(TreeNode));
    node->val = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

TreeNode *buildTestTree() {
    TreeNode* n1 = createNode(1);
    TreeNode* n2 = createNode(2);
    TreeNode* n3 = createNode(3);
    TreeNode* n4 = createNode(4);
    TreeNode* n5 = createNode(5);
    TreeNode* n6 = createNode(6);

    n1->left = n2;
    n1->right = n3;

    n2->left = n4;
    n2->right = n5;

    n3->right = n6;

    return n1; // root
}

int left(int i){
    return (i*2)+1;
}

int right(int i){
    return (i*2)+2;
}
  
int countNodes(TreeNode* root) {
    if (root == NULL) return 0;

    int queueIndex = 0;
    int queueSize = 1;
    int queuePortionCount = 1;

    TreeNode **queue = calloc(sizeof(TreeNode), QUEUE_PORTION_LENGTH);
    queue[0] = root;

    while(queue[queueIndex]){
        TreeNode *curr = queue[queueIndex];

        if(curr->left){
            queue[left(queueIndex)] = queue[queueIndex]->left;
            queueSize++;
        }

        if(curr->right){
            queue[right(queueIndex)] = queue[queueIndex]->right;
            queueSize++;
        }

        if(queueSize >= QUEUE_PORTION_LENGTH*queuePortionCount) {
            queue = realloc(queue, sizeof(TreeNode)*QUEUE_PORTION_LENGTH*(++queuePortionCount));
        }
        
        queueIndex++;
    }

    free(queue);
    return queueSize;
}

int countNodesRec(TreeNode *root){
    if(root == NULL) return 0;
    return 1 + countNodesRec(root->left) + countNodesRec(root->right);
}

int main(void){
    TreeNode *root = buildTestTree();

    printf("In the node at %p are stored %d nodes\n", root, countNodesRec(root));
    printf("In the node at %p are stored %d nodes\n", root, countNodes(root));

    return 0;
}