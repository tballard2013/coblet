export function buildOptions(word) {
    let html = '';
    word.possibleValues.forEach( i => {
        html += `<option>${i}</option>`
    })
    return html;

}
