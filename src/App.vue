<template>
  <div id="app">
    <div class="main_cntr">
      <div class="header">
        <Header />
      </div>
      <div class="content">
        <router-view />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0px;
}
.main_cntr {
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}
.header {
  height: 120px;
  background-color: greenyellow;
}
.footer {
  height: 100px;
  background-color: greenyellow;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.content {
  /* min-height: 70vh; */
  padding-bottom: 100px;
}
</style>
