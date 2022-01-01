import { buildFormInput } from "./build-form-input.js";

export function buildFormRows (metadata) {
    return  `<table class="coblet-form">${buildSections(metadata)}</table>`;
}

function buildSections(metadata) {
    let html = '';

    if (metadata.sections) {

        metadata.sections.forEach(section => {
            if (metadata[`${section}-title`]) {
                html += buildSectionTitle(metadata[`${section}-title`]);
            }

            html += `<tbody>
                ${buildFields(metadata[section], metadata)}
                </tbody>`;
        });
    } else {
        html += buildFields(metadata.fields, metadata)
    }

    html += buildFormSubmitRow(metadata);

    return html;
}

function buildSectionTitle(title) {
    return `
        <thead>
            <tr>
                <td colspan="3"><h2>${title}</h2></td>
            </tr>
        </thead>
    `;
}

function buildFields(fields, metadata) {
    let html = '';
    
    fields.forEach(field => {
        console.log(field, fields);
        const word = metadata[field] || { 
            missing: field,
        };
        html += `<tr>
            <td class="label" data-label="${word.label || 'no label provided'}"
                title="${word['label-tooltip'] || ''}"
            >
                ${word.label || ''}
            </td>
            <td class="input" data-input="${word.type || 'no type provided'}">
                ${buildFormInput(word)}
            </td>
            <td class="message" data-message="${word.message || 'no message provided'}">
                ${word.message || ''}
                ${word.info ? `<div>${word.info}</div>` : ''}
            </td>
        </tr>`;
    })

    return html;
}

function buildFormSubmitRow(metadata) {
    let html = '';
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
    
    return html;
}