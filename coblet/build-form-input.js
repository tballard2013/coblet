import { buildOptions } from "./build-options.js";
export function buildFormInput(word) {
    let html = '';

    if (!word) {
        return `Missing word? ${word}`
    }

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
                ${buildOptions(word)}
                </select>
                `
            break;
        case 'email':
            html += `<input type="email" 
                id="${word.name}" name="${word.name}"
                pattern=".+@.+"
                >
                <span class="validity"></span>
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
        case 'currency': // TODO: is there a canonical solution for currency?
            html += `
                <input type="number" 
                value="${word.value || 0}"
                placeholder="${word.placeholder}"
                >`
            break;
        default:
            html += word && word.type ? `unknown word type "${word.type}"` :
                `<pre>${JSON.stringify(word, null, 4)}</pre>`;
    }
    return html;

}

