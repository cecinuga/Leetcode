/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LENGTH_PATH 300

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int countLeaves(struct TreeNode *root) {
    if (!root) return 0;
    if (!root->left && !root->right) return 1;
    return countLeaves(root->left) + countLeaves(root->right);
}

void dfs(struct TreeNode *root, char *path, char **paths, int *i){
    if (!root) return;
    size_t offset = strlen(path);

    if (root->left == NULL && root->right == NULL) {
        snprintf(path+offset, MAX_LENGTH_PATH-offset, "%d", root->val);
        
        paths[*i] = malloc(strlen(path)+1);
        if (!paths[*i]) {
            perror("malloc failed");
            exit(EXIT_FAILURE);
        }
        strcpy(paths[*i], path);
        
        (*i)++;
    } 
    else {
        snprintf(path+offset, MAX_LENGTH_PATH-offset, "%d->", root->val);

        dfs(root->left, path, paths, i);
        dfs(root->right, path, paths, i);

    }
    path[offset] = '\0';
}

char** binaryTreePaths(struct TreeNode* root, int* returnSize) {
    if (!root) {
        *returnSize = 0;
        return NULL;
    }

    int leaves = countLeaves(root);
    *returnSize = leaves;

    char **paths = malloc(leaves * sizeof(char*));
    if (!paths) exit(EXIT_FAILURE);

    char *path = malloc(MAX_LENGTH_PATH);
    if (!path) exit(EXIT_FAILURE);
    path[0] = '\0';

    int index = 0;
    dfs(root, path, paths, &index);

    free(path);

    return paths;
}   

int main(void){
    int returnSize = 10;
    struct TreeNode *root = malloc(sizeof(*root));
    root->val = 5;
    root->left = malloc(sizeof(*root->left));
    root->left->val = 6;

    root->right = malloc(sizeof(*root->right));
    root->right->val = 8;

    binaryTreePaths(root, &returnSize);
    return 0;
}