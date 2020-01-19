const store = require('../../../store/dummy');

const TABLA = 'user';

function list() {
    return store.list(TABLA);
}

module.exports = {
    list
}