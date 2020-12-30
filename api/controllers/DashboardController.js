/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

function getRandomData() {
  return {
    data: [
      Math.random() * 1000,
      Math.random() * 100000,
    ],
    btc: Math.random() * 10,
    usd: Math.random() * 100000,
    buyIn: Math.random() * 10000
  }
}

module.exports = {
  join: function(req, res) {
    if (!req.isSocket) {
      return res.badRequest();
    }

    sails.sockets.join(req, 'exchangeRates');

    setTimeout(() => {
      sails.sockets.broadcast('exchangeRates', 'dashboard', getRandomData());
    }, 500)

    setInterval(() => {
      sails.sockets.broadcast('exchangeRates', 'dashboard', getRandomData());
    }, 60000)

    return res.json({
      status: true
    })
  }

};

