const path = require("path");

// Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos
console.log(path.join(__dirname, 'test', 'test.html'));