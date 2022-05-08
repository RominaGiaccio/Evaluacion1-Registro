const { ethers } = require("hardhat");
const fs = require('fs');
const path = require('path');

// Contract to deploy
const contractAddress = process.env.REGISTRY_CONTRACT_ADDRESS;

async function main() {
    // Get provider and signer
    const [signer] = await ethers.getSigners();
    
    // Get contract instance
    const contractABIPath = path.resolve(process.cwd(), "artifacts/contracts/StudentRegistry.sol/StudentRegistry.json");
    const contractArtifact = JSON.parse(fs.readFileSync(contractABIPath, 'utf8'));
    const contractInstance  = new ethers.Contract(contractAddress, contractArtifact.abi, signer);
    
    if (contractInstance == null) {
        throw new Error("-- No contract at address ", contractAddress);
    }
    
    //------------------------------------------------------------------------
    // ESCRIBA SU CÓDIGO ENTRE LAS LÍNEAS PUNTEADAS. DEBAJO DE CADA COMENTARIO
    //------------------------------------------------------------------------
    
    // Llame al método de registro de usuario
    const studentNumber = 206127;
    const tx = await contractInstance.addStudent(studentNumber,{
        gasLimit: 50000
    });
    console.log(tx);

    // Llame al método para obtener su puntuación y muestrela en la consola
    const myScore = await contractInstance.getScore();
    console.log("");
    console.log("-- Your score is: ", myScore);

    //------------------------------------------------------------------------
    
    console.log("---------------------------------------------------------------------------------------");
    console.log("-- Registration complete");
    console.log("---------------------------------------------------------------------------------------");
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});