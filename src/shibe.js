export class Shibe {
  async getShibe() {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]&appid=${process.env.DOG_API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}

export class Cat {
  async getCat() {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/shibe.online/api/cats?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]&appid=${process.env.CAT_API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}

export class Bird {
  async getBird() {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/shibe.online/api/birds?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]&appid=${process.env.BIRD_API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}