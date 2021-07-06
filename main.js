import { Coblet } from './coblet.js'

window.initCobletForm = (function (data) {
    
    // load the form metadata and initialize
    fetch(data.dictionary, { 
        mode: 'cors' 
    })
    .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(json => {
            console.log('Request successful', json);
            const coblet = new Coblet({
                el: data.el,
                metadata: json
            });
        })
        .catch(function (error) {
            console.error('Request failed', error);
            throw(error);
        });

});

