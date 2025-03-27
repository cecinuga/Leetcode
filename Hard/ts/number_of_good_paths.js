function BFS(G, source) {
    if (source === void 0) { source = 0; }
    var Queue = new Array();
    var BFT = new Array(G.length);
    for (var i = 0; i < G.length; i++) {
        var vert = { id: i, val: G[i][0], color: "white", distance: Infinity };
        BFT[i] = vert;
    }
    BFT[source].color = "gray";
    BFT[source].distance = 0;
    Queue.push(BFT[source]);
    while (Queue.length > 0) {
        var actual = Queue.shift();
        for (var v = 0; v < G[actual.id][1].length; v++) {
            var adjV = BFT[G[actual.id][1][v]];
            if (adjV.color == "white") {
                adjV.color = "gray";
                adjV.distance = actual.distance + 1;
                adjV.pred = actual;
                Queue.push(adjV);
            }
        }
        actual.color = "black";
    }
    return BFT;
}
function printPath(paths, s, v) {
    if (v >= paths.length)
        return [];
    var actual = paths[v], source = paths[s];
    var Queue = [actual.val];
    while (actual.id != source.id) {
        if (actual.pred == undefined)
            return [];
        Queue.unshift(actual.pred.val);
        actual = actual.pred;
    }
    return Queue;
}
function UBFS(G) {
    var UBFTree = [];
    for (var s in G) {
        UBFTree.push(BFS(G, Number(s)));
    }
    return UBFTree;
}
function printGlobalPath(UBFTree, s, v) {
    return printPath(UBFTree[s], s, v);
}
function getAllMinPaths(UBFTree) {
    var paths = [];
    for (var i = 0; i < UBFTree.length; i++) {
        paths.push([]);
        for (var j = 0; j < UBFTree[i].length; j++) {
            paths[i].push(printGlobalPath(UBFTree, i, j));
        }
    }
    return paths;
}
function numberOfGoodPaths(vals, edges) {
    var _a, _b;
    var AdjList = new Array(vals.length);
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        var v = edge[0], w = edge[1];
        (_a = AdjList[v]) !== null && _a !== void 0 ? _a : (AdjList[v] = [vals[v], []]);
        (_b = AdjList[w]) !== null && _b !== void 0 ? _b : (AdjList[w] = [vals[w], []]);
        AdjList[v][1].push(w);
        AdjList[w][1].push(v);
    }
    var UBFT = UBFS(AdjList);
    var allPath = getAllMinPaths(UBFT);
    var count = 0;
    for (var _c = 0, allPath_1 = allPath; _c < allPath_1.length; _c++) {
        var vertPaths = allPath_1[_c];
        for (var _d = 0, vertPaths_1 = vertPaths; _d < vertPaths_1.length; _d++) {
            var path = vertPaths_1[_d];
            var start = path[0];
            var end = path[path.length - 1];
            if (start == end) {
                var goodPath = true;
                for (var i = 1; i < path.length; i++) {
                    if (path[i] > start) {
                        goodPath = false;
                        break;
                    }
                }
                if (goodPath) {
                    console.log(path);
                    count++;
                }
            }
        }
    }
    return count;
}
var values = [3, 4, 1, 5, 2, 3, 5, 2, 1, 2, 5];
var edges = [[0, 1], [0, 2], [1, 3], [2, 4], [4, 5], [5, 6], [5, 7], [7, 8], [8, 9], [9, 10]];
var count = numberOfGoodPaths(values, edges);
console.log(count);
