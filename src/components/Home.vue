<template>
  <div class="hello">
    <h1>{{ query }}</h1>
    <pokemon-card
    v-for="(c,i) in cards"
    :card="c"
    :key="i"
    :query="query"
    />
  </div>
</template>

<script>
import card from "./Card";

export default {
  name: 'Home',
  components: {
    'pokemon-card': card
  },
  props: {
    query: String
  },
  data: function() {
    return {
      cards: []
    };
  },
  mounted: function() {
    this.loadAllCards();
  },
  methods: {
    loadAllCards: async function() {
      this.cards = await this.Api.cards.getCards();
    },
    search: async function(q) {
      this.cards= await this.Api.cards.search(q);
    }
  },
  watch: {
    query: function (newQuery) {
      if (newQuery.length < 2) {
        return;
      }
      this.search(newQuery);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
  display: flex;
  flex: 50%;
}
.card .img, .card .info {
  flex: 50%;
}
.card .info {
  
}
</style>
