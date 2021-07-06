export class Coblet {
    el;
    metadata;

    constructor ({
        el,
        metadata
    }) {
        window.onerror = () => {
            alert('Caught error: see console.');
        };

        this.el = document.querySelector(`${el}`);
        //this.loading();
        this.metadata = metadata;

        console.log('metadata = ', this.metadata)
        //alert(JSON.stringify(this.metadata,null,4));
        //alert(this.metadata.title);
        const html = `
            <span class="coblet-form">
            ${metadata.title ? `<h1>${metadata.title}</h1>` : '<!-- no title -->'}
            <form>
            ${this.buildFormRows(metadata)}
            </form>
            </span>
        `;

        //alert(html);
        this.el.innerHTML = html;
    }

    loading() {
        //alert(this.el.innerHTML);
        this.el.oldInnerHTML = this.el.innerHTML;
        this.el.innerHTML = `
            <div class="centered">
            Loading.
            </div>
        `;
    }

    buildFormRows (metadata) {
        // build a tabular form from the metadata

        let html = '<table class="coblet-form">';
        for (let idx in metadata.fields) {
            const word = metadata[metadata.fields[idx]];
            html += `<tr>
                <td class="label" data-label="${word.label || 'no label provided'}">
                    ${word.label || ''}
                </td>
                <td class="input" data-input="${word.type || 'no type provided'}">
                    ${this.buildFormInput(word)}
                </td>
                <td class="message" data-message="${word.message || 'no message provided'}">
                    ${word.message || ''}
                </td>
            </tr>`;
        }

        // buttons for submit/cancel
        if (metadata.submit || metadata.cancel) {
            html += `
                <tr>
                    <td colspan="3" align="right">
                        <input type="submit" 
                            ${metadata.submit ? `value="${metadata.submit}"` : ''}
                        >

                        ${metadata.reset ? `
                            <input type="reset">
                        ` : '<!-- no reset button -->'}
                    </td>
                </tr>
            `
        }


        html += '</table>';

        return html;
    }

    buildFormInput(word) {
        let html = '';
        switch (word.type) {
            case 'text':
                html += `<input type="text" 
                    name="${word.name}"
                    placeholder="${word.placeholder}"
                    value="${word.value || ''}"
                    >`
                break;
            case 'select':
                html += `<select>
                    ${this.buildOptions(word)}
                    </select>
                    `
                break;
            case 'tel':
                html += `<input type="tel" 
                    id="${word.name}" name="${word.name}"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    >
                    <span class="validity"></span>
                    `
                break;
            default:
                    html += 'unknown word: ' + JSON.stringify(word, null, 4);
        }
        return html;

    }

    buildOptions(word) {
        let html = '';
        word.possibleValues.forEach( i => {
            html += `<option>${i}</option>`
        })
        return html;

    }
    

}
