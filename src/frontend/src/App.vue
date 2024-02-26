<template>
  <HelloWorld :sourceInfo="sourceInfo"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {computed} from "vue";
import {useFetch} from '@vueuse/core'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      sourceInfo: []
    }
  },
  created() {
    useFetch(url).json().then(response => this.sourceInfo = response)
  }
}
const url = computed(()=> {
  return '/sources'
})
</script>

<style>
table {
  float: left;
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 1.2rem;
  padding: 7pt;
  margin-top: 0pt;
  margin-left: 10pt;
  margin-right: 10pt;
  margin-bottom: 10pt;
}

td, th {
  border: 1px solid rgb(190,190,190);
  padding: 5px 13px;
  margin: 5px;
  width: 20px;
}

th {
  background-color: rgb(235,235,235);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250,250,250);
}

tr:nth-child(odd) td {
  background-color: rgb(245,245,245);
}

caption {
  padding: 10px;
}

div {
  align-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  margin: 0pt;
  padding: 5pt;
  font-size: large;
}

.button_td {
  padding: 0px;
  width: 1cm;
  height: 1cm;
}
</style>
