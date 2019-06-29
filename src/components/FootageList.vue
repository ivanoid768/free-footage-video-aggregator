<template>
    <div class="footage-list-cntr">
        <footage-list-item :footage="footage"
            v-for="(footage,index) in footages"
            :key="index" :videoId="index" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FootageListItemComponent from "@/components/FootageListItem.vue";

import getFootages, { FootageListItem } from "@/requestAPIs/getFootageList";

@Component({
    components: {
        "footage-list-item": FootageListItemComponent
    }
})
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
</style>
