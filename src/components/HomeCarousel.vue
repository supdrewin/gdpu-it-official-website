<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-09 21:35:29
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 23:58:10
 * @ Description: home carousel
 -->

<template>
    <el-carousel>
        <el-carousel-item v-for="image in images" :key="image">
            <el-image :alt="image.alt" :src="prefix + image.src" />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    const BASE_URL = import.meta.env.BASE_URL;

    export default {
        created() {
            fetch(this.prefix + this.config)
                .then((response) => response.json())
                .then((json) => {
                    this.images = json;
                });
        },
        data() {
            return {
                config: 'config.json',
                images: undefined,
                prefix: `${BASE_URL}home-carousel/`
            };
        },
        mounted() {
            this.$message({
                message: '主页幻灯片已加载',
                type: 'info'
            });
        }
    };
</script>

<style lang="scss" scoped>
    .el {
        &-carousel {
            border-radius: var(--el-border-radius-base);
        }
        &-image {
            height: 100%;
            width: 100%;
        }
    }
</style>
