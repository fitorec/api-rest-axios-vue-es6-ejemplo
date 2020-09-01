<template>
  <div id="app">
    <input type="text" placeholder="Buscar una carta" v-model="q">
    <button class="btn">
      🔍 Buscar
    </button>
    <Home :query="q"/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  data: function (){
    return {q: ""};
  },
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
