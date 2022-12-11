<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-10 18:13:47
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 23:57:41
 * @ Description: login form
 -->

<template>
    <el-form ref="__form" :model="form" label-width="auto">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item>
            <el-button
                v-for="(button, label) in buttons"
                :loading="label == '登录' ? loading : false"
                :type="button.type"
                @click="button.click"
                auto-insert-space
            >
                {{ label }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import axios from 'axios';

    const BASE_URL = import.meta.env.BASE_URL;

    export default {
        emits: ['update:failed'],
        props: ['failed'],
        methods: {
            reset_form() {
                this.$refs.__form?.resetFields();
            },
            submit_form() {
                this.loading = true;
                this.$message({
                    message: '正在验证用户是否为机器人',
                    type: 'warning'
                });
                this.$message({
                    message: '从数据库中比对用户信息',
                    type: 'warning'
                });
                axios({
                    data: this.form,
                    method: 'post',
                    url: `${BASE_URL}sql/login`
                }).then((response) => {
                    let message = '登录成功！';
                    if (response.data == message) {
                        this.$message({ message, type: 'success' });
                        this.$emit('update:failed', false);
                    } else {
                        this.$message({
                            message: '登录失败！',
                            type: 'error'
                        });
                    }
                });
                this.loading = false;
            }
        },
        data() {
            return {
                buttons: {
                    登录: {
                        click: this.submit_form,
                        type: 'primary'
                    },
                    清空: {
                        click: this.reset_form,
                        type: 'danger'
                    }
                },
                form: {
                    username: undefined,
                    password: undefined
                },
                loading: false
            };
        },
        mounted() {
            this.$message({
                message: '登录表单已加载',
                type: 'info'
            });
        }
    };
</script>

<style lang="scss" scoped>
    .el {
        &-button {
            margin: auto;
        }
        &-form {
            &-item {
                margin: 2em 0;
            }
        }
    }
</style>
