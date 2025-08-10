<template>
<div class="main-congratulations" v-if="step == 7">
<div class="line-text">Перейдем к подарку.</div>
<div class="line-text">Ты можешь сам решить, какой подарок хочешь. Или испытать удачу.</div>
<div class="line-text">Посмотри, что ты можешь получить и подумай хорошенько!</div>
<div class="choice">
  <div class="choice-card choice-1" @click="goToSelectPage()">
    Выбрать
  </div>
  <div class="choice-card choice-2" @click="goToKazikPage()">
    Испытать удачу
  </div>
</div>
</div>
</template>

<script>
export default {
    props: {
        step: {
            type: Number,
            default: 1,
        }
    },
    methods: {
      goToSelectPage() {
        this.$router.push('/select')
      },
      goToKazikPage() {
        this.$router.push('/kazik')
      }
    }
}
</script>

<style>

</style>