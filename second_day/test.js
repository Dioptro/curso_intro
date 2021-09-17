// Array retornado: ["exemplo", "com", "dados", "no", "formato", "csv"]
conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado = conteudoCSV.split(/\s*;\s*/);
console.log(conteudoCSV)