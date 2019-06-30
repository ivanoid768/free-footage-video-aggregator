<template>
    <el-card class="footage-item">
        <div class="footage-name" slot="header">
            <span
                class="footage-name">{{footage.name}}</span>
        </div>
        <video @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
            class="footage-preview" muted loop
            preload="metadata" :id="videoId"
            :src="footage.url"></video>
    </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FootageListItem extends Vue {
    @Prop() private footage!: FootageListItem;
    @Prop() private videoId!: string;

    private isPlay: boolean = false;

    private onMouseEnter(e: MouseEvent) {
        let target: any = e.target ? e.target : null;
        target.play && target.play();
    }

    private onMouseLeave(e: MouseEvent) {
        let target: any = e.target ? e.target : null;
        target.play && target.pause();
    }
}
</script>

<style scoped>
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
@media (min-width: 1440px) {
    .footage-preview {
        width: 22.43vw;
        min-height: 12vw;
    }
    .footage-name {
        width: 22.43vw;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
