<template>
  <div class="navigation_cntr">
    <div class="menu_cntr">
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div class="search_cntr">
      <el-input @keypress.native.enter="searchInputChanged"
        v-model="searchInput" placeholder="Search footages by some keywords"
        class="search_input">
        <el-button @click="searchInputChanged"
          slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  @Prop() private title!: string;
  searchInput: string = "";

  @Emit("on-search")
  searchInputChanged(e: Event) {
    // if (e.type != "keypress" || e.target.tagName == "INPUT") {
    // console.log(e, this.searchInput);
    // }
    return this.searchInput;
  }

  onBlur(e: Event) {
    console.log(e);
  }
}
</script>

<style scoped>
.navigation_cntr {
  display: table;
}

.menu_cntr {
  display: table-cell;
  width: 1%;
}

.menu {
  white-space: nowrap;
  padding-left: 10px;
}

.menu-item {
  display: inline;
  margin-right: 5px;
}

.search_cntr {
  display: table-cell;
  width: 100%;
  padding-right: 5px;
}
</style>
