import client from "./configs/client.js";
import { createTask } from "./controllers/taskCreated.controller.js";
import { taskCompleted } from "./controllers/taskCompleted.controller.js";
import { taskClaimed } from "./controllers/taskClaimed.controller.js";
import { taskSubmit } from "./controllers/taskSubmit.controller.js";
import { eventAbi } from "./utils/eventAbi.js";
import { CONTRACT_ADDRESS } from "./configs/env.js";

const handlers = {
  TaskCreated: createTask,
  TaskClaimed: taskClaimed,
  TaskVerifing: taskSubmit,
  TaskCompleted: taskCompleted,
};

const watch = (eventName) => {
  const _eventAbi = eventAbi.find((e) => e.name === eventName);

  client.watchEvent({
    address: CONTRACT_ADDRESS,
    event: _eventAbi,
    onLogs: async (logs) => {
      for (const log of logs) {
        try {
          await handlers[eventName](log.args);
          console.log(`Handled event ${eventName}`, log.args);
        } catch (err) {
          console.error(`Error handling ${eventName}:`, err);
        }
      }
    },
  });
};

export const watchAllEvents = () => {
  const eventNames = Object.keys(handlers);
  eventNames.forEach((eventName) => {
    watch(eventName);
    console.log(`Watching event: ${eventName}`);
  });
};
