// Import all question code modules

import arrayMaximumProductContiguous from "./array-maximum-product-contiguous";
import binarySearch from "./binary-search";
import binarySearchTree from "./binary-search-tree";
import binaryTree from "./binary-tree";
import breadthFirstSearch from "./breadth-first-search";
import bubbleSort from "./bubble-sort";
import depthFirstSearch from "./depth-first-search";
import dijkstra from "./dijkstra";
import heap from "./heap";
import heapSort from "./heap-sort";
import insertionSort from "./insertion-sort";
import linkedList from "./linked-list";
import mergeSort from "./merge-sort";
import queue from "./queue";
import quickSort from "./quick-sort";
import selectionSort from "./selection-sort";
import stack from "./stack";
import topologicalSort from "./topological-sort";

// Export as an object
const codeModules = {
	"selection-sort": selectionSort,
	stack: stack,
	"bubble-sort": bubbleSort,
	"insertion-sort": insertionSort,
	"binary-search": binarySearch,
	"binary-search-tree": binarySearchTree,
	"binary-tree": binaryTree,
	"breadth-first-search": breadthFirstSearch,
	"depth-first-search": depthFirstSearch,
	"heap-sort": heapSort,
	queue: queue,
	dijkstra: dijkstra,
	"linked-list": linkedList,
	"merge-sort": mergeSort,
	"quick-sort": quickSort,
	"topological-sort": topologicalSort,
	"array-maximum-product-contiguous": arrayMaximumProductContiguous,
	heap: heap,
} as Record<string, Record<string, string | Record<string, string>>>;

export default codeModules;
