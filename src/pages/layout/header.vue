<template>
<div>
    <el-row :gutter="20">
        <el-col :span="4" :offset="4" style="height: 60px;font-size:24px;font-weight: bold; color: #e6a23c">
            <div style="width:250px;height:60px">
                <router-link to="/">
                  <img class="img-logo" src="~Assets/img/logo/logo_v2_1.png">
                </router-link>
            </div>
        </el-col>
        <el-col :span="10" :offset="0">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <!--<el-submenu index="1">-->
                    <!--<template slot="title">博客</template>-->
                    <!--<router-link to='/create'>-->
                        <!--<el-menu-item index="2-1"><i class="el-icon-edit">写博客</i></el-menu-item>-->
                    <!--</router-link>-->
                    <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                    <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
                <!--</el-submenu>-->
                <el-menu-item index="2">项目</el-menu-item>
                <el-menu-item index="3"><a href="javascript:;" target="_blank">关于</a></el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4" style="height: 60px;line-height: 70px"  v-if="!$store.state.status.login">
                <img src="~Assets/img/qq/qq_bt_white.png" alt="" @click="showLoginDialog" style="vertical-align: center">
        </el-col>
        <el-col :span="4" style="height: 60px;line-height: 70px" v-else>
            <el-dropdown>
                 <span class="el-dropdown-link">
                     <a href="javascript:;">
                         <img class="user-head" :src="avatar"><span class="user-name">{{ nickName }}</span>
                     </a>
                     <i class="el-icon-arrow-down el-icon--right"></i>
                 </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="goCreateBlog">写博客</el-dropdown-item>
                    <el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
    <el-dialog  :visible.sync="loginDialogVisible" center  width="700" height="100%" class="login-dialog" style="overflow: hidden;">
        <div style="overflow: hidden;text-align: center">
            <iframe :src="qqLoginSrc" frameborder="0"  id="tgl-login__pop" width="640" height="580"  scrolling="no"></iframe>
        </div>
    </el-dialog>
    </div>
</template>

<style scoped>
    .user-head {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 4px 7px 0 rgba(194,194,194,0.50);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        right: 80px;
    }


</style>

<script>
    import {AccountLogin,AccountRegister, QQLoginUrl, LoginOut} from 'Services/getData.js';
    import { mapGetters } from 'vuex';
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
                qqLoginSrc: '',
            }
        },
        computed: {
            ...mapGetters([
                'avatar','nickName'
            ]),
        },
        mounted() {
            window.loginSuccess = () =>{
                this.loginDialogVisible = false;
                this.$store.dispatch({ type : 'getUserInfo'});
                // location.reload();
            },
            window.loginFailure = (message)=>{
                alert(message);
            }
        },
        methods: {
            showLoginDialog() {
                this.loginDialogVisible = true;
                this.getQQLoginUrl();
            },
            goCreateBlog() {
                this.$router.push({path: '/create'});
            },
            async logout() {
                let res = await LoginOut();
                if(res.data.code == 0){
                    location.href=`${document.location.protocol}//${document.location.hostname}`;
                }
            },
            async getQQLoginUrl(){
                this.qqLoginSrc = '';
                let res = await QQLoginUrl();
                this.qqLoginSrc = res.data.url;
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }

        },
    }
</script>
