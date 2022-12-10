<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-04 21:52:58
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-10 22:44:28
 * @ Description: launch dialog
 -->

<template>
    <el-button size="large" type="primary" @click="visible = true">
        {{ title }}
    </el-button>
    <el-dialog
        v-model="visible"
        width="24em"
        :style="{
            '--el-dialog-border-radius': 'var(--el-border-radius-base)',
            '--el-dialog-box-shadow': 'var(--el-box-shadow-dark)'
        }"
        center
    >
        <template #header>
            <el-space :spacer="spacer">
                <template v-for="tab in ['登录', '注册']">
                    <el-button
                        :style="{
                            'border-bottom-color':
                                current_tab == tab
                                    ? 'var(--el-button-border-color)'
                                    : 'transparent',
                            'border-radius': 0,
                            color:
                                current_tab == tab
                                    ? 'var(--el-button-active-text-color)'
                                    : 'var(--el-button-text-color)'
                        }"
                        @click="current_tab = tab"
                        auto-insert-space
                        link
                    >
                        {{ tab }}
                    </el-button>
                </template>
            </el-space>
        </template>
        <LoginForm v-model:failed="visible" v-if="current_tab == '登录'" />
        <RegisterForm v-model:failed="visible" v-else />
    </el-dialog>
</template>

<script>
    import { h } from 'vue';
    import { ElDivider } from 'element-plus';
    import LoginForm from './LoginForm.vue';
    import RegisterForm from './RegisterForm.vue';

    export default {
        components: { LoginForm, RegisterForm },
        data() {
            return {
                current_tab: '登录',
                spacer: h(ElDivider, {
                    direction: 'vertical'
                }),
                title: '注册登录',
                visible: false
            };
        },
        mounted() {
            console.log('[vue] LaunchDialog mounted.');
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
