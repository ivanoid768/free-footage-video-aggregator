<template>
    <div class="footage-list-cntr">
        <footage-list-item :footage="footage"
            v-for="(footage,index) in footages"
            :key="index" :videoId="index" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import FootageListItemComponent from "@/components/FootageListItem.vue";

import getFootages, { FootageListItem } from "@/requestAPIs/getFootageList";
import { mapState } from "vuex";

@Component({
    components: {
        "footage-list-item": FootageListItemComponent
    },
    computed: mapState({
        search: "search_input"
    })
})
export default class FootageList extends Vue {
    private footages: FootageListItem[] = [];
    private footagesLoaded: boolean = false;
    private search!: string;

    mounted() {
        console.log("mounted");
        getFootages(1, 20, this.search).then(
            footages => (this.footages = footages)
        );
    }

    @Watch("search")
    private onSearch(search: string) {
        getFootages(1, 20, search).then(footages => (this.footages = footages));
    }
}
</script>

<style scoped>
.footage-list-cntr {
    /* height: 100%; */
    padding: 5px 5px;
}
</style>
