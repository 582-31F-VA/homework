export default class WordCount extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const wc = this.wordCount();
        const counter = this.newCounter(wc);
        this.prepend(counter);
    }

    newCounter(count) {
        const p = document.createElement("p");
        p.textContent = `Word count: ${count}`;
        return p;
    }

    wordCount() {
        let text = "";

        function findText(node) {
            node.childNodes.forEach((child) => {
                if (child.nodeType !== Node.TEXT_NODE) {
                    return findText(child);
                }
                text += child.nodeValue;
            });
        }

        findText(this);
        const words = text.trim().split(" ");
        return words.length;
    }
}
