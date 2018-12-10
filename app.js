//fileapp.js 
var app= new Vue({
    el: '#app',
    data: {
        message: "Hello Vue!",
        x: 2,
        y: false,
        articles: [],
        test: 'class1',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' },
            { text: 'Learn Angular' }
          ]
    },
    created: function (){
        this.incrementX();
        this.message = localStorage.getItem('message');
        var that = this;
        //7da4f11e84f24d83a049efb8f8a2acf3
       fetch('https://newsapi.org/v2/top-headlines?country=it&apiKey=7da4f11e84f24d83a049efb8f8a2acf3')
            .then(function(response) { return response.json() }) //meccanismo di promise valido x questa api
            .then(function(response) {
                console.log(this);
                that.articles = response.articles;
            })
        
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
        },
        incrementX: function(){
            this.x++;
        },
        decrementX: function(){
            this.x--;
        }
    },
    watch: {
        'message': function(newValue, oldValue) {
            localStorage.setItem('message', newValue);
        }
    }
})