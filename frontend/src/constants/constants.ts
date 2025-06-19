export const contract = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const erc20Abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimTask",
    inputs: [
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createTask",
    inputs: [
      {
        name: "_description",
        type: "string",
        internalType: "string",
      },
      {
        name: "_title",
        type: "string",
        internalType: "string",
      },
      {
        name: "_reward",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getTask",
    inputs: [
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct TaskManager.Task",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "title",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "completer",
            type: "address",
            internalType: "address",
          },
          {
            name: "claimer",
            type: "address",
            internalType: "address",
          },
          {
            name: "status",
            type: "uint8",
            internalType: "enum TaskManager.TaskStatus",
          },
          {
            name: "reward",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTaskStatus",
    inputs: [
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum TaskManager.TaskStatus",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_claimerReward",
    inputs: [
      {
        name: "claimer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_reward",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_repuction",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_taskCounter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_tasks",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "title",
        type: "string",
        internalType: "string",
      },
      {
        name: "description",
        type: "string",
        internalType: "string",
      },
      {
        name: "creator",
        type: "address",
        internalType: "address",
      },
      {
        name: "completer",
        type: "address",
        internalType: "address",
      },
      {
        name: "claimer",
        type: "address",
        internalType: "address",
      },
      {
        name: "status",
        type: "uint8",
        internalType: "enum TaskManager.TaskStatus",
      },
      {
        name: "reward",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "submitTask",
    inputs: [
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyTask",
    inputs: [
      {
        name: "_taskId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "TaskClaimed",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "claimer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCompleted",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "TaskOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "completer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskCreated",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "reward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "description",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TaskVerifing",
    inputs: [
      {
        name: "taskId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "TaskManager__InvalidTaskId",
    inputs: [],
  },
  {
    type: "error",
    name: "TaskManager__NotTaskClaimer",
    inputs: [],
  },
  {
    type: "error",
    name: "TaskManager__NotTaskCreator",
    inputs: [],
  },
  {
    type: "error",
    name: "TaskManager__OwnerCannotClaimTask",
    inputs: [],
  },
  {
    type: "error",
    name: "TaskManager__TaskAllreadyClaimed",
    inputs: [],
  },
]
