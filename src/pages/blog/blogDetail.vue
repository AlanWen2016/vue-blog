<template>
    <div>
        <div class="main-content">
            <el-row>
                <el-col :span="24" class="blog-title">
                    <span class="title">由type属性来选择tag的类型，也可以通过color属性来自定义背景色</span>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24"  class="blog-info">
                    <div>
                        <i class="el-icon-time"></i><span>2018-11-28</span>
                        <i class="el-icon-edit-outline"></i><span>焦糖瓜子</span>
                        <i class="el-icon-view"></i><span>阅读（154）</span>
                    </div>
                </el-col>
            </el-row>
            <div class="line"></div>
            <el-row>
                <el-col :span="24" class="blog-content">
                    <div class="content">
                        一、前言 文章更新于2018年11月04日 基于webpack4.x Webpack 是当下最热门的前端资源模块化管理和打包工具。
                        它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到...
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    .main-content{
        padding: 1em;
    }
    .img-content{width: 180px; height: 180px;float: left;margin-bottom: 20px}
    .blog-title{height:4em;text-align: center;line-height: 4em}
    .blog-title a{ text-decoration: none; cursor: pointer}
    .blog-title .title{font-size: 18px; font-weight: bold;font-family: "Microsoft YaHei";cursor: pointer;margin: 0 auto}
    .blog-info{height: 2em;padding-left: 2em; color: #999;text-align: center}
    .blog-info span{display: inline-block;width: 8em;text-align: left}
    .blog-info i{margin-right: 10px}
    .line{height: 1px; background: #999;width: 96%;margin: 1em auto}
    .blog-content{padding: 0 1em;color: #999;margin-top: 2em}
    .blog-content .content{line-height: 20px;font-size: 14px}
</style>

<script>

export default {
    data() {
        return {
            info: {},
             form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
        }

        }
    },
    components:{

    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    mounted() {


    },
    methods: {
        onSubmit() {

        }
    },

}
</script>
