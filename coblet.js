export class Coblet {
    constructor ({
        el,
        metadata
    }) {
        const _el = document.querySelector(`${el}`);
        const html = `
            <span class="coblet-form">
            ${metadata.title ? `<h1>${metadata.title}</h1>` : '<!-- no title -->'}
            <form>
            ${this.buildFormRows(metadata)}
            </form>
            </span>
        `;

        _el.innerHTML = html;
    }

    buildFormRows (metadata) {
        // build a tabular form from the metadata

        let html = '<table class="coblet-form">';
        for (let idx in metadata.fields) {
            const word = metadata[metadata.fields[idx]];
            html += `<tr>
                <td data-label="${word.label || 'no label provided'}">
                    ${word.label || ''}
                </td>
                <td data-input="${word.type || 'no type provided'}">
                    ${this.buildFormInput(word)}
                </td>
                <td data-message="${word.message || 'no message provided'}">
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
