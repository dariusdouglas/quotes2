const axios = require('axios');

const api = {
  get: async url => {
    // const response = await axios.get(url);
    // return response.data;
    return [
      {
        quote:
          'Back in Edinburg, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!',
        character: 'Groundskeeper Willie',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063',
        characterDirection: 'Right'
      },
      {
        quote: "But my mom says I'm cool.",
        character: 'Milhouse Van Houten',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
        characterDirection: 'Right'
      },
      {
        quote: 'Oh, so they have Internet on computers now!',
        character: 'Homer Simpson',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        characterDirection: 'Right'
      },
      {
        quote: 'Ahh! Sweet liquor eases the pain.',
        character: 'Troy McClure',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
        characterDirection: 'Right'
      }
    ];
  }
};

export default api;
