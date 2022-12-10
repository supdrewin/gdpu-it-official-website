<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-09 21:35:29
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-10 15:57:43
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
    export default {
        created() {
            fetch(this.prefix + this.config)
                .then((response) => response.json())
                .then((json) => {
                    console.log(`read config: ${JSON.stringify(json)}`);
                    this.images = json;
                });
        },
        data() {
            return {
                config: 'config.json',
                images: undefined
            };
        },
        mounted() {
            console.log('[vue] HomeCarousel mounted.');
        },
        setup() {
            const prefix = '/home-carousel/';
            return { prefix };
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
