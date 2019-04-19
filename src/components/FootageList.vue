<template>
  <div class="footage-list-cntr">
    <el-card class="footage-item" v-for="(footage,index) in footages"
      :key="index">
      <div class="footage-name" slot="header">
        <span class="footage-name">{{footage.name}}</span>
      </div>
      <video class="footage-preview" muted loop
        preload="metadata" :src="footage.url"></video>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import Title from "@/components/Title.vue";

import getFootages, { FootageListItem } from "@/requestAPIs/getFootageList";

@Component({})
export default class FootageList extends Vue {
  // @Prop() private msg!: string;

  private footages: FootageListItem[] = [];
  private footagesLoaded: boolean = false;

  mounted() {
    console.log("mounted");
    getFootages().then(footages => (this.footages = footages));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footage-list-cntr {
  /* height: 100%; */
  padding: 5px 5px;
}
.footage-item {
  display: inline-block;
  margin: 0px 2px;
}
.footage-name {
  width: 28vw;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footage-preview {
  width: 28vw;
  min-height: 17vw;
}
</style>
