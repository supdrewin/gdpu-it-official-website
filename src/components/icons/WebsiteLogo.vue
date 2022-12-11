<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:31:18
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 23:58:30
 * @ Description: website logo
 -->

<template>
    <svg viewBox="0 0 97 95" xmlns="http://www.w3.org/2000/svg">
        <image x="0" y="0" height="95" width="97" :href="image.data" />
    </svg>
</template>

<script>
    const BASE_URL = import.meta.env.BASE_URL;

    export default {
        created() {
            fetch(BASE_URL + this.image.path)
                .then((response) => response.json())
                .then((json) => {
                    this.image.data = json;
                });
        },
        data() {
            return {
                image: {
                    data: undefined,
                    path: 'website-logo.json'
                }
            };
        },
        mounted() {
            this.$message({
                message: '网站图标已加载',
                type: 'info'
            });
        }
    };
</script>

<style lang="scss" scoped></style>
