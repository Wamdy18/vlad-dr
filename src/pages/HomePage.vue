<template>
  <main>
    <result-card :itemResult="itemResult" v-if="itemResult != null" />
    <div v-else>
      <start-congratulations :step="step" @nextStep="nextStep()" />
      <main-congratulations :step="step" />
    </div>
  </main>
</template>

<script>
import StartCongratulations from '@/components/StartCongratulations.vue'
import MainCongratulations from '@/components/MainCongratulations.vue'
import ResultCard from '@/components/ResultCard.vue'
export default {
  components: { StartCongratulations, MainCongratulations, ResultCard },
  data() {
    return {
      step: 1,
      itemResult: null,
    }
  },
  mounted() {
    const l = localStorage.getItem('vladdr')
    this.itemResult = l
    console.log(l)
  },
  methods: {
    nextStep() {
      this.step += 1
    },
    itemSelected(number) {
      this.itemResult = number;
    }
  },
  watch: {
    '$route' (to, from){
      console.log(to, from)
      
    }
  }
}
</script>

