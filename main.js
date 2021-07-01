import { Coblet } from './coblet.js'

window.init = (function () {
    const c = new Coblet({
        el: '#coblet', 
        metadata: {
            title: 'Basic Form Example',
            submit: 'Go', // string label to customize
            reset: true, // string label or truthy to include cancel button

            fields: [ 
                'firstName',
                'lastName',
                'gender',
            ], // the list (in order) of fields to present
            
            firstName: {
                name: 'firstName', // match to key name for best results
                label: 'First name',
                type: 'text', 
                placeholder: 'Thomas',
                maxlength: 50,
                required: true,
            },

            lastName: {
                name: 'lastName',
                label: 'Last name',
                type: 'text',
                placeholder: 'Ballard',
            },

            gender: {
                name: 'gender',
                label: 'Gender',
                type: 'select',
                possibleValues: [
                    'prefer not to answer', 'male', 'female', 'other'
                ],

            }
            
        }
    });
});

