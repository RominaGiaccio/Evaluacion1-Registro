# Evaluacion 1 - Registro

## Setup

1. Clonar el repositorio

git clone git@github.com:TallerTecnologias2/Evaluacion1-Registro.git

2. Crear archivo hardhat.config

hardhat init
seleecionar la opción: Create an empty hardhat.config.js

3. Instalar dependencias

npm install

OPCIONAL: Si el punto anterior no instala todas las dependencias necesarias. Ejecutar los siguientes comandos:

npm install @nomiclabs/hardhat-ethers
npm install dotenv

## Task

Escriba el código necesario para llamar a los métodos del contrato "studentRegistry.sol" ubicado en la carpeta "contracts". El cual ya se encuentra deployado en la red de Rinkeby en el addres que se ubica en el archivo env, en la variable REGISTRY_CONTRACT_ADDRESS.

IMPORTANTE: Se registrará la dirección de la cuenta utilizada para enviar la transacción, como la dirección del usuario para el resto del curso, por lo que es MUY IMPORTANTE que no pierda el acceso a su cuenta. Toma todas las precauciones
necesarios para almacenar correctamente la clave privada asociada a dicha cuenta.

## Push changes

1. Agregar su repositorio

git remote add origin <URL_A_SU_GITHUB_REPO>

2. Publicar cambios a su repositorio

git push origin master
