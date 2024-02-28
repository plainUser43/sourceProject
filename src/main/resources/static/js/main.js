var sourceApi = Vue.resource('/sources{/id}');

Vue.component('out-voltage-cell', {
    created: function() {
        sourceApi.get().then(response => this.sourceInfo = response.body)
    },
    updated: function() {
            sourceApi.get().then(response => this.sourceInfo = response.body)
        },
    data() {
        return {
          sourceInfo: [],
          show2: false,
          sourceNumber: Number
        }
    },
    methods: {
        buttonClick(number) {
            this.show2 = !this.show2
            this.sourceNumber = number
        }
    },
    template:
    '<div>'
    + '<div class="navbar">'
    +    '<p>Training monitoring system</p>'
    + '</div>'
    + '<div class="back-button" v-if="show2"><form v-on:submit.prevent="show2 = !show2;"><button>Назад</button></form></div>'
    + '<div v-if="show2"><full-table :sourceNumber="sourceNumber"/></div>'
            + '<div v-else>'
                + '<table v-for="source in sourceInfo">'
                + '<tr><td></td><td class="button_td"><form v-on:submit.prevent="buttonClick(source.sourceId)"><button>Пост {{source.sourceId}}</button></form></td></tr>'
                + '<tr><td>Uвых</td><td>{{source.params[1]}}</td></tr>'
                + '<tr><td>Ia</td><td>{{source.params[11]}}</td></tr>'
                + '<tr><td>Uнак</td><td>{{source.params[0]}}</td></tr>'
                + '<tr><td>Fluc</td><td>{{source.params[3]}}</td></tr>'
                + '</table>'
            + '</div>'
    + '</div>'
    }
)

Vue.component('full-table', {
  props: ['sourceNumber'],
  data() {
    return {
        sourceId: Number,
        magnetronId: Number,
        params: [],
        time: Number,
        show1: Boolean,
        source: this.sourceNumber
    }
  },
  created: function() {
      fetch('http://localhost:8080/sources/' + this.source, {
                      method: "GET"
                    })
                      .then((response) => response.json())
                      .then(json => {
                                     this.params = json.params
                                     this.time = json.time
                                     this.sourceId = json.sourceId
                                     this.magnetronId = json.magnetronId
                                     });
  },
  updated: function() {
        fetch('http://localhost:8080/sources/' + this.source, {
                        method: "GET"
                      })
                        .then((response) => response.json())
                        .then(json => {
                                       this.params = json.params
                                       this.time = json.time
                                       this.sourceId = json.sourceId
                                       this.magnetronId = json.magnetronId
                                       });
    },
  template:
      '<div>'
      + '<table>'
      + '<tr><td></td><td class="button_td">Пост {{sourceId}}</td></tr>'
      + '<tr><td>Uвых</td><td>{{params[1]}}</td></tr>'
      + '<tr><td>Ia</td><td>{{params[11]}}</td></tr>'
      + '<tr><td>Uнак</td><td>{{params[0]}}</td></tr>'
      + '<tr><td>Freq</td><td>{{params[2]}}</td></tr>'
      + '<tr><td>Fluc</td><td>{{params[3]}}</td></tr>'
      + '<tr><td>Tимп</td><td>{{params[0]}}</td></tr>'
      + '<tr><td>Time</td><td>{{time}}</td></tr>'
      + '</table>'
      + '</div>'
})

var app = new Vue({
  el: '#app',
  template: '<div v-if="show"><out-voltage-cell/></div>'
  + '<div v-else><full-table/></div>',
  data() {
    return {
      show: true
    }
  },
})

