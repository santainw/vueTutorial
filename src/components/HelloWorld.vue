<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ test }}
    <button @click="getData">test</button>
    {{ user }}
  </div>
</template>

<script>
import { APIService } from '../APIService'
let s = 'test'
const apiService = new APIService();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      test: s,
      user: [],
    }
  },
  methods: {
    getData() {
      apiService.getData().then((data)=>{
        console.log(data)
        this.user = data.data;
      })
    }
  }
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
