<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-container style="height: 50em">
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
                        <mavon-editor style="height: 460px"/>
                        <div style="margin-top: 3em">
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
                            <!--<el-input style="float: right"
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm"
                            >
                            </el-input>-->
                            <!--<el-select style="float: right"
                                    v-model="inputValue"
                                    placeholder="请选择"
                                    v-if="inputVisible"
                                    size="mini"
                                    ref="saveTagInput"
                                    @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm">-->
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
                           <!-- <el-button  style="float: right" v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
                        </div>
                        <div style="margin-top: 3em">

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
    export default {
        data() {
            return {
                dynamicTags: [],
                inputVisible: true,
                inputValue: "",
                /*tages:["javasrcipt","java","php","go","python"]*/
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

                ]
            };
        },
        methods: {
            deleteTag(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                /*this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.select.focus();
                });*/
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    if(this.dynamicTags.indexOf(inputValue) == -1){
                        this.dynamicTags.push(inputValue);
                    }
                }
                //this.inputVisible = false;
                this.inputValue = '';
            },
        }
    }
</script>