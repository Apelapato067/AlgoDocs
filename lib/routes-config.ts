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
    title: "Arrays",
    href: "Arrays",
    items: [
      { title: "Arrays and Abstract", href: "/ArraysAbstract" },
      { title: "Implementing Array as an Abstract", href: "/Implementing" },
      { title: "Arrays in Data Structures", href: "/ArraysStructures" },
      { title: "Linear Vs Binary", href: "/LinearBinary" },
    ],
  },
  {
    title: "LinkedList",
    href: "LinkedList",
    items: [
      { title: "Linked List", href: "/LinkedList" },
      { title: "Creation and Traversal", href: "/CreationTraversal" },
      { title: "Insertion of a Node", href: "/InsertionNode" },
      { title: "N-arry Tree", href: "/n-arry" },
      { title: "Balanced BST", href: "/avl" },
    ],
  },
  {
    title: "Map Dictionary",
    href: "maps",
    items: [
      { title: "HashMap", href: "/hashmap" },
      { title: "Linked HashMap", href: "/l-hashmap" },
      { title: "TreeMap", href: "/tree-map" },
    ],
  },
  {
    title: "Sets Uniques",
    href: "sets",
    items: [
      { title: "HashSet", href: "/hashset" },
      { title: "Linked HashSet", href: "/l-hashset" },
      { title: "TreeSet", href: "/tree-set" },
    ],
  },
  {
    title: "Advanced Trees",
    href: "adv-trees",
    items: [
      { title: "Priority Queue", href: "/pq" },
      { title: "Prefix Tree", href: "/trie" },
      { title: "Graph", href: "/graph" },
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
