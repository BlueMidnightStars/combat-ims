const model = require('./base.js');
class mood extends model {
    constructor(props = 'article') {
        super(props)
    }
}
module.exports = new mood();