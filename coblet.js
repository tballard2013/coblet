export class Coblet {
    constructor ({
        el,
        metadata
    }) {
        const _el = document.querySelector(`${el}`);
        const html = `
            NEW COBLET ${new Date().toLocaleTimeString()}
            <form>
            ${this.form(metadata)}
            </form>
        `;

        _el.innerHTML = html;
    }

    form (metadata) {
        let html = '';
        for (let idx in metadata.fields) {
            html += '<div>'
            const word = metadata[metadata.fields[idx]];
            switch (word.type) {
                case 'text':
                    html += `<input type="text" 
                        name="${word.name}"
                        placeholder="${word.placeholder}"
                        value="${word.value}"
                        >
                    `
                    break;
                default:
                        html += 'unknown word: ' + JSON.stringify(word, null, 4);
            }
            html += '</div>'
        }

        return html;
    }

}
