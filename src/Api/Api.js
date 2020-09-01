import axios from "axios";
import Card from "./Card";
import Model from "./Model";


/**
 * Clase Single del API
 */
class ApiRest {
  constructor () {
    if (typeof ApiRest.instance === 'object') {
      return ApiRest.instance;
    }
    const defaultValues = {
      baseURL: "https://api.pokemontcg.io/v1",
      headers: {
        common: {Accept: "application/json, text/plain, */*"},
        post: {"Content-Type": "application/json"}
      }
    };
    this.axios = axios.create(defaultValues);
    ApiRest.instance = this;
    return this;
  }
  // otros metodos por ejemplo uno que inicie sesion
  startSession(token = "") {
    this.axios.defaults.withCredentials = true;
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}


/**
 * Vue plugin
 *
 */
class ApiVue {
    static install(Vue) {
      if (ApiVue.loaded) {
        return;
      }
      const apiRest = new ApiRest();
      const Api = {
        base: new Model(apiRest.axios),
        cards: new Card(apiRest.axios),
      };
      Vue.mixin({
        data() {
          return {Api};
        }
      });
      ApiVue.loaded = true;
    }
}

export {
  ApiRest,
  ApiVue,
};
