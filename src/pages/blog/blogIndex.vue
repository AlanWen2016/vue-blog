<template>
    <div class="main-content">
        <el-row>
            <el-col :span="22" v-for="o in 4" :key="o">
                <el-card shadow="hover" style="height: 160px">
                    <el-row>
                        <el-col :span="24" class="blog-title">
                            <a class="cat">javascript<i></i></a>
                            <span class="title" @click="viewBlogDetail()">由type属性来选择tag的类型，也可以通过color属性来自定义背景色</span>
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
                    <el-row>
                        <el-col :span="24" class="blog-content">
                            <div class="content">
                                一、前言 文章更新于2018年11月04日 基于webpack4.x Webpack 是当下最热门的前端资源模块化管理和打包工具。
                                它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到...
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>
<style lang="scss" scoped>
    .main-content{
        padding: 1em;
    }
    .img-content{width: 180px; height: 180px;float: left;margin-bottom: 20px}
    .blog-title{height: 3em;padding-left: 1em}
    .blog-title a{ text-decoration: none; cursor: pointer}
    .blog-title .title{font-size: 16px; font-weight: bold;font-family: "Microsoft YaHei";margin-left: 10px;cursor: pointer}
    .blog-info{height: 2em;padding-left: 1em; color: #999}
    .blog-info span{display: inline-block; width: 10em}
    .blog-info i{margin-right: 10px}
    .blog-content{padding: 0 1em;color: #999;}
    .blog-content .content{line-height: 20px;font-size: 14px}
     .cat {
        color: #fff;
        background-color: #409EFF;
        padding: 3px 6px;
        font-size: 14px;
        display: inline-block;
        position: relative;
        top: -2px;
        margin-right: 6px;
    }
     .cat i {
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: -4px;
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
        border-left: 4px solid #409EFF;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
    .el-pagination{margin-top: 2em}
</style>



<script>

export default {
    name:"blog-index",
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
        viewBlogDetail() {
            this.$router.history.push({
                path:'/blog/detail',
                query: {
                    id: 1234,
                },
            })
        }
    },

}
</script>
