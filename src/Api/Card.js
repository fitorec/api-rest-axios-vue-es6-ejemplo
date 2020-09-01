import Model from "./Model";
import has from "has";

export default class Card extends Model{
  constructor (axiosInstance) {
    super(axiosInstance);
  }
  // modo async
  async getCards() {
    const response = await this.get('/cards');
    if (has(response, "cards")) {
      return response.cards;
    }
    // cachar error y devolver vacio
    return [];
  }

  async search(q = "") {
    const response = await this.get(`/cards?name=${q}`);
    if (has(response, "cards")) {
      return response.cards;
    }
    // cachar error y devolver vacio
    return [];
  }
}
