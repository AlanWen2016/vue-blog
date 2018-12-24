<template>
<div>
    <el-row :gutter="20">
        <el-col :span="4" :offset="4" style="height: 60px;font-size:24px;font-weight: bold; color: #e6a23c">
            <div style="width:250px;height:60px">
                <img class="img-logo" src="~Assets/img/logo/logo_v2_1.png">
            </div>
        </el-col>
        <el-col :span="12" :offset="0">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">博客</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">项目</el-menu-item>
                <el-menu-item index="3"><a href="javascript:;" target="_blank">关于</a></el-menu-item>
                <el-submenu index="4">
                    <template slot="title">更多</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>


                <div style="display: inline-block;line-height: 60px;margin-left: 4em;">
                    <el-input placeholder="请输入内容" v-model="searchVal" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div style="display: inline-block; line-height: 60px;float: right">
                    <el-button @click="showLoginDialog">登录</el-button>
                </div>
            </el-menu>

        </el-col>
    </el-row>
    <el-dialog  :visible.sync="loginDialogVisible" center width="30%" class="login-dialog">
        <el-tabs type="border-card" v-model="activeLoginTab">
            <el-tab-pane label="第三方登录" name="qq">QQ登录</el-tab-pane>
            <el-tab-pane label="账号登录" name="login">
                <el-form :model="form">
                    <el-form-item label="账户：" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" :label-width="formLabelWidth">
                        <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align:center">
                        <el-button type="primary" @click="accountLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="账号注册" name="register">
                <el-form :model="form">
                    <el-form-item label="账户：" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：" :label-width="formLabelWidth">
                        <el-input v-model="form.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" :label-width="formLabelWidth">
                        <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" :label-width="formLabelWidth">
                        <el-input v-model="form.password_confirmation" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align:center">
                        <el-button type="primary" @click="loginDialogVisible = false">登录</el-button>
                        <el-button @click="loginDialogVisible = false">注册</el-button>
                    </el-form-item>
                </el-form>

            </el-tab-pane>

        </el-tabs>
        <div slot="footer" class="dialog-footer">

        </div>
    </el-dialog>
    </div>
</template>

<style scoped>
    .login-dialog .el-form-item{
        margin-right: 2em
    }

</style>

<script>
    import {AccountLogin} from 'Services/getData.js';
    export default {
        name: "header-bar",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                searchVal:'',
                loginDialogVisible:false,
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation:''
                },
                formLabelWidth: '120px',
                activeLoginTab: 'qq', // 登录弹窗active Tab
            }
        },
        mounted() {
            this.form.name = 'Git';
            this.form.password = '123456';
            this.accountLogin();
        },
        methods: {
            showLoginDialog() {
                this.loginDialogVisible = true;
            },
            async accountLogin() {
                if(this.activeLoginTab == 'login'){
                    let {name, password} = this.form;
                    let res = await AccountLogin({name, password});
                    console.log(res);
                }
            },
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
