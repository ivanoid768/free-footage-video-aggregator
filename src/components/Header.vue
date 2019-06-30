<template>
    <div class="header">
        <Title
            title="The best video footages from top free footage sources!" />
        <Navigation @on-search="onSearch" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Navigation from "@/components/Navigation.vue";

@Component({
    components: {
        Title,
        Navigation
    }
})
export default class Header extends Vue {
    @Prop() private msg!: string;

    private onSearch(search_val: string) {
        console.log(search_val);
        this.$store.commit("setSearch", {
            search: search_val
        });
    }
}
</script>

<style scoped>
.header {
    height: 100%;
}
</style>
