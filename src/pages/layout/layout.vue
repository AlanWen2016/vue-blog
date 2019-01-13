<template>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>

        <el-main style="margin: 0em 1em">
            <router-view></router-view>
        </el-main>

        <el-footer style="height: auto">
            <layout-footer></layout-footer>
        </el-footer>
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
import layoutFooter from './footer.vue'
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            input5:''
        }
    },
    components:{
        headerBar,
        layoutFooter
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
