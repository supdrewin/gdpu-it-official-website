<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-10 18:13:47
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-10 19:23:45
 * @ Description: login form
 -->

<template>
    <el-form :model="login" label-width="auto">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="login.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="login.password" type="password" show-password />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                @click="$emit('submit')"
                auto-insert-space
            >
                {{ label }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        emits: {
            submit: () => {
                console.warn('login success!');
                return true;
            }
        },
        data() {
            return {
                label: '登录',
                login: {
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
            margin: 0 1em;
        }
    }
</style>
