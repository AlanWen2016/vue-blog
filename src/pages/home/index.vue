<template>
    <div class="main-content">
        <el-row>
            <el-col :span="22">
                <el-card shadow="hover" style="height: 200px">
                    <img class="img-content" src="~Assets/img/blog.jpg">
                    <div>
                        <div class="blog-title">asdf</div>
                        <div class="blog-info">sadf</div>
                        <div class="blog-content">asdfasd</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="22">
                <el-card shadow="hover" style="height: 200px">
                </el-card>
            </el-col>
        </el-row>
           <img class="github" src="~Assets/img/blog.jpg">
           <img class="github" src="~Assets/img/blog.jpg">
           <img class="github" src="~Assets/img/blog.jpg">
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
