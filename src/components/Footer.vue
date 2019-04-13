<template>
  <div class="footer">
    <div class="name-cntr">
      <span class="name">Developed by Ivanoid256</span>
    </div>
    <div class="contacts-cntr">
      <span class="contacts">
        <a href="https://github.com/ivanoid768"
          class="github-link">GitHub</a>
        <a href="mailto:ivanoid768@india.com"
          class="email">E-mail</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  display: table;
  width: 100%;
}
.name-cntr {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  width: 50%;
  padding-right: 5px;
}
.name {
}
.contacts-cntr {
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 50%;
  padding-left: 5px;
}

@media (max-width: 551px) {
  .name-cntr {
    width: 65%;
  }
}
.contacts {
}
.github-link {
  display: block;
  margin-bottom: 2px;
}
.email {
  display: block;
}
</style>
