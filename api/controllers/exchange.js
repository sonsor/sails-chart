module.exports = {


  friendlyName: 'Exchange',


  description: 'Exchange something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    if (this.req.isSocket) {
      return   this.res.json({
        correlationId: sails.socket.getId(this.req),
        status: 'connected'
      })
    }

    return this.res.json({
      status: true
    })

  }


};
