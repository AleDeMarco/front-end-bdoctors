var app = new Vue({
  el: '#app',
  data: {
    contacts: [
      {
        name: 'Bernardo',
        cognome: 'Rocco',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Modena',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Herbert',
        cognome: 'Schoenhuber',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Claudio',
        cognome: 'Corbellini',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        ciita: 'Bologna',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Patrizia',
        cognome: 'Boni',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Silvia',
        cognome: 'Simonetti',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Alberto',
        cognome: 'Vaiarelli',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Viterbo',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Andrea',
        cognome: 'Lenzi',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Roma',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Ernesta',
        cognome: 'Petrangeli',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Roma',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Annalisa',
        cognome: 'Limosani',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Firenze',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
      {
        name: 'Simona',
        cognome: 'Monilari',
        bio: 'Laureato a pieni voti in chirurgia, specializzato in specializzazione e operante a Milano',
        citta: 'Milano',
        telefono: '+39 366 1234567',
        valutazione: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      },
    ],
    filtered: [],
    newFilter: '',
    listaCitta: [],
    nRisultato: 0
  },
  created(){
    this.filtered = this.contacts;
    this.nRisultato = this.filtered.length;
  },
  methods: {
    filterChat() {
      this.filtered = [];
      this.newFilter = this.newFilter.charAt(0).toUpperCase() + this.newFilter.slice(1);
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name.includes(this.newFilter)) {
          this.filtered.push(this.contacts[i]);
        }
        this.nRisultato = this.filtered.length;
      }
    }
  }
});
