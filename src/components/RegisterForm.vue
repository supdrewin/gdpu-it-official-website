<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-10 18:25:08
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-12 00:05:31
 * @ Description: register form
 -->

<template>
    <el-form
        ref="__form"
        :model="form"
        :rules="rules"
        label-width="auto"
        hide-required-asterisk
        status-icon
    >
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
            <el-input v-model="form.confirm" type="password" show-password />
        </el-form-item>
        <el-form-item>
            <el-button
                v-for="(button, label) in buttons"
                :loading="label == '注册' ? loading : false"
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
            query_username(_rule, value, callback) {
                this.$message({
                    message: `从数据库中查找用户名：${value}`,
                    type: 'warning'
                });
                if ('数据库'.includes(value)) {
                    callback(new Error('用户名已存在'));
                } else {
                    callback();
                }
            },
            reset_form() {
                this.$refs.__form?.resetFields();
            },
            submit_form() {
                this.$refs.__form?.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        axios({
                            data: this.form,
                            method: 'post',
                            url: `${BASE_URL}sql/register`
                        }).then((response) => {
                            let message = '注册成功！';
                            if (response.data == message) {
                                this.$message({ message, type: 'success' });
                                this.$emit('update:failed', false);
                            } else {
                                this.$message({
                                    message: '注册失败！',
                                    type: 'error'
                                });
                            }
                        });
                    }
                    this.loading = false;
                });
            }
        },
        data() {
            return {
                buttons: {
                    注册: {
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
                    password: undefined,
                    confirm: undefined
                },
                loading: false,
                rules: {
                    username: [
                        {
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            validator: this.query_username,
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        { min: 8, max: 24, message: '密码长度必须在8到24之间' },
                        {
                            pattern: /^.*(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[()`!@#$%^&*_\-+=|{}[\]:;'<>,.?/]).*$/,
                            message:
                                '正确的密码应包括至少1个大写字母，' +
                                '1个小写字母，' +
                                '1个数字和1个特殊字符'
                        }
                    ],
                    confirm: [
                        {
                            required: true,
                            message: '请再一次输入密码',
                            trigger: 'blur'
                        },
                        {
                            validator: (_rule, value, callback) =>
                                value !== this.form.password
                                    ? callback(
                                          new Error('请确保两次输入的密码相同')
                                      )
                                    : callback(),
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        mounted() {
            this.$message({
                message: '注册表单已加载',
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
