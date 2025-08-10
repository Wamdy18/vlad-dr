<template>
  <div class="congratulations-1" v-if="step == 1">
    <img src="/images/1.jpg" width="300" alt="">
    <div class="line-text">Привет, друг!</div>
    <div class="line-text">Поздравляю тебя с твоим Днем Рождения!</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
  </div>
  <div class="congratulations-1" v-if="step == 2">
    <img src="/images/2.jpeg" width="300" alt="">
    <div class="line-text">Желаю тебе побед в киберспорте, карьере и личной жизни.</div>
    <div class="line-text">Добивайся всего, о чем мечтаешь!</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
  </div>
  <div class="congratulations-1" v-if="step == 3">
    <img src="/images/3.jpeg" width="300" alt="">
    <div class="line-text">Тебя всегда поддержит твоя братва!</div>
    <div class="line-text">Звони в любое время дня и ночи.</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
  </div>
  <div class="congratulations-1" v-if="step == 4">
    <img src="/images/4.jpeg" width="500" alt="">
    <div class="line-text">Решаем любые проблемы.</div>
    <div class="line-text">(Ну кроме сложных офк)</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
  </div>
  <div class="congratulations-1" v-if="step == 5">
    <img src="/images/5.jpeg" width="300" alt="">
    <div class="line-text">Лови кайф от жизни, наслаждайся каждым мгновением.</div>
    <div class="line-text">Не забывай, что живем один раз, и надо успеть попробовать все.</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
  </div>
  <div class="congratulations-1" v-if="step == 6">
    <img src="/images/6.jpeg" width="300" alt="">
    <div class="line-text">Чтоб *** стоял</div>
    <div class="line-text">И $$$ были</div>
    <div class="btn-next-step" @click="nextStep()">Next -></div>
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
        nextStep() {
            this.$emit('nextStep')
        }
    }
}
</script>

<style>

</style>