export class Shibe {
  async getShibe(location) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]&appid=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}