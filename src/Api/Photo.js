export default class Photo {
  constructor (api) {
    this.api = api;
  }
  async getCats() {
    try {
      const cats = await this.api.get('tags=cats+vue&tagmode=any&format=json');
      return cats;
    } catch(e) {
      return new Error(e);
    }
  }
}