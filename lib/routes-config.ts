export const ROUTES = [
  {
    title: "Data Structures and Algorithms:",
    href: "lists",
    items: [
      { title: "Introduction to Data Structures & Algorithms", href: "/intro" },
      { title: "Time Complexity", href: "/Time-complexity" },
      { title: "Asymptotic Notations", href: "/AsymptoticNotations" },
      { title: "Sliding Window", href: "/Slidingwindow" },
      { title: "Stack", href: "/stack" },
    ],
  },
  {
    title: "Queues",
    href: "queues",
    items: [
      { title: "Linear Queue", href: "/queue" },
      { title: "Doubly ended Queue", href: "/deque" },
      { title: "Circular Queue", href: "/circular-queue" },
    ],
  },
  {
    title: "Tree Structure",
    href: "trees",
    items: [
      { title: "Binary Tree", href: "/b-tree" },
      { title: "Complete Binary Tree", href: "/cbt" },
      { title: "Binary Search Tree", href: "/bst" },
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
