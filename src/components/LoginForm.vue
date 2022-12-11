<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-10 18:13:47
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 19:55:14
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
                :loading="button.loading"
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
    export default {
        emits: ['update:failed'],
        props: ['failed'],
        methods: {
            reset_form() {
                this.$refs.__form?.resetFields();
            },
            submit_form() {
                this.buttons.登录.loading = true;
                console.warn('正在验证用户是否为机器人');
                console.warn('从数据库中比对用户信息');
                this.$emit('update:failed', false);
                this.buttons.登录.loading = false;
            }
        },
        data() {
            return {
                buttons: {
                    登录: {
                        click: this.submit_form,
                        loading: false,
                        type: 'primary'
                    },
                    清空: {
                        click: this.reset_form,
                        loading: false,
                        type: 'danger'
                    }
                },
                form: {
                    username: undefined,
                    password: undefined
                }
            };
        },
        mounted() {
            console.log('[vue] LoginForm mounted.');
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
