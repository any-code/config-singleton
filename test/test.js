var timeout,
    config = require('../index');

exports.testLoadFromJson = function(test) {
    var Config = require('../index');

    Config.load(require('./test.json'));

    test.ok(Config.one, 'The expected config was not present');
    test.ok(Config.two, 'The expected config was not present');
    test.ok(!Config.three, 'The expected config was not present');
    test.done();
}

exports.testLoadedProperties = function(test) {
    var Config = require('../index');

    Config.load({
        one: true
    });

    test.ok(Config.one, 'The expected config was not present');
    test.ok(!Config.two, 'The expected config was not present');
    test.ok(!Config.three, 'The expected config was not present');
    test.done();
}

exports.testSingleton = function(test) {
    require('../index').load({one: true})

    var Config = require('../index');
    Config.load({
        two: true,
        three: true
    });

    test.ok(Config.one, 'The expected config was not present');
    test.ok(Config.two, 'The expected config was not present');
    test.ok(Config.three, 'The expected config was not present');
    test.done();
}

exports.tearDown = function(callback) {
    try {
        clearTimeout(timeout);
        delete config.one;
        delete config.two;
        delete config.three;
    } finally {
        callback();
    }
}
