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
            if (data.showCode) {
                document.querySelector(data.el).innerHTML = `<pre>${JSON.stringify(json, null, 4)}</pre>`;
            } else {
                const coblet = new Coblet({
                    el: data.el,
                    metadata: json
                });
            }
        })
        .catch(function (error) {
            console.error('Error!', error);
            throw(error);
        });

});

