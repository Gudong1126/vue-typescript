<template>
    <div class="iconSetting">
        <!-- 当前图表 -->
        <section class="icon">
            <Circles class="cir" :activeColor="colorComputed" radius="3.5rem">
                <icon :name="iconComputed" slot="icon" />
            </Circles>
        </section>
        <!-- 任务名称 -->
        <section>
            <van-cell-group>
                <van-field
                    v-model="nameComputed"
                    value="新任务"
                    input-align="center"
                    clickable
                    maxlength="6"
                    placeholder="请输入任务名"
                />
            </van-cell-group>
        </section>
        <!-- 备选图标 -->
        <section class="alternative">
            <div
                class="alternativeIcon"
                v-for="(item, index) in iconSetting"
                :key="index"
                @click="handleIconHandle(item)"
            >
                <icon :name="item" />
            </div>
        </section>
        <!-- 图标背景 -->
        <section class="colorSetting">
            <div
                class="background"
                v-for="(item, index) in colorSetting"
                :key="index"
                @click="changeColorHandle(item)"
            >
                <div v-bind:style="{ backgroundColor: item }"></div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Circles from '../components/Circle.vue'
import { config } from '../config/config'
import { ITodoItem } from '../store/state'
import { Mutation, Getter } from 'vuex-class'
import { _ } from '../utils'

@Component({
    components: { Circles }
})
export default class Create extends Vue {
    private iconSetting: string[] = config.iconSetting
    private colorSetting: string[] = config.colorSetting
    private id!: string
    private index!: number
    private currentItem!: ITodoItem

    @Mutation
    private selectColor!: (payload: { id: string; color: string }) => void
    @Mutation
    private selectIcon!: (payload: { id: string; icon: string }) => void
    @Mutation
    private changeName!: (payload: { id: string; value: string }) => void
    @Getter
    private getCurrentTodoList!: ITodoItem[]

    // 计算当前icon名称
    private get iconComputed () {
        const currentItem = _.find(this.getCurrentTodoList, this.id)
        const { iconName } = currentItem!
        return iconName
    }

    // 计算当前背景颜色
    private get colorComputed () {
        const currentItem = _.find(this.getCurrentTodoList, this.id)
        const { color } = currentItem!
        return color
    }

    private get nameComputed () {
        const todo = _.find(this.getCurrentTodoList, this.id)
        return todo!.name
    }

    private set nameComputed (name) {
        this.changeName({ id: this.id, value: name })
    }

    // 获取当前将要创建的todo的id
    private mounted () {
        const list = this.getCurrentTodoList
        this.index = list.length - 1
        const currentItem = list[this.index]
        this.id = currentItem.id
    }

    private changeColorHandle (color: string) {
        this.selectColor({ id: this.id, color })
    }

    private handleIconHandle (name: string) {
        this.selectIcon({ id: this.id, icon: name })
    }
}
</script>

<style lang="less" scoped>
.iconSetting {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .icon {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 4rem;
        margin-top: 1rem;
        .cir {
            border-radius: 50%;
            border: solid black 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            svg {
                margin: 0;
                width: 95%;
                height: 95%;
            }
        }
    }
    .alternative {
        margin: 2rem;
        height: 10rem;
        width: 100%;
        overflow: auto;
        .alternativeIcon {
            display: inline-block;
            svg {
                width: 2rem;
                height: 2rem;
                border: none;
                margin: 0.8rem;
            }
        }
    }
    .colorSetting {
        margin: 2rem;
        height: 15rem;
        width: 100%;
        overflow: auto;
        .background {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            div {
                display: block;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                margin: 0.5rem;
            }
        }
    }
}
</style>
