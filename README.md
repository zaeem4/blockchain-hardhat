# blockchain-hardhat with test
# code is in basic branch

1)  ``` yarn init ```
2)  ``` yarn add --dev hardhat ```

if run into an error for not giving option to create a basic app run:
  ``` ride % npx hardhat --verbose ```

3)  ``` yarn add --dev prettier prettier-plugin-solidity ```
4)  ``` yarn hardhat run scripts/deploy.js ```
5)  ``` yarn add --dev dotenv ```
6)  ``` yarn hardhat run scripts/deploy.js --network ganache ``` to run specific bc.
7)  ``` yarn add --dev @nomiclabs/hardhat-etherscan ``` if u want to verify your code in hardhat.
8)  ``` yarn hardhat node ``` to run local network on a rpc url.
9)  ``` yarn hardhat blocknumber --network localhost ``` to run custom task for specific bc. here blocknumber is task.
10) ``` yarn hardhat console --network localhost ``` to run code directly.
11) ``` yarn hardhat test ```
12) ``` yarn add hardhat-gas-reporter --dev ``` 
13) ``` yarn add --dev solidity-coverage ``` to check which part is not included in test.
14) ``` yarn hardhat coverage ``` 
