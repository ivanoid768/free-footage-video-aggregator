<template>
  <div class="title_cntr">
    <div class="title">{{title}}</div>
    <div class="source-list">
      <div class="source-item-cntr">
        <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" class="source-link">
          <img class="source-logo" src="https://via.placeholder.com/30.png?text=Py"
            alt="pixabay_logo">
        </a>
      </div>
      <div class="source-item-cntr">
        <a href="https://pexels.com" target="_blank" rel="noopener noreferrer" class="source-link">
          <img class="source-logo" src="https://via.placeholder.com/30.png?text=Ps"
            alt="pexels_logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
.title_cntr {
	    display: table;
    height: 70px;
    width: 100%;
    border-bottom: 1px #ccc solid;
}
.title {
	display: table-cell;
    /* height: 70px; */
    width: 100%;
    vertical-align: middle;
    padding-left: 10px;
    font-size: 1.3em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
		max-width: 0;
}
.source-list {
	    display: none;
    white-space: nowrap;
    vertical-align: middle;
    padding-right: 10px;
}

@media(min-width:768px){
.source-list {
	    display: table-cell;
}	
}

.source-item-cntr {
	    display: inline;
    margin-left: 5px;
}
.source-link {
}
.source-logo {
}

</style>
