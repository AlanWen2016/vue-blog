<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-container>
                <el-aside width="300px">
                    <el-card class="box-card box-card-user-info" shadow="never">
                        <div slot="header" class="clearfix">
                            <span>用户信息</span>
                        </div>
                        <img  src="~Assets/img/content.png">
                    </el-card>
                    <el-card class="box-card" shadow="never">
                        <div slot="header" class="clearfix">
                            <span>博客标签</span>
                        </div>
                        <el-tag>标签一</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="warning">标签四</el-tag>   <el-tag>标签一</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                    </el-card>
                </el-aside>

                <el-container class="el-main-right">
                    <!-- 右边主体[[ -->
                    <router-view></router-view>
                    <!-- 右边主体]] -->
                </el-container>
            </el-container>
            <div class="line"></div>
        </el-col>
    </el-row>
</template>

<style lang="scss">

</style>

<script>

</script>