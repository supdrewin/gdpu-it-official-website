<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:27:18
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-09 21:29:27
 * @ Description: main component
 -->

<template>
    <el-container>
        <el-header>
            <PageHeader />
        </el-header>
        <el-main>
            <RouterView />
        </el-main>
        <el-footer height="auto">
            <PageFooter />
        </el-footer>
    </el-container>
    <el-backtop />
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import PageHeader from './components/PageHeader.vue';
    import PageFooter from './components/PageFooter.vue';
</script>

<style lang="scss" scoped>
    .el {
        &-container {
            min-height: 100%;
        }
        &-footer {
            background: #384452;
            bottom: 0;
            color: #bfc9d3;
            text-align: center;
        }
        &-header {
            margin: 0;
            padding: 0;
        }
    }
</style>
