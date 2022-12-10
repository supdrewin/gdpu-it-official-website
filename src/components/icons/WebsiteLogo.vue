<!--
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:31:18
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-10 22:50:36
 * @ Description: website logo
 -->

<template>
    <svg viewBox="0 0 97 95" xmlns="http://www.w3.org/2000/svg">
        <image x="0" y="0" height="95" width="97" :href="image.data" />
    </svg>
</template>

<script>
    export default {
        created() {
            fetch(this.image.path)
                .then((response) => response.json())
                .then((json) => {
                    console.log(`读取的图片数据：${json}`);
                    this.image.data = json;
                });
        },
        data() {
            return {
                image: {
                    data: undefined,
                    path: '/website-logo.json'
                }
            };
        },
        mounted() {
            console.log('[vue] WebsiteLogo mounted.');
        }
    };
</script>

<style lang="scss" scoped></style>
