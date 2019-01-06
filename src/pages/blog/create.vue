<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-container style="height: 52em">
                <el-aside width="200px" style="overflow: hidden">
                    <el-card class="box-card" style="width: 200px;height: 100%;padding: 0;margin: 0">
                        <el-menu style="border: 0">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>主页</span>
                                </template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项1</el-menu-item>
                                <el-menu-item index="1-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-tickets"></i>
                                    <span>投稿</span>
                                </template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项1</el-menu-item>
                                <el-menu-item index="2-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>管理</span>
                                </template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项1</el-menu-item>
                                <el-menu-item index="3-3">选项1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>数据</span>
                                </template>
                                <el-menu-item index="4-1">选项1</el-menu-item>
                                <el-menu-item index="4-2">选项1</el-menu-item>
                                <el-menu-item index="4-3">选项1</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-card>
                </el-aside>
                <el-main style="padding: 0;overflow: hidden">
                    <el-card class="box-card" style="height: 100%;width: 100%">
                        <el-input
                                placeholder="请输入标题"
                                v-model="title"
                                clearable>
                        </el-input>
                        <mavon-editor style="height: 460px;margin-top: 1em"
                           v-model="textValue"
                           @imgAdd="imgAdd" @imgDel="imgDel"/>
                        <div style="margin-top: 2em">
                            <h1><b><i>添加标签</i></b></h1>
                            <el-tag
                                    :key="tag.id"
                                    v-for="tag in dynamicTags"
                                    closable
                                    :type="tag.type"
                                    :disable-transitions="false"
                                    @close="deleteTag(tag)">
                                {{tag.value}}
                            </el-tag>
                            <el-select
                                       style="float: right;width: 100px"
                                       v-model="inputValue"
                                       placeholder="+ 新标签"
                                       size="small"
                                       @change="handleInputConfirm">
                                <el-option
                                        v-for="item in tages"
                                        :key="item.id"
                                        :label="item.value"
                                        :value="item">
                                </el-option>
                            </el-select>
                        </div>
                        <div style="margin-top: 3em;width: 100%;text-align: center">
                            <el-row>
                                <el-button type="danger" @click="commit">发布博客</el-button>
                                <el-button type="danger" @click="saveAsDraft">保存为草稿</el-button>
                                <router-link to='/'>
                                    <el-button>返回</el-button>
                                </router-link>
                            </el-row>
                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </el-col>
    </el-row>
</template>

<style lang="scss">
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>

<script>
    var mavonEditor = require('mavon-editor')
    import 'mavon-editor/dist/css/index.css'
    import axios from 'axios'
    import qs from 'qs';
    import {SaveBlog,SaveAsDraft,ImgAdd} from 'Services/getData.js'

    export default {
        data() {
            return {
                title:"",
                dynamicTags: [],
                dynamicTagIds:[],
                inputVisible: true,
                inputValue: "",
                tages:[
                    {
                        id:1,
                        value:"javasrcipt",
                        type:""
                    },
                    {
                        id:2,
                        value:"java",
                        type:"success"
                    },
                    {
                        id:3,
                        value:"php",
                        type:"info"
                    },
                    {
                        id:4,
                        value:"go",
                        type:"warning"
                    },
                    {
                        id:5,
                        value:"python",
                        type:"danger"
                    }

                ],
                textValue:""
            };
        },
        components: {
            'mavon-editor': mavonEditor.mavonEditor
        },
        methods: {
            deleteTag(tag) {
                var index = this.dynamicTags.indexOf(tag);
                this.dynamicTags.splice(index, 1);
                this.dynamicTagIds.splice(index, 1);
            },

            showInput() {
                this.inputVisible = true;
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    if(this.dynamicTags.indexOf(inputValue) == -1){
                        this.dynamicTags.push(inputValue);
                        this.dynamicTagIds.push(inputValue.id);
                    }
                }
                this.inputValue = '';
            },
            async imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('file', $file);
                console.log($file);
                console.log(formdata);
                let res = await ImgAdd(formdata);
                $vm.$img2Url(pos, res);
            },
            imgDel(pos, $file){
                alert(2);
            },
            async commit(){
                if(this.dynamicTags.length == 0){
                    this.$message({
                        message: '请选择标签',
                        type: 'warning',
                    });
                    return;
                }
                let params = qs.stringify({title:this.title,textValue:this.textValue,dynamicTagIds:this.dynamicTagIds}, { indices: false });
                let res = await SaveBlog(params);
                console.log(res);
            },
            async saveAsDraft(){
                if(this.dynamicTags.length == 0){
                    this.$message({
                        message: '请选择标签',
                        type: 'warning',
                    });
                    return;
                }
                let params = qs.stringify({title:this.title,textValue:this.textValue,dynamicTagIds:this.dynamicTagIds}, { indices: false });
                let res = await SaveAsDraft(params);
                console.log(res);
            }
        }
    }
</script>