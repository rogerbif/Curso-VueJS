import vue from 'vue'
export default new vue({
    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback)
        }
    },
})
