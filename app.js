var app = new Vue({
    el:'#app',
    data:{
        user: 
            {
                name:'Marco Sebastiani',
                avatar:'img/avatar_3.jpg',
                title: 'account-user'
            },
        contacts:[
            {
                name:'Michele',
                avatar:'img/avatar_1.jpg',
                visible: true,
                title: 'avatar_1'
            },
            {
                name:'Fabio',
                avatar:'img/avatar_3.jpg',
                visible: true,
                title: 'avatar_3'
            },
            {
                name:'Mario',
                avatar:'img/avatar_2.jpg',
                visible: true,
                title: 'avatar_2'
            },
            {
                name:'Samuele',
                avatar:'img/avatar_4.jpg',
                visible: true,
                title: 'avatar_4'
            },
            {
                name:'Arianna',
                avatar:'img/avatar_io.jpg',
                visible: true,
                title: 'avatar_io'
            },
            {
                name:'Lorenzo',
                avatar:'img/avatar_5.jpg',
                visible: true,
                title: 'avatar_5'
            },
            {
                name:'Luca',
                avatar:'img/avatar_7.jpg',
                visible: true,
                title: 'avatar_7'
            },
            {
                name:'Giovanni',
                avatar:'img/avatar_8.jpg',
                visible: true,
                title: 'avatar_8'
            }

        ],
        chatAttuale:0,
        scripting : false,
        time: '',
        newMex: '',
        inputSearch: '',
        messageActive: 'indefinita',
        newMexFinal: {
            date: '',
            text: '',
            status: 'sent'
        },
        newMexReceived: {
            date: '',
            text: 'Ok',
            status: 'received'
        }
    },
    methods:{
        searchFilter(){
            this.contacts.forEach((element) => {
                let nome = element.name;
                inputInserito = this.inputSearch.toLowerCase();
                nome = nome.toLowerCase();
                if (nome.includes(inputInserito)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

    }
});

