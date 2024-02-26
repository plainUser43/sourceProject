<template>
  <div>
  <table v-for = "(source, index) in sourceInfo" :key='index'>
    <tr><td></td><td class="button_td"><form><button>Пост {{source.sourceId}}</button></form></td></tr>
    <tr><td>Uвых</td><td>{{source.params[0]}}</td></tr>
    <tr><td>Uнак</td><td>{{source.params[0]}}</td></tr>
    <tr><td>Fluc</td><td>{{source.params[2]}}</td></tr>
    <tr><td>Alg.step</td><td>{{source.time}}</td></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['sourceInfo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
