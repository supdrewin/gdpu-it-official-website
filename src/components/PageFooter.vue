<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-04 14:17:33
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 23:57:27
 * @ Description: page footer
 -->

<template>
    <el-container>
        <el-main>
            <h1>{{ instruction.title }}</h1>
            <el-space wrap>&emsp;&emsp;{{ instruction.content }}</el-space>
        </el-main>
        <el-aside>
            <h1>{{ url.title }}</h1>
            <el-space wrap>
                <el-button @click="open_url(url.project.content)" link>
                    {{ url.project.title }}
                </el-button>
                <el-button @click="open_url(url.releases.content)" link>
                    {{ url.releases.title }}
                </el-button>
            </el-space>
        </el-aside>
    </el-container>
</template>

<script>
    const BASE_URL = import.meta.env.BASE_URL;

    export default {
        methods: {
            open_url(url) {
                window.open(url);
            }
        },
        data() {
            return {
                instruction: {
                    title: '简介',
                    content:
                        '广东药科大学计算机协会的官方网站，' +
                        '使用基于 Vue 3 的组件库 Element Plus 制作。' +
                        '主要面向广大计算机协会成员，' +
                        '用于协会成员和活动管理、提供学习资源和讨论区。'
                },
                url: {
                    title: '链接',
                    project: {
                        title: '项目地址',
                        content:
                            'https://github.com/supdrewin/' +
                            'gdpu-it-official-website'
                    },
                    releases: {
                        title: '更新日志',
                        content: `${BASE_URL}releases.md`
                    }
                }
            };
        },
        mounted() {
            this.$message({
                message: '页脚已加载',
                type: 'info'
            });
        }
    };
</script>

<style lang="scss" scoped>
    @mixin mix($n) {
        max-width: 10em * $n;
        padding-top: 1%;
        text-align: left;
    }
    .el {
        &-aside {
            @include mix(1);
        }
        &-container {
            font-size: small;
            justify-content: space-between;
        }
        &-main {
            @include mix(4);
        }
    }
</style>
