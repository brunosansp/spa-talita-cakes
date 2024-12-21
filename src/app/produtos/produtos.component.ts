import { Component } from '@angular/core';

interface IProduto {
    name: string;
    description: string;
    price: number;
    image: string;
}
@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.css'],
    standalone: false
})
export class ProdutosComponent {
    produtos: IProduto[] = [
        {
            name: 'Naked Cake 30cm',
            description: 'Naked Cake com massa amanteigada, recheio ninho com morango',
            price: 95.00,
            image: 'assets/images/naked_cake_30cm.jpg'
        },
        {
            name: 'Bolo caseiro 30cm',
            description: 'Diversos sabores',
            price: 28.00,
            image: 'assets/images/bolo_caseiro_30cm.jpg'
        }
    ]
}
