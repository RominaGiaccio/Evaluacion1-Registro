//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/**
@notice This contract register the students
 */
contract StudentRegistry {

    /**
     * @notice Add a new student in the studentRegistry contract
     * @param _studentNumber It is the student number of the student to register
     */
    function addStudent(uint256 _studentNumber) external {}

    /**
     * @notice Get the student's score associated with the caller's address
     * @return _score It is the student's score
     */
    function getScore() external returns(uint8 _score) {}
}
