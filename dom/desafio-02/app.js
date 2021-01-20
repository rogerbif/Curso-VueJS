new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Estou te alertando!')
        },
        AltValor(e) {
            this.valor = e.target.value
        },
    },
})