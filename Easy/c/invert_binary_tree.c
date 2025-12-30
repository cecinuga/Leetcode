#include <stdio.h> 
#include <stdlib.h>

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

struct TreeNode* buildTestTree() {
    struct TreeNode* n4 = createNode(4);
    struct TreeNode* n2 = createNode(2);
    struct TreeNode* n7 = createNode(7);
    struct TreeNode* n1 = createNode(1);
    struct TreeNode* n3 = createNode(3);
    struct TreeNode* n6 = createNode(6);
    struct TreeNode* n9 = createNode(9);

    n4->left = n2;
    n4->right = n7;

    n2->left = n1;
    n2->right = n3;

    n7->left = n6;
    n7->right = n9;

    return n4; // root
}


void visitTree(TreeNode *root){
    if(root==NULL) return;

    visitTree(root->left);
    printf("%d ", root->val);
    visitTree(root->right);
}

struct TreeNode* invertTree(struct TreeNode* root) {
    if(root == NULL) return NULL;
    
    struct TreeNode *tmpTree = root->left;
    root->left = root->right;
    root->right = tmpTree;

    invertTree(root->left);
    invertTree(root->right);
    
    return root;
}

int main(void){
    TreeNode *root = buildTestTree();

    visitTree(root);
    printf("\n");

    invertTree(root);
    
    visitTree(root);
    printf("\n");
    
    return 0;
}