var app = new Vue({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Bernardo Rocco',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Del Pozzo 71, Modena',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Herbert Schoenhuber',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Riccardo Galeazzi 4, Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Claudio Corbellini',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Giuseppe Ripamonti 11, Bologna',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Patrizia Boni',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Giovanni Pacini 8, Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Silvia Simonetti',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Carlo Freguglia 8a, Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Alberto Vaiarelli',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Garbini 7, Viterbo',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Andrea Lenzi',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Viale del Policlinico 129/A, Roma',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Ernesta Petrangeli',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Piazza Lotario 8, Roma',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Annalisa Limosani',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Biancamano 33, Firenze',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Simona Monilari',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        indirizzo: 'Via Garibaldi 31, Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
    ],
    filtered: [],
    newFilter: ''
  },
  created(){
    this.filtered = this.contacts;
  },
  methods: {
    filterChat() {
      this.filtered = [];
      this.newFilter = this.newFilter.charAt(0).toUpperCase() + this.newFilter.slice(1);
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name.includes(this.newFilter)) {
          this.filtered.push(this.contacts[i]);
        }
      }
    }
  }
});
