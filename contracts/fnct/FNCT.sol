pragma solidity ^0.8.0;

import "../../openzeppelin-contracts/contracts/access/Ownable.sol";
import "../../openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract FNCT is ERC20PresetFixedSupply, Ownable {

    constructor(
        uint256 initialSupply
    ) ERC20PresetFixedSupply(
            "FiNANCiE Token",
            "FNCT",
            initialSupply,
            _msgSender()
        )
    {
    }

}
