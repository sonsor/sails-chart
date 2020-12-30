parasails.registerPage('homepage', {
  data: {
    ctx: null
  },
  mounted: async function () {
    this.ctx = document.getElementById('myChart').getContext('2d');
    this.subscribe();
  },
  methods: {

    subscribe: async function () {
      io.socket.get('/dashboard/join', (data, jwRes) => {
        io.socket.on('dashboard', (data) => {
          this.render(data);
        });
      });
    },
    render: function (data) {
      var config = {
        type: 'doughnut',
        data: {
          labels: false,
          datasets: [{
            data: data.data,
            backgroundColor: [
              '#2980B9',
              '#229954'
            ],
          }]
        },
        options: {
          cutoutPercentage: 75,
          maintainAspectRatio: false,
          responsive: true,
          elements: {
            top: {
              text: `${Number(data.btc).toFixed(2)} BTC`,
              color: '#a0a0a0', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 5, // Default is 20 (as a percentage)
              minFontSize: 12, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 1 // Default is 25 (in px), used for when text wraps
            },
            center: {
              text: `$${Number(data.usd).toFixed(2)}`,
              color: '#000000', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 5, // Default is 20 (as a percentage)
              minFontSize: 12, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 1 // Default is 25 (in px), used for when text wraps
            },
            bottom: {
              text: `$${Number(data.buyIn).toFixed(0)}`,
              color: '#a0a0a0', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 5, // Default is 20 (as a percentage)
              minFontSize: 12, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 1 // Default is 25 (in px), used for when text wraps
            },
            bottomDown: {
              text: 'Buy in',
              color: '#a0a0a0', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 5, // Default is 20 (as a percentage)
              minFontSize: 12, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 1 // Default is 25 (in px), used for when text wraps
            }
          }
        }
      };
      new Chart(this.ctx, config);
    }
  }
});
