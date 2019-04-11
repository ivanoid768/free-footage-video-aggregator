<template>
  <div class="header">
    <Title title="The best video footages from top free footage sources!" />
    <!-- <Navigation/> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Title from "@/components/Title.vue";

@Component({
  components: {
    Title
  }
})
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100%;
}
</style>
