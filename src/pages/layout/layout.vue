<template>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>

        <el-row style="margin: 1em">
            <el-col :span="16" :offset="4">
                <el-container>
                    <el-aside width="300px">
                        <el-card class="box-card box-card-user-info" shadow="never">
                            <div slot="header" class="clearfix">
                                <span>用户信息</span>
                            </div>
                            <img class="loading-img" src="~Assets/img/content.png">
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
                <el-footer style="height: auto">
                    <div style="padding: 2em">
                        <p>© 2018
                            <a href="http://alanwen.online">焦糖瓜子在线</a>
                            <span style="font-size:0.9em;margin-left: 1em">
                            Designed by
                            <span style="color: #e27575;font-size: 14px;">❤</span>
                            <a href="https://github.com/AlanWen2016" target="_blank" style="color:inherit">AlanWen</a>
                            </span>
                            <a href="https://github.com/AlanWen2016/vue-blog" target="_blank">
                                <img class="github" src="~Assets/img/icon/GitHub-Mark-32px.png">
                            </a>
                        </p>
                        <p style="margin-top: 1em">
                            <a href="http://www.miitbeian.gov.cn">粤ICP备18151066号-1</a>
                        </p>
                    </div>
                </el-footer>
            </el-col>
        </el-row>
    </el-container>

</template>
<style lang="scss">
    body {
        background-color: #eee;
        color: #333;
    }
    .el-footer {
       /*border-top: 2px solid #fff;*/
        color: #333;
        text-align: center;
        height: 100px;
    }
    .el-header {
        /*background-color: #2B3A42;*/
        background-color: #fff;
    }
    .el-main-right{
        background-color: white;
    }
    .el-aside {
        background-color: #eee;
        color: #333;
        text-align: center;
        margin-right: 1em;
    }
    body > .el-container {
        margin-bottom: 40px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 298px;
    }
    .box-card-user-info{
        width: 298px;
        height: 400px;
        margin-bottom: 1em;
    }
    .line {
        height: 2px;
        background-color: #fff;
        margin-top: 30px;
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
