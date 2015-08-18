var obj = require('javascript-object-paraphernalia');

var Config = (
    function(){
        function Config(options) {}

        /**
         * @description load a json object and merge it's properties with the config object
         *
         * @param {Object} options
         * @returns {boolean} on success/failure of merge operation
         */
        Config.prototype.load = function(options) {
            try {
                obj.merge(this, options);
                return true;
            } catch (e) {
                return false;
            }
        }

        return new Config();
    })();

module.exports = Config;

