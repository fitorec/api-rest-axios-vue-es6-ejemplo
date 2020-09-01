<template>
<div class="card">
    <img :src="card.imageUrl" class="img">
    <table class="info">
      <thead>
        <tr>
          <th colspan="2" v-html="titulo">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tipo(s):</td>
          <td>{{ card.types }}</td>
        </tr>
        <tr>
          <td>subtype:</td>
          <td>{{ card.subtype }}</td>
        </tr>
        <tr>
          <td>evolvesFrom:</td>
          <td>{{ card.evolvesFrom }}</td>
        </tr>
        <tr>
          <td>Puntos de combate:</td>
          <td>{{ card.hp }}</td>
        </tr>
        <tr>
          <td>Numero:</td>
          <td>{{ card.number }}</td>
        </tr>
        <tr>
          <td>Artista:</td>
          <td>{{ card.artist }}</td>
        </tr>
        <!-- mustra toda la info
        <tr>
          <td colspan="2">
            <pre>{{ c }}</pre>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'PokemonCard',
  props: {
    card: Object,
    query: String
  },
  computed: {
    titulo() {
      var regEx = new RegExp(this.query, "ig");
      return this.card.name.replace(
        regEx,
        "<span class='resaltar'>" + this.query + "</span>"
      );
    }
  }
}
</script>

<style>
.card {
  display: flex;
  flex: 50%;
}
.card .img, .card .info {
  flex: 50%;
}
.card .info {
  
}

span.resaltar {
  color: #000;
  background-color: yellow;
}
</style>
