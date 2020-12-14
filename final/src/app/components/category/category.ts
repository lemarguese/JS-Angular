export class Category {
    id: number;
    title: string;
    content: string;
    price: number;
    type: string;
    url: string;
    otzyvy?: string[];

    constructor (id: number, title: string, content: string, price: number, type: string, url: string, otzyvy: string[]) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.price = price;
        this.type = type;
        this.url = url;
        this.otzyvy = otzyvy;
    }
}