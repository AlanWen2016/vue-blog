<template>
    <div>
        <div class="main-content">
            <el-row>
                <el-col :span="24" class="blog-title">
                    <span class="title">{{ blogInfo.title }}</span>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24"  class="blog-info">
                    <div>
                        <i class="el-icon-time"></i><span>{{ blogInfo.updated_at.substr(0,10) }}</span>
                        <i class="el-icon-edit-outline"></i><span>{{ blogInfo.creator }}</span>
                        <i class="el-icon-view"></i><span>阅读（154）</span>
                    </div>
                </el-col>
            </el-row>
            <div class="line"></div>
            <el-row>
                <el-col :span="24" class="blog-content">
                    <div class="content" style="min-width: 800px;" v-html="blogInfo.content">
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
    import {BlogInfo} from 'Services/getData.js';
export default {
    data() {
        return {
            blogInfo: {},
        }
    },
    components:{

    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    mounted() {
        let id = this.$route.query.id;
        this.getBlogInfo(id);
    },
    methods: {
        async getBlogInfo(id){
            try {
                let res = await BlogInfo({id});
                if(res.status === 200){
                    this.blogInfo = res.data;
                }
            }catch (err){
                console.log(err);
            }
        }
    },

}
</script>
