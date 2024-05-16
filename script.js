function decimalToBinary(decimal) {
    if (decimal === 0) {
        return '0';
    } else if (decimal === 1) {
        return '1';
    } else {
        return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2).toString();
    }
}

console.log(decimalToBinary(10)); // Exemple: Convertir le nombre 10 en binaire
