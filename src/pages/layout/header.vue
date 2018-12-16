<template>
    <el-row :gutter="20">
        <el-col :span="4" :offset="4" style="height: 60px;font-size:24px;font-weight: bold; color: #e6a23c">
            <div style="width:250px;height:60px">
                <img class="img-logo" src="~Assets/img/logof.png">
            </div>
        </el-col>
        <el-col :span="12" :offset="0">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">博客</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">项目</el-menu-item>
                <el-menu-item index="3"><a href="javascript:;" target="_blank">关于</a></el-menu-item>
                <el-submenu index="4">
                    <template slot="title">更多</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <div style="display: inline-block;line-height: 60px;float: right">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-menu>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "header-bar",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input5:''
            }
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

<style scoped>
   
</style>
