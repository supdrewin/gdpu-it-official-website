<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:29:08
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 23:55:48
 * @ Description: page header
 -->

<template>
    <el-affix>
        <el-menu
            mode="horizontal"
            :default-active="current_path()"
            :ellipsis="false"
            router
        >
            <el-button
                class="logo"
                :icon="logo.component"
                @click="logo.click"
                link
            >
                {{ logo.label }}
            </el-button>
            <el-menu-item
                v-for="route in $router.getRoutes()"
                :index="route.path"
            >
                {{ route.name }}
            </el-menu-item>
            <div style="flex-grow: 1" />
            <el-input
                class="search"
                v-model="search.content"
                :placeholder="search.placeholder"
                :prefix-icon="search.component"
                @input="search_action"
                clearable
            />
            <el-menu-item v-if="user.name" style="border: 0; height: auto">
                <el-dropdown @command="user_action">
                    <el-avatar :alt="user.name" :src="user.avatar" />
                    <template #dropdown>
                        <el-dropdown-menu v-for="command in user.commands">
                            <el-dropdown-item :command="command">
                                {{ command }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-menu-item>
            <el-space v-else>
                <LaunchDialog />
            </el-space>
        </el-menu>
    </el-affix>
    <el-drawer v-model="user.center" v-if="user.name">
        <template #header>
            <el-space>
                <el-avatar :alt="user.name" :src="user.avatar" />
                {{ user.name }}
            </el-space>
        </template>
        <template #footer></template>
    </el-drawer>
</template>

<script>
    import { shallowRef } from 'vue';
    import { Search } from '@element-plus/icons-vue';
    import router from '../router';
    import LaunchDialog from './LaunchDialog.vue';
    import WebsiteLogo from './icons/WebsiteLogo.vue';

    const BASE_URL = import.meta.env.BASE_URL;

    export default {
        components: { LaunchDialog },
        props: { router },
        methods: {
            current_path() {
                return location.pathname.replace(BASE_URL, '/');
            },
            search_action(words) {
                this.$message({
                    message: `?????????????????????${words}`,
                    type: 'warning'
                });
            },
            user_action(command) {
                switch (command) {
                    case '????????????':
                        this.user.center = true;
                        break;
                    case '????????????':
                        this.user.avatar = this.default_avatar;
                        this.user.name = undefined;
                        break;
                    default:
                        this.$message({
                            message: `??????????????????${command}`,
                            type: 'error'
                        });
                        break;
                }
            }
        },
        data() {
            return {
                logo: {
                    click: () => window.open(BASE_URL),
                    component: shallowRef(WebsiteLogo),
                    label: 'GDPU'
                },
                search: {
                    component: shallowRef(Search),
                    content: undefined,
                    placeholder: '???????????????'
                },
                user: {
                    avatar: this.default_avatar,
                    center: false,
                    commands: ['????????????', '????????????'],
                    name: undefined
                }
            };
        },
        mounted() {
            this.$message({
                message: '???????????????',
                type: 'info'
            });
        },
        setup() {
            const default_avatar = `${BASE_URL}avatar.png`;
            return { default_avatar };
        }
    };
</script>

<style lang="scss" scoped>
    .el {
        &-dropdown {
            &-menu {
                padding: 0;
            }
        }
        &-input {
            --el-input-border-radius: var(--el-border-radius-round);
        }
        &-menu {
            .logo {
                border: 0;
                font: {
                    size: var(--el-menu-item-height);
                    weight: bolder;
                }
                padding: 0 1%;
            }
            .search {
                margin: auto 1%;
                width: 10em;
            }
        }
    }
</style>
