<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-10 18:25:08
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-10 19:23:34
 * @ Description: register form
 -->

<template>
    <el-form :model="register" label-width="auto">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="register.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                v-model="register.password"
                type="password"
                show-password
            />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
            <el-input
                v-model="register.confirm"
                type="password"
                show-password
            />
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
                console.warn('register success!');
                return true;
            }
        },
        data() {
            return {
                label: '注册',
                register: {
                    username: undefined,
                    password: undefined,
                    confirm: undefined
                }
            };
        },
        mounted() {
            console.log('[vue] RegisterForm mounted.');
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
