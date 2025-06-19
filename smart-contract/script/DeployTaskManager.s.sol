// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract DeployTaskManager is Script {
    function run() external returns (TaskManager) {
        vm.startBroadcast();
        TaskManager taskManager = new TaskManager();
        vm.stopBroadcast();

        return (taskManager);
    }
}
