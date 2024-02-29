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
    +    '<p>Training monitoring service</p>'
    + '</div>'
    + '<div class="back-button" v-if="show2"><form v-on:submit.prevent="show2 = !show2;"><button class="btn-new">Назад</button></form></div>'
    + '<div v-if="show2"><full-table :sourceNumber="sourceNumber"/></div>'
            + '<div v-else>'
                + '<table class="table" v-for="source in sourceInfo">'
                + '<thead>'
                + '<tr><td></td><td class="button_td"><form v-on:submit.prevent="buttonClick(source.sourceId)"><button class="btn-new1">Пост {{source.sourceId}}</button></form></td></tr>'
                + '</thead>'
                + '<tbody>'
                + '<tr><td>Uвых</td><td>{{source.params[1]}}</td></tr>'
                + '<tr><td>Ia</td><td>{{source.params[11]}}</td></tr>'
                + '<tr><td>Uнак</td><td>{{source.params[0]}}</td></tr>'
                + '<tr><td>Флуктуация</td><td>{{source.params[3]}}</td></tr>'
                + '</tbody>'
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
      '<div class="div-full">'
      + '<table class="full">'
      + '<tr><td></td><td class="button_td info">Пост {{sourceId}}</td></tr>'
      + '<tr><td>Uвых</td><td class="info">{{params[1]}}</td></tr>'
      + '<tr><td>Ia</td><td class="info">{{params[11]}}</td></tr>'
      + '<tr><td>Uнак</td><td class="info">{{params[0]}}</td></tr>'
      + '<tr><td>Частота</td><td class="info">{{params[2]}}</td></tr>'
      + '<tr><td>Флуктуация</td><td class="info">{{params[3]}}</td></tr>'
      + '<tr><td>Tимп</td><td class="info">{{params[0]}}</td></tr>'
      + '<tr><td>Время</td><td class="info">{{time}}</td></tr>'
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

