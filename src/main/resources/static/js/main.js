var sourceApi = Vue.resource('/sources{/id}');

Vue.component('out-voltage-cell', {
    props: ['sourceInfo'],
    template: '<div>'
    + '<table v-for="source in sourceInfo">'
    + '<tr><td></td><td class="button_td"><form action=""><button @click="selected=full">Пост {{source.sourceId}}</button></form></td></tr>'
    + '<tr><td>Uвых</td><td>{{source.params[1]}}</td></tr>'
    + '<tr><td>Uнак</td><td>{{source.params[0]}}</td></tr>'
    + '<tr><td>Fluc</td><td>{{source.params[2]}}</td></tr>'
     + '<tr><td>Alg.step</td><td>{{source.time}}</td></tr>'
    + '</table></div>'
    }
)

Vue.component('full-table', {

})

var app = new Vue({
  el: '#app',
  template: '<out-voltage-cell :sourceInfo="sourceInfo" />',
  data: () => ({
    sourceInfo: [],
    show: ["full", "short"],
    selected: null,
  }),
  created: function() {
    sourceApi.get().then(response => this.sourceInfo = response.body)
  }
})

