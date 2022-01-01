import {buildFormRows} from './coblet/build-form-rows.js'
export class Coblet {
    el;
    metadata;

    constructor ({
        el,
        metadata
    }) {
        
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
            ${buildFormRows(metadata)}
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
    

}
