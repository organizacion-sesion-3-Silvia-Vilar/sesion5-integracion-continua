// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var pares = require('../pares.js');

// Test
it('comprobar función par', function() {
	assert.equal(pares.par(5), 1);
	assert.equal(pares.par(2), 0);
	assert.equal(pares.par(20), 0);
	assert.equal(pares.par(-10), 0);
	assert.equal(pares.par(-15), -1);  //Al ser un número negativo, el resto será negativo
});



