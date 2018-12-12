<template>
    <div id="my-pages">
        <el-container>
            <el-header>
                <header-bar></header-bar>
            </el-header>

            <el-row>
                <div>
                    <table>
                        <tr v-for="i in 4">
                            <td>1234
                                {{ i }}
                            </td>

                        </tr>
                    </table>

                </div>
                <el-col :span="16" :offset="4" class="el-main">
                    <el-container>
                        <el-aside width="300px">
                            <el-col :span="24">
                                <el-menu
                                        default-active="2"
                                        class="el-menu-vertical-demo"
                                        @open="handleOpen"
                                        @close="handleClose">
                                    <el-submenu index="1">
                                        <template slot="title">
                                            <i class="el-icon-location"></i>
                                            <span>导航一</span>
                                        </template>
                                        <el-menu-item-group>
                                            <template slot="title">分组一</template>
                                            <el-menu-item index="1-1">选项1</el-menu-item>
                                            <el-menu-item index="1-2">选项2</el-menu-item>
                                        </el-menu-item-group>
                                        <el-menu-item-group title="分组2">
                                            <el-menu-item index="1-3">选项3</el-menu-item>
                                        </el-menu-item-group>
                                        <el-submenu index="1-4">
                                            <template slot="title">选项4</template>
                                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                                        </el-submenu>
                                    </el-submenu>
                                    <el-menu-item index="2">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">导航二</span>
                                    </el-menu-item>
                                    <el-menu-item index="3" disabled>
                                        <i class="el-icon-document"></i>
                                        <span slot="title">导航三</span>
                                    </el-menu-item>
                                    <el-menu-item index="4">
                                        <i class="el-icon-setting"></i>
                                        <span slot="title">导航四</span>
                                    </el-menu-item>
                                </el-menu>
                            </el-col>
                        </el-aside>
                        <el-container class="el-main-right">
                            <!-- 右边主体[[ -->
                            <router-view></router-view>
                            <!-- 右边主体]] -->
                        </el-container>
                    </el-container>

                    <el-footer>Footer</el-footer>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>
<style lang="scss">
    body {
        background-color: #eee;
        color: #333;
    }
    .el-footer {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 60px;
        margin-top: 1em;
    }
    .el-header {
        /*background-color: #2B3A42;*/
        background-color: #fff;
    }
    .el-main-right{
        background-color: white;
    }
    .el-aside {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 200px;
        margin-right: 1em;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>



<script>
import headerBar from './header';
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            input5:''
        }
    },
    components:{
        headerBar
    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen() {
        },
        handleClose() {
        },


    },
}
</script>
