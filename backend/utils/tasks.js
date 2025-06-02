// import Task from "../models/task.model";

// const handlers = {
//   TaskCreated: async (args) => {

//     const {taskId} = args;



//     // create new task document in DB
//     await Task.create({
//       taskId: args.taskId,
//       description: args.description,
//       reward: args.reward,
//       creater: args.creater,
//       status: 'created',
//       claimer: '',
//       completer: '',
//     })
//   },

//   TaskClaimed: async (args) => {
//     // update existing task document with claimer info
//     await TaskModel.findOneAndUpdate(
//       { taskId: args.taskId },
//       { claimer: args.claimer, status: 'claimed' }
//     );
//   },

//   TaskVerifing: async (args) => {
//     // update task status to verifying
//     await TaskModel.findOneAndUpdate(
//       { taskId: args.taskId },
//       { status: 'verifying' }
//     );
//   },

//   TaskCompleted: async (args) => {
//     // update task status and completion info
//     await TaskModel.findOneAndUpdate(
//       { taskId: args.taskId },
//       { 
//         status: 'completed',
//         taskOwner: args.TaskOwner,
//         completer: args.completer,
//       }
//     );
//   },
// };

// export default handlers;