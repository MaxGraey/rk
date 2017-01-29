'use strict';

module.exports = function rk() {
    var result = arguments[0];
    for (var i = 1, len = arguments.length; i < len; i++)
        result += ':' + arguments[i];
    return result;
};
