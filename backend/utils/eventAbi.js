export const eventAbi = [
  {
    type: "event",
    name: "TaskCreated",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false
      },
      {
        name: "description",
        type: "string",
        indexed: false
      }
    ]
  },
  {
    type: "event",
    name: "TaskClaimed",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true
      },
      {
        name: "claimer",
        type: "address",
        indexed: false
      }
    ]
  },
  {
    type: "event",
    name: "TaskVerifing",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true
      }
    ]
  },
  {
    type: "event",
    name: "TaskCompleted",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true
      },
      {
        name: "TaskOwner",
        type: "address",
        indexed: true
      },
      {
        name: "completer",
        type: "address",
        indexed: true
      }
    ]
  }
];
