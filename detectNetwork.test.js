/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
        return num / 2 === 0;
    };
    return even(10) === true;
});

// In tests, we want to compare the expected behavior to the actual behavior.
// A test) to only fail if the expected behavior doesn't match the actual.
it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
        return num % 2 === 0;
    };

    if (even(10) !== true) {
        throw new Error('10) to be even!');
    }
});
describe('Diner\'s Club', function() {
    // Be careful, tests can have bugs too...

    it('has a prefix of 38 and a length of 14', function() {
        if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
            throw new Error('Test failed');
        }
    });

    it('has a prefix of 39 and a length of 14', function() {
        if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
            throw new Error('Test failed');
        }

    });
});

describe('American Express', function() {
    // It can get annoying to keep typing the if/throw, so here is a
    // helper function to throw an error if the input statement isn't true. 
    var assert = function(isTrue) {
        if (!isTrue) {
            throw new Error('Test failed');
        }

    };

    it('has a prefix of 34 and a length of 15', function() {
        assert(detectNetwork('343456789012345') === 'American Express');
    });

    it('has a prefix of 37 and a length of 15', function() {
        assert(detectNetwork('373456789012345') === 'American Express');
    });
});

describe('Visa', function() {
    // Chai is an entire library of helper functions for tests!
    // Chai provides an assert that acts the same as our previous assert.
    // Search the documentation to figure out how to access it. 
    //   http://chaijs.com/
    var assert = chai.assert;


    it('has a prefix of 4 and a length of 13', function() {
        assert(detectNetwork('4123456789012') === 'Visa', 'has a prefix of 4 and a length of 13');
    });

    it('has a prefix of 4 and a length of 16', function() {
        assert(detectNetwork('4123456789012345') === 'Visa', 'has a prefix of 4 and a length of 16');
    });

    it('has a prefix of 4 and a length of 19', function() {
        assert(detectNetwork('4123456789012345678') === 'Visa', 'has a prefix of 4 and a length of 19');
    });
});

describe('MasterCard', function() {
    // Chai lets you write more human-readable tests that throw helpful errors.
    // Expect syntax is one way to do this, but there are others. 
    // If you want to know more, check out the documentation. 
    //   http://chaijs.com/api/bdd/
    var expect = chai.expect;

    it('has a prefix of 51 and a length of 16', function() {
        expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
    });

    it('has a prefix of 52 and a length of 16', function() {
        expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
    });

    it('has a prefix of 53 and a length of 16', function() {
        expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
    });


    // You can also use) to instead of expect, which changes the style
    // slightly. It really doesn't matter which one you use - check out 
    // http://chaijs.com/guide/styles/ for more info, but it's important
    // to be consistent (unlike in this file, where we use BOTH expect
    // and) to, but that's just for learning), so once you've gotten 
    // these tests to pass using) to syntax, refactor your tests to 
    // use either expect or) to, but not both. 


    it('has a prefix of 54 and a length of 16', function() {
        expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
    });

    it('has a prefix of 55 and a length of 16', function() {
        expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
    });

});

describe('Discover', function() {
    var expect = chai.expect;
    // Tests without a function will be marked as "pending" and not run
    // Implement these tests (and others) and make them pass!
    it('has a prefix of 65 and a length of 16', function() {
        expect(detectNetwork('6511234567890123')).to.equal('Discover');
    });

    it('has a prefix of 65 and a length of 19', function() {
        expect(detectNetwork('6511234567890123456')).to.equal('Discover');
    });

    it('has a prefix of 6011 and a length of 16', function() {
        expect(detectNetwork('6011234567890123')).to.equal('Discover');
    });

    it('has a prefix of 6011 and a length of 19', function() {
        expect(detectNetwork('6011234567890123456')).to.equal('Discover');
    });

    for (var prefix = 644; prefix <= 649; prefix++) {
        (function(prefix) {
            it('has a prefix of ' + prefix.toString() + ' and a length of 16', function() {
                expect(detectNetwork(prefix.toString() + '1234567890123')).to.equal('Discover');
            });
            it('has a prefix of ' + prefix.toString() + ' and a length of 19', function() {
                expect(detectNetwork(prefix.toString() + '1234567890123456')).to.equal('Discover');
            });
        })(prefix);
    }
});

describe('Maestro', function() {
    // Write full test coverage for the Maestro card
    var expect = chai.expect;
    it('has a prefix of 5018 and a length of 12', function() {
        expect(detectNetwork('501812345678')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 13', function() {
        expect(detectNetwork('5018123456789')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 14', function() {
        expect(detectNetwork('50181234567890')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 15', function() {
        expect(detectNetwork('501812345678901')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 16', function() {
        expect(detectNetwork('5018123456789012')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 17', function() {
        expect(detectNetwork('50181234567890123')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 18', function() {
        expect(detectNetwork('501812345678901234')).to.equal('Maestro');
    });
    it('has a prefix of 5018 and a length of 19', function() {
        expect(detectNetwork('5018123456789012345')).to.equal('Maestro');
    });

    it('has a prefix of 5020 and a length of 12', function() {
        expect(detectNetwork('502012345678')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 13', function() {
        expect(detectNetwork('5020123456789')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 14', function() {
        expect(detectNetwork('50201234567890')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 15', function() {
        expect(detectNetwork('502012345678901')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 16', function() {
        expect(detectNetwork('5020123456789012')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 17', function() {
        expect(detectNetwork('50201234567890123')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 18', function() {
        expect(detectNetwork('502012345678901234')).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of 19', function() {
        expect(detectNetwork('5020123456789012345')).to.equal('Maestro');
    });

    it('has a prefix of 5038 and a length of 12', function() {
        expect(detectNetwork('503812345678')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 13', function() {
        expect(detectNetwork('5038123456789')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 14', function() {
        expect(detectNetwork('50381234567890')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 15', function() {
        expect(detectNetwork('503812345678901')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 16', function() {
        expect(detectNetwork('5038123456789012')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 17', function() {
        expect(detectNetwork('50381234567890123')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 18', function() {
        expect(detectNetwork('503812345678901234')).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of 19', function() {
        expect(detectNetwork('5038123456789012345')).to.equal('Maestro');
    });

    it('has a prefix of 6304 and a length of 12', function() {
        expect(detectNetwork('630412345678')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 13', function() {
        expect(detectNetwork('6304123456789')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 14', function() {
        expect(detectNetwork('63041234567890')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 15', function() {
        expect(detectNetwork('630412345678901')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 16', function() {
        expect(detectNetwork('6304123456789012')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 17', function() {
        expect(detectNetwork('63041234567890123')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 18', function() {
        expect(detectNetwork('630412345678901234')).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of 19', function() {
        expect(detectNetwork('6304123456789012345')).to.equal('Maestro');
    });
});

describe('China UnionPay', function() {
    var expect = chai.expect;
    for (var prefix1 = 624; prefix1 <= 626; prefix1++) {
        (function(prefix1) {
            it('has a prefix of ' + prefix1.toString() + ' and a length of 16', function() {
                expect(detectNetwork(prefix1.toString() + '1234567890123')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix1.toString() + ' and a length of 17', function() {
                expect(detectNetwork(prefix1.toString() + '12345678901234')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix1.toString() + ' and a length of 18', function() {
                expect(detectNetwork(prefix1.toString() + '123456789012345')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix1.toString() + ' and a length of 19', function() {
                expect(detectNetwork(prefix1.toString() + '1234567890123456')).to.equal('China UnionPay');
            });
        })(prefix1);
    }

    for (var prefix2 = 6282; prefix2 <= 6288; prefix2++) {
        (function(prefix2) {
            it('has a prefix of ' + prefix2.toString() + ' and a length of 16', function() {
                expect(detectNetwork(prefix2.toString() + '234567890123')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix2.toString() + ' and a length of 17', function() {
                expect(detectNetwork(prefix2.toString() + '2345678901234')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix2.toString() + ' and a length of 18', function() {
                expect(detectNetwork(prefix2.toString() + '23456789012345')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix2.toString() + ' and a length of 19', function() {
                expect(detectNetwork(prefix2.toString() + '234567890123456')).to.equal('China UnionPay');
            });
        })(prefix2);
    }

    for (var prefix3 = 622126; prefix3 <= 622925; prefix3++) {
        (function(prefix3) {
            it('has a prefix of ' + prefix3.toString() + ' and a length of 16', function() {
                expect(detectNetwork(prefix3.toString() + '4567890123')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix3.toString() + ' and a length of 17', function() {
                expect(detectNetwork(prefix3.toString() + '45678901234')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix3.toString() + ' and a length of 18', function() {
                expect(detectNetwork(prefix3.toString() + '456789012345')).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix3.toString() + ' and a length of 19', function() {
                expect(detectNetwork(prefix3.toString() + '4567890123456')).to.equal('China UnionPay');
            });
        })(prefix3);
    }


});


describe('Switch', function() {
  var expect = chai.expect;
    it('has a prefix of 4903 and a length of 16', function() {
        expect(detectNetwork('4903123456789012')).to.equal('Switch');
    });
    it('has a prefix of 4903 and a length of 18', function() {
        expect(detectNetwork('490312345678901234')).to.equal('Switch');
    });
    it('has a prefix of 4903 and a length of 19', function() {
        expect(detectNetwork('4903123456789012345')).to.equal('Switch');
    });

    it('has a prefix of 4905 and a length of 16', function() {
        expect(detectNetwork('4905123456789012')).to.equal('Switch');
    });
    it('has a prefix of 4905 and a length of 18', function() {
        expect(detectNetwork('490512345678901234')).to.equal('Switch');
    });
    it('has a prefix of 4905 and a length of 19', function() {
        expect(detectNetwork('4905123456789012345')).to.equal('Switch');
    });

     it('has a prefix of 4911 and a length of 16', function() {
        expect(detectNetwork('4911123456789012')).to.equal('Switch');
    });
    it('has a prefix of 4911 and a length of 18', function() {
        expect(detectNetwork('491112345678901234')).to.equal('Switch');
    });
    it('has a prefix of 4911 and a length of 19', function() {
        expect(detectNetwork('4911123456789012345')).to.equal('Switch');
    });

     it('has a prefix of 4936 and a length of 16', function() {
        expect(detectNetwork('4936123456789012')).to.equal('Switch');
    });
    it('has a prefix of 4936 and a length of 18', function() {
        expect(detectNetwork('493612345678901234')).to.equal('Switch');
    });
    it('has a prefix of 4936 and a length of 19', function() {
        expect(detectNetwork('4936123456789012345')).to.equal('Switch');
    });

     it('has a prefix of 564182 and a length of 16', function() {
        expect(detectNetwork('5641823456789012')).to.equal('Switch');
    });
    it('has a prefix of 564182 and a length of 18', function() {
        expect(detectNetwork('564182345678901234')).to.equal('Switch');
    });
    it('has a prefix of 564182 and a length of 19', function() {
        expect(detectNetwork('5641823456789012345')).to.equal('Switch');
    });

    it('has a prefix of 633110 and a length of 16', function() {
        expect(detectNetwork('6331103456789012')).to.equal('Switch');
    });
    it('has a prefix of 633110 and a length of 18', function() {
        expect(detectNetwork('633110345678901234')).to.equal('Switch');
    });
    it('has a prefix of 633110 and a length of 19', function() {
        expect(detectNetwork('6331103456789012345')).to.equal('Switch');
    });

    it('has a prefix of 6333 and a length of 16', function() {
        expect(detectNetwork('6333123456789012')).to.equal('Switch');
    });
    it('has a prefix of 6333 and a length of 18', function() {
        expect(detectNetwork('633312345678901234')).to.equal('Switch');
    });
    it('has a prefix of 6333 and a length of 19', function() {
        expect(detectNetwork('6333123456789012345')).to.equal('Switch');
    });

    it('has a prefix of 6759 and a length of 16', function() {
        expect(detectNetwork('6759123456789012')).to.equal('Switch');
    });
    it('has a prefix of 6759 and a length of 18', function() {
        expect(detectNetwork('675912345678901234')).to.equal('Switch');
    });
    it('has a prefix of 6759 and a length of 19', function() {
        expect(detectNetwork('6759123456789012345')).to.equal('Switch');
    });
  });
