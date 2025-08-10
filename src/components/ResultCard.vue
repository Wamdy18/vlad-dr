<template>
  <div class="result-card-page" v-if="item">
    <div class="line-text">Поздравляю!</div>
    <div class="line-text">Ты получил:</div>
    <div class="result-card">
        <img :src="`/iselect/${item.img}.png`" width="200" alt="">
        <div class="card-h">{{ item.h }}</div>
        <div class="card-text">{{ item.t }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        itemResult: {
            default: null
        }
    },
    data() {
        return {
            item: null
        }
    },
    mounted() {
        const h = localStorage.getItem('vladdr-h')
        const t = localStorage.getItem('vladdr-t')
        const img = localStorage.getItem('vladdr-img')
        this.item = {
            h,
            t,
            img
        }
    }
}
</script>

<style>

</style>