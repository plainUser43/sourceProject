var sourceApi = Vue.resource('/sources{/id}');

Vue.component('out-voltage-cell', {
    props: ['sourceInfo'],
    template:
    '<div>'
    + '<table v-for="source in sourceInfo">'
    + '<tr><td></td><td class="button_td"><form><button>Пост {{source.sourceId}}</button></form></td></tr>'
    + '<tr><td>Uвых</td><td>{{source.params[1]}}</td></tr>'
    + '<tr><td>Uнак</td><td>{{source.params[0]}}</td></tr>'
    + '<tr><td>Fluc</td><td>{{source.params[2]}}</td></tr>'
    + '<tr><td>Alg.step</td><td>{{source.time}}</td></tr>'
    + '</table>'
    + '</div>'
    }
)

Vue.component('full-table', {
  props: ['sourceInfo'],
  data() {
    return {
      show1: Boolean
    }
  },
  template:
      '<div>'
      + '<table>'
      + '<tr><td></td><td class="button_td"><form v-on:submit.prevent="show1 = !show1"><button>Пост {{sourceInfo[0].sourceId}}</button></form></td></tr>'
      + '<tr v-show="show1"><td>Uвых</td><td>{{sourceInfo[0].params[1]}}</td></tr>'
      + '<tr><td>Uнак</td><td>{{sourceInfo[0].params[0]}}</td></tr>'
      + '<tr><td>Fluc</td><td>{{sourceInfo[0].params[2]}}</td></tr>'
      + '<tr><td>Alg.step</td><td>{{sourceInfo[0].time}}</td></tr>'
      + '</table>'
      + '</div>'
})

var app = new Vue({
  el: '#app',
  template: '<div v-if="show"><out-voltage-cell :sourceInfo="sourceInfo" /></div>'
  + '<div v-else><full-table :sourceInfo="sourceInfo"/></div>',
  data() {
    return {
      sourceInfo: [],
      show: false
    }

  },
  created: function() {
    sourceApi.get().then(response => this.sourceInfo = response.body)
  }
})

