<template>
    <div class="home">
        <FootageList />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FootageList from "@/components/FootageList.vue";

@Component({
    components: {
        FootageList
    }
})
export default class Home extends Vue {}
</script>
