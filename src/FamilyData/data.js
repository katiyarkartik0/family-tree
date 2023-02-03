export const data = [
  {
    uid: "0",
    name: "great grandfather",
    levelVisibility: true,
    clicked: false,
    children: [
      {
        uid: "0.1",
        name: "son1",
        levelVisibility: true,
        clicked: false,
        children: [
          {
            uid: "0.1.1",
            name: "son1",
            levelVisibility: false,
            clicked: false,
            children: [],
          },
          {
            uid: "0.1.2",
            name: "son2",
            levelVisibility: false,
            clicked: false,
            children: [],
          },
        ],
      },
      {
        uid: "0.2",
        name: "daughter1",
        levelVisibility: false,
        clicked: false,
        children: [],
      },
    ],
  },
];
