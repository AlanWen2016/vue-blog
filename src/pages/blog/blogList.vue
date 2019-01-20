<template>
    <div class="main-content">
        <div style="display: inline-block;line-height: 60px;width: 50%">
            <el-input placeholder="请输入内容" v-model="params.title" class="input-with-select search-input">
                <el-button slot="append" icon="el-icon-search" @click="getBlogList"></el-button>
            </el-input>
        </div>
        <el-row v-loading="loading">
            <el-col :span="22" v-for="blog in blogList" :key="blog.id">
                <el-card shadow="hover" style="height: 160px">
                    <el-row>
                        <el-col :span="24" class="blog-title">
                            <a class="cat">javascript<i></i></a>
                            <span class="title" @click="viewBlogDetail(blog.id)">{{ blog.title }}</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"  class="blog-info">
                            <div>
                                <i class="el-icon-time"></i><span>{{ blog.updated_at }}</span>
                                <i class="el-icon-edit-outline"></i><span>{{ blog.creator }}</span>
                                <i class="el-icon-view"></i><span>阅读（999）</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" class="blog-content">
                            <div class="content">
                              {{ blog.summary }}
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination
                style="margin-top: 1em"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pagination.currentPage"
                :page-sizes="[10, 20,50]"
                :page-size="10"
                layout="sizes, prev, pager, next"
                :total="pagination.total">
        </el-pagination>

    </div>
</template>
<style lang="scss" scoped>
    .main-content{
        padding: 1em;
        text-align: left;
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
    .search-input{width: 100%}
</style>



<script>
    import {BlogList} from 'Services/getData.js';
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
            },
            params: {
                title: '',
                page: 1,
                pageSize: 10
            },
            pagination: {
                total: 0,
                currentPage: 1,
            },
            blogList: [],
            loading: false

        }
    },
    components:{

    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    mounted() {
        this.getBlogList();

    },
    methods: {
        async getBlogList() {
            this.loading = true;
            try {
                let res = await BlogList(this.params);
                this.loading = false;
                if(res.status === 200){
                    this.blogList = res.data.data;
                    this.pagination.total = res.data.total;
                }
            }catch (err){
                this.loading = true;
                console.log(err);
            }


        },
        viewBlogDetail(id) {
            this.$router.history.push({
                path:'/blog/detail',
                query: {id: id,}
            })
        },
        handleSizeChange(val) {
            this.params.pageSize = val;
            this.getBlogList();
        },
        handleCurrentChange(val) {
            this.params.page = val;
            this.getBlogList();
        },
    },

}
</script>
