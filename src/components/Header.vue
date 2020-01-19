<template>
    <div class="header">
        <div>
            <van-icon
                v-if="pageInfoComputed.icon.arrow === 'left'"
                :name="pageInfoComputed.icon.name"
                size="1.5rem"
                @click="leftHandle"
            />
        </div>
        <h3>{{ pageInfoComputed.title }}</h3>
        <div>
            <van-icon
                v-if="pageInfoComputed.icon.arrow === 'right'"
                :name="pageInfoComputed.icon.name"
                size="1.5rem"
                @click="rightHandle"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
    private leftHandle () {
        this.$router.back()
    }

    private rightHandle () {
        this.$router.push({ path: '/create' })
    }

    private get pageInfoComputed () {
        const currentRouteName = this.$route.name
        switch (currentRouteName) {
        case 'home':
            return {
                icon: {
                    name: 'plus',
                    arrow: 'right'
                },
                title: '我的待办'
            }
        case 'create':
            return {
                icon: {
                    name: 'arrow-left',
                    arrow: 'left'
                },
                title: '新建任务'
            }

        default:
            return ''
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    align-items: center;
    grid-row-end: end;
    width: 100%;
    height: 3.5rem;
    min-height: 8%;
    background-color: #fff;
}
</style>
