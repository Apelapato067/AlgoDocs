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
    // title: "Arrays Algo",
    href: "Arrays",
    items: [
      { title: "Arrays and Abstract", href: "/ArraysAbstract" },
      { title: "Implementing Array as an Abstract", href: "/Implementing" },
      { title: "Arrays in Data Structures", href: "/ArraysStructures" },
      { title: "Linear Vs Binary", href: "/LinearBinary" },
    ],
  },
  {
    // title: "LinkedList Algo",
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
    // title: "Stack Algo",
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
  //   title: "Sets Uniques",
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
  //   title: "Advanced Trees",
    href: "Queue",
    items: [
      { title: "Queue Data Structure", href: "/QueueDataStructure" },
      { title: "Queue Implementation", href: "/QueueImplementation" },
  //     { title: "Graph", href: "/graph" },
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
