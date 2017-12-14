const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/./config/config.json`)[env];

const Promise = require('bluebird');

const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')(initOptions);


//  Connection
const connectionString = 'postgres://' + config.username + ':' + config.password + '@localhost:' + config.port + '/' + config.database;
const client = pgp(connectionString);


//Query Functions
function getAll(req, res, next) {
    client.any('SELECT * FROM prefeitura')
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = { getAll: getAll };
