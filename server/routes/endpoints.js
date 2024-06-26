const auth = require('./auth/auth');
const greenhouses = require('./greenhouses');
const plants = require('./plants');
const greenhousesUsers = require('./greenhousesUsers');
const greenhousesPlants = require('./greenhousesPlants');
const locations = require('./locations');
const weather = require('./weather');
const users = require('./users');

module.exports = {
    auth,
    greenhouses,
    greenhousesUsers,
    plants,
    greenhousesPlants,
    locations,
    weather,
    users
}

