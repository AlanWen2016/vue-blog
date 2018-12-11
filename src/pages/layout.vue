<template>
    <div id="my-pages">
            <el-container>
                <el-header>
                    <el-row :gutter="20">
                        <el-col :span="2" :offset="6">
                            焦糖瓜子在线
                        </el-col>
                        <el-col :span="12">
                            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                                <el-menu-item index="1">处理中心</el-menu-item>
                                <el-submenu index="2">
                                    <template slot="title">我的工作台</template>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                    <el-submenu index="2-4">
                                        <template slot="title">选项4</template>
                                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                                    </el-submenu>
                                </el-submenu>
                                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-header>
                <el-row>
                    <el-col :span="16" :offset="4">
                        <el-container>
                            <el-aside width="300px">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>卡片名称</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                                    </div>
                                    <div v-for="o in 4" :key="o" class="text item">
                                        {{'列表内容 ' + o }}
                                    </div>
                                </el-card>
                            </el-aside>
                            <!-- 右边主体[[ -->
                            <router-view></router-view>
                            <!-- 右边主体]] -->
                        </el-container>
                        <el-footer>Footer</el-footer>
                    </el-col>
                </el-row>

            </el-container>
    </div>
</template>
<style lang="scss">
   .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

   .text {
       font-size: 14px;
   }

   .item {
       margin-bottom: 18px;
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
       width: 480px;
   }
</style>



<script>

export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    components:{

    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }

    },
}
</script>
