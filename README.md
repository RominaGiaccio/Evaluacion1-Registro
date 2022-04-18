# Evaluacion 1 - Registro

## Setup

1. Clonar el repositorio `git clone git@github.com:TallerTecnologias2/Evaluacion1-Registro.git`

2. Instalar dependencias `npm install`

3. Iniciar proyecto de Hardhat con `npx hardhat init` y seleccionar la opción: `Create an empty hardhat.config.js`

4. En el recién creado archivo `hardhat.config.js`, reemplazar la configuración existente por la siguiente:

```
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
        chainId:  4,
    	from: process.env.RINKEBY_ACCOUNT,
        accounts: [process.env.RINKEBY_PRIVATE_KEY]
    }
  }
};
```

## Task

Escriba el código necesario para llamar a los métodos del contrato `studentRegistry.sol` ubicado en la carpeta `contracts`. El contrato se encuentra deployado en la red de Rinkeby en el address que se ubica en el archivo `.env` en la variable `REGISTRY_CONTRACT_ADDRESS`.

>**IMPORTANTE**: La dirección (address) de la cuenta utilizada para enviar la transacción se registrará como la dirección del usuario para el resto del curso. Es MUY IMPORTANTE que **no pierda** el acceso a su cuenta. Toma todas las precauciones necesarios para almacenar correctamente la clave privada asociada a dicha cuenta.

## Push changes

1. Agregar su repositorio

`git remote add origin <URL_A_SU_GITHUB_REPO>`

2. Publicar cambios a su repositorio

`git push origin master`
