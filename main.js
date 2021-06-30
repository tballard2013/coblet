import { Coblet } from './coblet.js'

window.init = (function () {
    const c = new Coblet({
        el: '#coblet', 
        metadata: {
            fields: [
                'firstName'
            ],
            
            firstName: {
                type: 'text', 
                placeholder: 'First name',
                name: 'first',
                maxlength: 50,
            }
        }
    });
});

