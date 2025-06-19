// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {TaskManager} from "../src/TaskManager.sol";
import {DeployTaskManager} from "../script/DeployTaskManager.s.sol";
import {Test, console} from "forge-std/Test.sol";

contract TestTaskManager is Test {
    TaskManager taskManager;
    DeployTaskManager deployTaskManager;

    address public ALICE = makeAddr("Alice");
    address public BOB = makeAddr("Bob");

    modifier createTask() {
        vm.prank(ALICE);
        taskManager.createTask{value: 10 ether}(
            "Test Task",
            "this is descriptons",
            10 ether
        );
        _;
    }

    function setUp() public {
        deployTaskManager = new DeployTaskManager();
        taskManager = deployTaskManager.run();
        vm.deal(ALICE, 100 ether);
        vm.deal(BOB, 100 ether);
    }

    function testCreateTask() public {
        vm.prank(ALICE);
        taskManager.createTask{value:10 ether}("Test Task", "this is descriptions", 10 ether);
        TaskManager.Task memory task = taskManager.getTask(0);
        assertEq(task.id, 0, "Task ID should be 0");
        assertEq(
            task.description,
            "this is descriptions",
            "Task description mismatch"
        );
        assertEq(task.creator, ALICE, "Task creator mismatch");
        assertEq(
            uint256(taskManager.getTaskStatus(0)),
            uint256(TaskManager.TaskStatus.Created)
        );
        assertEq(task.reward, 10 ether, "Task reward mismatch");
        assertEq(taskManager.s_taskCounter(), 1, "Task counter should be 1");
    }

    function testClaimTask() public createTask {
        vm.prank(BOB);
        taskManager.claimTask(0);
        TaskManager.Task memory task = taskManager.getTask(0);
        assertEq(task.claimer, BOB, "Task claimer mismatch");
        assertEq(
            uint256(taskManager.getTaskStatus(0)),
            uint256(TaskManager.TaskStatus.InProgress)
        );
    }

}
