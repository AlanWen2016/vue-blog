<template>
    <div style="text-align: center">
        <el-container style="display:flex; justify-content:center;">
            <el-aside width="300px">
                <el-card class="box-card box-card-user-info" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>用户信息</span>
                    </div>
                    <img  src="~Assets/img/content.png">
                </el-card>
                <el-card class="box-card blog-tag-box" shadow="never">
                    <div slot="header" class="clearfix">
                        <span>博客标签</span>
                    </div>
                    <el-tag v-for="tag in tagList" :type="tag.type" :key="tag.id">{{ tag.value }}</el-tag>
                </el-card></el-aside>
            <el-main class="el-main-right">
                <!-- 右边主体[[ -->
                <router-view></router-view>
                <!-- 右边主体]] -->
            </el-main>
        </el-container>
        <div class="line"></div>
    </div>

</template>

<style lang="scss">
    .blog-tag-box .el-tag{
        margin: 3px;
        cursor: pointer;
    }
    .el-main-right{ background: #fff;max-width: 900px}
</style>

<script>
    export default {
        data() {
            return {
                tagList:[
                    {id:1, value:"JavaScript", type:""},
                    {id:2, value:"PHP", type:"success"},
                    {id:3, value:"Go", type:"info"},
                    {id:4, value:"前端开发", type:"warning"},
                    {id:5, value:"杂记", type:"info"},
                    {id:6, value:"H5", type:"success"},
                ],
            };
        },
        components: {

        },
        methods: {
        }
    }

</script>
