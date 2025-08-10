<template>
  <div class="kazik-page">
    <div class="back-btn" @click="goBack()"><- Назад</div>
    <div class="kaz-con">
        <div class="tablo">
            <div class="tablo-item" v-for="item in currentKazItems" :key="item">
                <img :src="`/iselect/${item.img}.png`" alt="" width="100px" height="100px">
                <div class="card-h">{{ item.h }}</div>
                <div class="card-text">{{ item.t }}</div>
            </div>
        </div>
        <div class="btn-start" @click="startKaz()">Начать</div>
    </div>
    <div class="flex-con">
        <div class="select-card">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">1000 рублей</div>
            <div class="card-text">мало бабла</div>
        </div>
        <div class="select-card">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">3000 рублей</div>
            <div class="card-text">чуть больше бабла</div>
        </div>
        <div class="select-card">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">5000 рублей</div>
            <div class="card-text">просто бабло</div>
        </div>
        <div class="select-card">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">7000 рублей</div>
            <div class="card-text">прилично бабла</div>
        </div>
        <div class="select-card">
            <img src="/iselect/14.png" width="200" alt="">
            <div class="card-h">10000 рублей</div>
            <div class="card-text">вообще много бабла</div>
        </div>
        <div class="select-card">
            <img src="/iselect/29.png" width="200" alt="">
            <div class="card-h">Билет на Егора Крида</div>
            <div class="card-text">твой любимый артист</div>
        </div>
        <div class="select-card">
            <img src="/iselect/30.png" width="200" alt="">
            <div class="card-h">Баночка мёда</div>
            <div class="card-text">(липовый)</div>
        </div>
        <div class="select-card">
            <img src="/iselect/31.png" width="200" alt="">
            <div class="card-h">Автограф бомжа</div>
            <div class="card-text">ради тебя найду</div>
        </div>
        <div class="select-card">
            <img src="/iselect/32.png" width="200" alt="">
            <div class="card-h">★ Kukri Knife | Boreal Forest FT</div>
            <div class="card-text">=)</div>
        </div>
        <div class="select-card">
            <img src="/iselect/33.png" width="200" alt="">
            <div class="card-h">Килограмм леденцов</div>
            <div class="card-text">sosal?</div>
        </div>
        <div class="select-card">
            <img src="/iselect/27.png" width="200" alt="">
            <div class="card-h">25 ключей от кейсов CS2</div>
            <div class="card-text">gl hf</div>
        </div>
        <div class="select-card">
            <img src="/iselect/34.png" width="200" alt="">
            <div class="card-h">AK-47 Midnight Laminate FN</div>
            <div class="card-text">(=</div>
        </div>
        <div class="select-card">
            <img src="/iselect/35.png" width="200" alt="">
            <div class="card-h">Аркана на пуджа</div>
            <div class="card-text">?</div>
        </div>
        <div class="select-card">
            <img src="/iselect/36.png" width="200" alt="">
            <div class="card-h">Сертификат в барбержоп</div>
            <div class="card-text">5000</div>
        </div>

    </div>
  </div>
</template>

<script>
import { animate } from 'animejs'

export default {

    data() {
        return {
            currentKazItems: [],
            prizeList: [
                {
                    id: 1,
                    h: '1000 рублей',
                    t: 'мало бабла',
                    img: '14'
                },
                {
                    id: 2,
                    h: '3000 рублей',
                    t: 'чуть больше бабла',
                    img: '14'
                },
                {
                    id: 3,
                    h: '5000 рублей',
                    t: 'просто бабло',
                    img: '14'
                },
                {
                    id: 4,
                    h: '7000 рублей',
                    t: 'прилично бабла',
                    img: '14'
                },
                {
                    id: 5,
                    h: '10000 рублей',
                    t: 'вообще много бабла',
                    img: '14'
                },
                {
                    id: 6,
                    h: 'Билет на Егора Крида',
                    t: 'твой любимый артист',
                    img: '29'
                },
                {
                    id: 7,
                    h: 'Баночка мёда',
                    t: '(липовый)',
                    img: '30'
                },
                {
                    id: 8,
                    h: 'Автограф бомжа',
                    t: 'ради тебя найду',
                    img: '31'
                },
                {
                    id: 9,
                    h: '★ Kukri Knife | Boreal Forest FT',
                    t: '=)',
                    img: '32'
                },
                {
                    id: 10,
                    h: 'Килограмм леденцов',
                    t: 'sosal?',
                    img: '33'
                },
                {
                    id: 11,
                    h: '25 ключей от кейсов CS2',
                    t: 'gl hf',
                    img: '27'
                },
                {
                    id: 11,
                    h: 'AK-47 Midnight Laminate FN',
                    t: '(=',
                    img: '34'
                },
                {
                    id: 12,
                    h: 'Аркана на пуджа',
                    t: '?',
                    img: '35'
                },
                {
                    id: 13,
                    h: 'Сертификат в барбержоп',
                    t: '5000',
                    img: '36'
                },
            ]
        }
    },
    mounted() {
        // const result = Math.floor(Math.random() * count) + 1
        for (let i = 0; i < 20; i++) {
            const index = Math.floor(Math.random() * this.prizeList.length)
            this.currentKazItems.push(this.prizeList[index])
        }
        console.log(this.currentKazItems)
    },
    methods: {
        goBack() {
            this.$router.push('/')
        },
        async startKaz() {
            // for (let i = 0; i < 3; i++) {
            //     const index = Math.floor(Math.random() * this.prizeList.length)
            //     this.currentKazItems.push(this.prizeList[index])
            // }


            const items = await document.getElementsByClassName('tablo-item')
            console.log(items)

            // if (tabloItems.value.length > 3) {
            //     tabloItems.value = []
            // }

            // for (let i = 0; i < items.length; i++) {
            //     items[i].removeAttribute('style')
            // }
            // e.stopPropagation()
            console.log('start')

            // logic animation
            animate('.tablo-item', { x: '-150rem', duration: 5000 })
            setTimeout(() => {
                console.log('end')
                localStorage.setItem('vladdr', this.currentKazItems[17].id)
                localStorage.setItem('vladdr-h', this.currentKazItems[17].h)
                localStorage.setItem('vladdr-t', this.currentKazItems[17].t)
                localStorage.setItem('vladdr-img', this.currentKazItems[17].img)
                this.$router.push('/')
            }, 6000)
        }
    }
}
</script>

<style>

</style>