<template>
    <el-row>
        <el-col :span="16" :offset="0.5">
            <el-container style="height: 35em">
                <el-aside width="200px" style="overflow: hidden">
                    <el-card class="box-card" style="width: 200px;height: 100%;padding: 0;margin: 0">
                        <el-menu style="border: 0">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>主页</span>
                                </template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项1</el-menu-item>
                                <el-menu-item index="1-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-tickets"></i>
                                    <span>投稿</span>
                                </template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项1</el-menu-item>
                                <el-menu-item index="2-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>管理</span>
                                </template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项1</el-menu-item>
                                <el-menu-item index="3-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>数据</span>
                                </template>
                                <el-menu-item index="4-1">选项1</el-menu-item>
                                <el-menu-item index="4-2">选项1</el-menu-item>
                                <el-menu-item index="4-3">选项1</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-card>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-col>
    </el-row>
</template>

<style lang="scss">

</style>

<script>

</script>