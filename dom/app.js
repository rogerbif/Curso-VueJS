new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: 'Roger Bif',
        IDADE: 38,
        link: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_505175324_2000131020009280246_158016.jpg'
    },
    methods: {
        random01: function () { //alt + shift + "pra baixo" duplica código
            return Math.random()
        }
    },
})