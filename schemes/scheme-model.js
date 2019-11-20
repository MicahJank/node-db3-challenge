const db = require('../data/db-config.js');

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id }).first();
};

function findSteps(id) {
    return db('steps')
           .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
           .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
           .where({ scheme_id: id })
           .orderBy('steps.step_number');
};

module.exports = {
    find,
    findById,
    findSteps
}