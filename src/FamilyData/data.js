export const data = [
  {
    uid: "0",
    levelVisibility: true,
    personalInformation: {
      name: "great grandfather",
      children: [
        {
          uid: "0.1",
          levelVisibility: true,
          personalInformation: {
            name: "son1",
            children: [
              {
                uid: "0.1.1",
                levelVisibility: false,
                personalInformation: {
                  name: "son1",
                  children: [],
                  spouse: "",
                  location: "",
                  birthYear: "",
                  presentAddress: "",
                },
              },
              {
                uid: "0.1.2",
                levelVisibility: false,
                personalInformation: {
                  name: "son2",
                  children: [],
                  spouse: "",
                  location: "",
                  birthYear: "",
                  presentAddress: "",
                },
              },
            ],
            spouse: "",
            location: "",
            birthYear: "",
            presentAddress: "",
          },
        },
        {
          uid: "0.2",
          levelVisibility: false,
          personalInformation: {
            name: "daughter1",
            children: [],
            spouse: "",
            location: "",
            birthYear: "",
            presentAddress: "",
          },
        },
      ],
      spouse: "",
      location: "",
      birthYear: "",
      presentAddress: "",
    },
  },
];
