new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' 
				? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {

		}
	}
})
