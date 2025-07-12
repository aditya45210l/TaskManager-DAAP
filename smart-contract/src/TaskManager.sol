// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TaskManager is ReentrancyGuard {
    /**
     *
     * Type declarations (Enums and Structs)
     */

    /**
     * @notice we decelair an enum to represent the status of a task.
     * @dev The status can be Created, InProgress, Completed, or Verified.
     */
    enum TaskStatus {
        Created,
        InProgress,
        Verifing,
        Completed
    }
    /**
     * @notice we decelair a struct to represent a task.
     * @dev The struct contains an id, description, creator, completer, claimer, status, and reward.
     */

    struct Task {
        uint256 id;
        string title;
        string description;
        address creator;
        address completer;
        address claimer;
        TaskStatus status;
        uint256 reward;
    }

    struct Royality {
        uint256 claimerP;
        uint256 claimerN;
        uint256 createrP;
        uint256 createrN;
    }

    /**
     *
     * State Variables
     */

    uint256 public s_taskCounter;
    address private immutable i_owner;

    /**
     *
     * Mappings
     */
    // @dev The mapping stores tasks by their ID.
    mapping(uint256 => Task) public s_tasks;
    // @dev The mapping stores the reputation of each address.
    mapping(address => uint256) public s_repuction;
    // The mapping stores the claimer reward for each task.
    mapping(address claimer => mapping(uint256 _taskId => uint256 _reward))
        public s_claimerReward;

    //Events
    event TaskCreated(
        uint256 indexed taskId,
        uint256 reward,
        string description
    );

    event TaskClaimed(uint256 indexed taskId, address claimer);
    event TaskVerifing(uint256 indexed taskId);
    event TaskCompleted(
        uint256 indexed taskId,
        address indexed TaskOwner,
        address indexed completer
    );
    /**
     *
     * Errors
     */

    error TaskManager__NotTaskCreator();
    error TaskManager__TaskAllreadyClaimed();
    error TaskManager__InvalidTaskId();
    error TaskManager__OwnerCannotClaimTask();
    error TaskManager__TaskDontHaveBalance();
    error TaskManager__TransferFailed();
    error TaskManager__notInoughBalaneToCreateTask();
    error TaskManager__onlyTaskClaimerCanCallThisFunc();

    constructor() {
        i_owner = msg.sender;
        s_taskCounter = 0;
    }

    /**
     * @dev This function allows a user to create a task.
     * @param _title The title of the task.
     * @param _description The description of the task.
     * @param _reward The reward for completing the task.
     * @return The ID of the created task.
     */
    function createTask(
        string memory _title,
        string memory _description,
        uint256 _reward
    ) external payable returns (uint256) {
        if (msg.value != _reward) {
            revert TaskManager__notInoughBalaneToCreateTask();
        }
        s_tasks[s_taskCounter] = Task({
            id: s_taskCounter,
            title: _title,
            description: _description,
            creator: msg.sender,
            completer: address(0),
            claimer: address(0),
            status: TaskStatus.Created,
            reward: _reward
        });

        emit TaskCreated(s_taskCounter, _reward, _description);
        s_taskCounter++;
        return s_taskCounter - 1;
    }

    // claimTask function allow user to claim task based on task Id;
    function claimTask(uint256 _taskId) external {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }
        Task storage task = s_tasks[_taskId];
        if (task.status != TaskStatus.Created) {
            revert TaskManager__TaskAllreadyClaimed();
        }
        if (msg.sender == task.creator) {
            revert TaskManager__OwnerCannotClaimTask();
        }

        task.claimer = msg.sender;
        task.status = TaskStatus.InProgress;
        emit TaskClaimed(_taskId, msg.sender);
    }

    // this function allow claimed user to submit the task if the given work was done by claimed user;
    function submitTask(uint256 _taskId) external {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }
        Task storage task = s_tasks[_taskId];
        if (task.status != TaskStatus.InProgress) {
            revert("TaskManager__TaskIsNotInProgress");
        }
        if (msg.sender != task.claimer) {
            revert TaskManager__onlyTaskClaimerCanCallThisFunc();
        }

        task.status = TaskStatus.Verifing;
        emit TaskVerifing(_taskId);
    }

    function verifyTask(uint256 _taskId) external {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }
        Task storage task = s_tasks[_taskId];
        if (msg.sender != s_tasks[_taskId].creator) {
            revert TaskManager__NotTaskCreator();
        }
        if (task.status != TaskStatus.Verifing) {
            if (task.status == TaskStatus.Created) {
                revert("TaskManager__NoOneHasClaimedTaskYet");
            }
            if (task.status == TaskStatus.InProgress) {
                revert("TaskManager__TaskIsStillInProgress");
            }
            if (task.status == TaskStatus.Completed) {
                revert("TaskManager__TaskIsAlreadyCompleted");
            }
        }
        s_claimerReward[payable(task.claimer)][_taskId] = task.reward;
        task.completer = task.claimer;
        task.status = TaskStatus.Completed;
        emit TaskCompleted(_taskId, task.creator, task.completer);
    }

    //function to withdrawll the reward from the contract?
    function cliamReward(uint256 _taskId) external nonReentrant {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }
        if (s_claimerReward[msg.sender][_taskId] == 0) {
            revert TaskManager__TaskDontHaveBalance();
        }

        (bool success, ) = payable(address(msg.sender)).call{
            value: s_claimerReward[msg.sender][_taskId]
        }("");

        if (!success) {
            revert TaskManager__TransferFailed();
        }

        s_claimerReward[msg.sender][_taskId] = 0;
    }

    /**
     * Getters functions
     */
    function getTask(uint256 _taskId) external view returns (Task memory) {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }
        return s_tasks[_taskId];
    }

    function getTaskStatus(uint256 _taskId) external view returns (TaskStatus) {
        if (_taskId >= s_taskCounter) {
            revert TaskManager__InvalidTaskId();
        }

        return s_tasks[_taskId].status;
    }
}
