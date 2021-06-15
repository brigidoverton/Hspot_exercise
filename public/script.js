var LOAD_NUM = 4;
var watcher;
var page = 1;
const PAGE_SIZE=20;

new Vue({
    el: "#app",
    data: {
        cards: [],
        search: "",
        lastSearch: "",
        loading: false,
        results: [],
        noResults: false,
        
    },
    methods: {

        /*  @param {number} page        Page to be returned from API
         *  @param {number} PAGE_SIZE   Number of elements returned per call 
         *  @param {String} searchTerm  Name of card to search by
         */
        callAPI: function(page, PAGE_SIZE, searchTerm) {
            var path = "cardSearch/cards?" + searchTerm + "page="+ page+ "&pageSize=" + PAGE_SIZE;
            console.log("calling API: " + path);
            this.$http.get(path)
            .then(function(response){
                this.cards = this.cards.concat(response.body.cards);
                this.lastSearch = this.search;
                this.loading = false;
                if (response.body.cards.length===0 ) {
                    this.noResults = true;
                   }
            });
        },
        /*  method called when search button is pressed */
        onSubmit: function() {
            this.noResults = false;
            page = 1;
            this.cards = [];
            this.loading = true;
            var searchTerm = "name="+this.search+"&"
            this.callAPI(page, PAGE_SIZE, searchTerm);
        },

        /* 
         * method called when watcher enters viewport 
         * calls next page of API to dynamically populate page
        */
        appendResults: function() {
            var searchTerm = "";
            page++;
            if(this.search) {
                searchTerm = "name="+this.search+"&";
            } else {
                searchTerm = "";
            }
            this.callAPI(page, PAGE_SIZE, searchTerm);
        
        },
        /*
         * method called when search input is cleared
         * reloads all the cards again
         */
        inputClear: function() {
            if (this.search==="") {
                this.loading = true;
                page = 0;
                this.noResults = false;
                this.cards = [];
            }
        }
    },
    
    /* 
     * load all the cards on page initial page creation
     */
    created: function() {
        this.loading = true;
        page=1;
        this.callAPI(page, PAGE_SIZE, "");
    },

    /* 
     * creates the sensor and watcher
     * appends cards if there are results at the end
     */
    updated: function() {
        var sensor = document.querySelector("#card-list-bottom");
        watcher = scrollMonitor.create(sensor);
        
        if(this.noResults === false) {
            watcher.enterViewport(this.appendResults);
        }
    },

    /*
     * destroys watcher before each update
     */
    beforeUpdate: function() {
    
        if (watcher) {
            watcher.destroy();
            watcher = null;
        }
    },

});

