export const ROUTES = [
  {
    title: "Data Structures and Algorithms:",
    href: "lists",
    items: [
      { title: "Introduction to Data Structures & Algorithms", href: "/intro" },
      { title: "Time Complexity", href: "/Time-complexity" },
      { title: "Asymptotic Notations", href: "/AsymptoticNotations" },
      { title: "Average & Worst", href: "/AverageWorst" },
      { title: "Calculate Time Complexity", href: "/CalculateTimeComplexity" },
    ],
  },
  {
    // title: "",
    href: "Arrays",
    items: [
      { title: "Arrays and Abstract", href: "/ArraysAbstract" },
      { title: "Implementing Array as an Abstract", href: "/Implementing" },
      { title: "Arrays in Data Structures", href: "/ArraysStructures" },
      { title: "Linear Vs Binary", href: "/LinearBinary" },
    ],
  },
  {
    // title: "",
    href: "LinkedList",
    items: [
      { title: "Linked List", href: "/LinkedList" },
      { title: "Creation and Traversal", href: "/CreationTraversal" },
      { title: "Insertion of a Node", href: "/InsertionNode" },
      { title: "Deletion in a Linked ListTree", href: "/DeletionLinkedList" },
      { title: "Circular Linked List and Operations", href: "/Circular" },
      { title: "Doubly Linked Lists", href: "/DoublyLinkedLists" },
    ],
  },
  {
    // title: "",
    href: "Stack",
    items: [
      { title: "Stack in Data Structures", href: "/stack" },
      { title: "Implementing Stack Using Array", href: "/ImplementingStack" },
      { title: "Operations in Stack", href: "/OperationsStack" },
      { title: "Stack Array Operations", href: "/StackArrayOperations" },
      { title: "Peek Operation in Stack Using Arrays", href: "/PeekOperation" },
      { title: "Time Complexity of Operations", href: "/TimeComplexityStack" },
      { title: "Stack Using Linked List Operations", href: "/StackLinkedList" },
    ],
  },
  {
  //   title: " ,
    href: "ApplicationsStack",
    items: [
      { title: "Applications of Stack", href: "/ApplicationsStack" },
      { title: "Parenthesis Checking", href: "/ParenthesisChecking" },
      { title: "Multiple Parenthesis Matching", href: "/MultipleParenthesisMatching" },
      { title: "Infix, Prefix and Postfix Expressions", href: "/InfixPrefixPostfix" },
      { title: "Infix To Postfix Using Stack", href: "/InfixPostfixStack" },
    ],
  },
  {
  //   title: "",
    href: "Queue",
    items: [
      { title: "Queue Data Structure", href: "/QueueDataStructure" },
      { title: "Queue Implementation", href: "/QueueImplementation" },
      { title: "Array implementation of Queue", href: "/ArrayimplementationQueue" },
      { title: "Queue and its Operations Using Arrays", href: "/QueueOperationsArrays" },
      { title: "Circular Queue", href: "/CircularQueue" },
      { title: "Operations on Circular Queue", href: "/OperationsCircularQueue" },
      { title: "Circular Queue & Operations on Circular Queue", href: "/CircularOperationsCircularQueue" },
      { title: "Queue Using Linked Lists", href: "/QueueLinkedLists" },
      { title: "Double-Ended Queue in Data Structure", href: "/DE-Queue" },
    ],
  },
  {
    //   title: "",
      href: "Algorithms",
      items: [
        { title: "Sorting Algorithms", href: "/SortingAlgorithms" },
        { title: "Bubble Sort Algorithm", href: "/BubbleSortAlgorithm" },
        { title: "Bubble Sort Program", href: "/BubbleSortProgram" },
        { title: "Insertion Sort Algorithm", href: "/InsertionSortAlgorithm" },
        { title: "Insertion Sort Program", href: "/InsertionSortProgram" },
        { title: "Selection Sort Algorithm", href: "/SelectionSortAlgorithm" },
        { title: "Selection Sort Program", href: "/SelectionSortProgram" },
        { title: "QuickSort Algorithm", href: "/QuickSortAlgorithm" },
      ],
    },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
