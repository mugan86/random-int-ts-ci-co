var expect = require('chai').expect;
var module = require('./../dist/index');

describe('randomIntList Function Check', () => {
    it('Longitud de la lista es corercta', () => {
        
        const listLongitudes = [2, 3, 4, 5];
        for (var i = 0; i < listLongitudes.length; i++) {
            const listGenerate = module.randomIntList(listLongitudes[i], 1, 5);
            expect(listGenerate.length).to.equal(listLongitudes[i]);
        }
    });
    it('Los números de la lista no son "undefined"', () => {
        const listGenerate = module.randomIntList(5, 1, 5);
        for (var i = 0; i < listGenerate.length; i++) {
            
            expect(listGenerate[i]).to.not.equal(undefined);
        }
    });

    it('Los valores generados están dentro del rango', () => {
        const min = 1;
        const max = 12;
        const listGenerate = module.randomIntList(5, min, max);
        for (var i = 0; i < listGenerate.length; i++) {
            var inRange = false;
            if (listGenerate[i] >= min && listGenerate[i] <= max) {
                inRange = true;
            }
            expect(inRange).to.equal(true);
        }
    });

    it('Los valores que están en la lista son de tipo númerico', () => {
        const min = 1;
        const max = 12;
        const listGenerate = module.randomIntList(5, min, max);
        for (var i = 0; i < listGenerate.length; i++) {
            expect(typeof listGenerate[i]).to.equal('number');
        }
    });

    it('Sin definir el valor máximo y su valor min = 0', () => {
        const min = 0;
        const listGenerate = module.randomIntList(5, min);

        // min = 0 ---> max = 10
        for (var i = 0; i < listGenerate.length; i++) {
            var correctValueDefineInRange = false;
            if (listGenerate[i] <= (min + 10)) {
                correctValueDefineInRange = true;
            }
            expect(correctValueDefineInRange).to.equal(true);
        }
    });

    it('Longitud de la lista menos 0', () => {
        const min = 0;
        const listGenerate = module.randomIntList(-5, min);
        console.log(listGenerate);

        // min = 0 ---> max = 10
        for (var i = 0; i < listGenerate.length; i++) {
            var correctValueDefineInRange = false;
            if (listGenerate[i] <= (min + 10)) {
                correctValueDefineInRange = true;
            }
            expect(correctValueDefineInRange).to.equal(true);
        }
    });

    

    
});