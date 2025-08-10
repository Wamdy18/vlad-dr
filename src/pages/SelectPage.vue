<template>
  <div class="select-page">
    <div class="back-btn" @click="goBack()"><- Назад</div>
    <div class="flex-con">
        <div class="select-card" @click="select(1)">
            <img src="/iselect/11.png" width="200" alt="">
            <div class="card-h">Билет на концерт Хаски</div>
            <div class="card-text">30 сентября Екб</div>
        </div>
        <div class="select-card" @click="select(2)">
            <img src="/iselect/12.png" width="200" alt="">
            <div class="card-h">Стендап Филипп Воронин</div>
            <div class="card-text">12 сентября Екб</div>
        </div>
        <div class="select-card" @click="select(3)">
            <img src="/iselect/13.png" width="200" alt="">
            <div class="card-h">Билет на концерт Фараон</div>
            <div class="card-text">18 сентября Екб</div>
        </div>
        <div class="select-card" @click="select(4)">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">5000 рублей</div>
            <div class="card-text">просто бабло</div>
        </div>
        <div class="select-card" @click="select(5)">
            <img src="/iselect/15.png" width="200" alt="">
            <div class="card-h">6500 рублей MYCSGO</div>
            <div class="card-text">додеп</div>
        </div>
        <div class="select-card" @click="select(6)">
            <img src="/iselect/16.png" width="200" alt="">
            <div class="card-h">4999 рублей STEAM</div>
            <div class="card-text">купите мне Elden Ring</div>
        </div>
        <div class="select-card" @click="select(7)">
            <img src="/iselect/17.png" width="200" alt="">
            <div class="card-h">Мерч TEAM SPIRIT</div>
            <div class="card-text">хз когда приедет</div>
        </div>
        <div class="select-card" @click="select(8)">
            <img src="/iselect/18.png" width="200" alt="">
            <div class="card-h">AWP Printstream FT</div>
            <div class="card-text">S0mple позавидует</div>
        </div>
        <div class="select-card" @click="select(9)">
            <img src="/iselect/19.png" width="200" alt="">
            <div class="card-h">20 пачек табака для кальяна</div>
            <div class="card-text">накуриться и не жить</div>
        </div>
        <div class="select-card" @click="select(10)">
            <img src="/iselect/20.png" width="200" alt="">
            <div class="card-h">Роспись от стримеров в STEAM</div>
            <div class="card-text">попрошу всех кого смогу</div>
        </div>
        <div class="select-card" @click="select(11)">
            <img src="/iselect/21.png" width="200" alt="">
            <div class="card-h">Перчатки (лайтовые)</div>
            <div class="card-text">чтобы руки не замерзли</div>
        </div>
        <div class="select-card" @click="select(12)">
            <img src="/iselect/22.png" width="200" alt="">
            <div class="card-h">ST AK-47 Asiimov FT</div>
            <div class="card-text">бау, домашний</div>
        </div>
        <div class="select-card" @click="select(13)">
            <img src="/iselect/23.png" width="200" alt="">
            <div class="card-h">AK-47 Inheritence FT</div>
            <div class="card-text">хайповый</div>
        </div>
        <div class="select-card" @click="select(14)">
            <img src="/iselect/24.png" width="200" alt="">
            <div class="card-h">Баден-Баден (Екб/Реж)</div>
            <div class="card-text">кайфануть,поплавать,погреться</div>
        </div>
        <div class="select-card" @click="select(15)">
            <img src="/iselect/25.png" width="200" alt="">
            <div class="card-h">Квест</div>
            <div class="card-text">Могу сходить с тобой</div>
        </div>
        <div class="select-card" @click="select(16)">
            <img src="/iselect/26.png" width="200" alt="">
            <div class="card-h">Годовая подписка на музыку</div>
            <div class="card-text">VK/YM/hz chto ewe</div>
        </div>
        <div class="select-card" @click="select(17)">
            <img src="/iselect/27.png" width="200" alt="">
            <div class="card-h">20 ключей от кейсов CS2</div>
            <div class="card-text">Check your luck!</div>
        </div>
        <div class="select-card" @click="select(18)">
            <img src="/iselect/28.png" width="200" alt="">
            <div class="card-h">Мои грязные носки</div>
            <div class="card-text">ну вдруг</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            prizeList: [
                {
                    id: 1,
                    h: 'Билет на концерт Хаски',
                    t: '30 сентября Екб',
                    img: '11'
                },
                {
                    id: 2,
                    h: 'Стендап Филипп Воронин',
                    t: '12 сентября Екб',
                    img: '12'
                },
                {
                    id: 3,
                    h: 'Билет на концерт Фараон',
                    t: '18 сентября Екб',
                    img: '13'
                },
                {
                    id: 4,
                    h: '5000 рублей',
                    t: 'просто бабло',
                    img: '14'
                },
                {
                    id: 5,
                    h: '6500 рублей MYCSGO',
                    t: 'додеп',
                    img: '15'
                },
                {
                    id: 6,
                    h: '4999 рублей STEAM',
                    t: 'купите мне Elden Ring',
                    img: '16'
                },
                {
                    id: 7,
                    h: 'Мерч TEAM SPIRIT',
                    t: 'хз когда приедет',
                    img: '17'
                },
                {
                    id: 8,
                    h: 'AWP Printstream FT',
                    t: 'S0mple позавидует',
                    img: '18'
                },
                {
                    id: 9,
                    h: '20 пачек табака для кальяна',
                    t: 'накуриться и не жить',
                    img: '19'
                },
                {
                    id: 10,
                    h: 'Роспись от стримеров в STEAM',
                    t: 'попрошу всех кого смогу',
                    img: '20'
                },
                {
                    id: 11,
                    h: 'Перчатки (лайтовые)',
                    t: 'чтобы руки не замерзли',
                    img: '21'
                },
                {
                    id: 12,
                    h: 'ST AK-47 Asiimov FT',
                    t: 'бау, домашний',
                    img: '22'
                },
                {
                    id: 13,
                    h: 'AK-47 Inheritence FT',
                    t: 'хайповый',
                    img: '23'
                },
                {
                    id: 14,
                    h: 'Баден-Баден (Екб/Реж)',
                    t: 'кайфануть,поплавать,погреться',
                    img: '24'
                },
                {
                    id: 15,
                    h: 'Квест',
                    t: 'Могу сходить с тобой',
                    img: '25'
                },
                {
                    id: 16,
                    h: 'Годовая подписка на музыку',
                    t: 'VK/YM/hz chto ewe',
                    img: '26'
                },
                {
                    id: 17,
                    h: '20 ключей от кейсов CS2',
                    t: 'Check your luck!',
                    img: '27'
                },
                {
                    id: 18,
                    h: 'Мои грязные носки',
                    t: 'ну вдруг',
                    img: '28'
                },
            ]
        }
    },
    methods: {
        goBack() {
            this.$router.push('/')
        },
        select(number) {
            console.log('Выбран', number)
            localStorage.setItem('vladdr', number)
            localStorage.setItem('vladdr-h', this.prizeList[number - 1].h)
            localStorage.setItem('vladdr-t', this.prizeList[number - 1].t)
            localStorage.setItem('vladdr-img', this.prizeList[number - 1].img)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>