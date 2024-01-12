import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  produtos: string[] = []
  menuType: string = ""

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "headset",
      "webcam",
      "cabos",
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  adicionar(){
    this.produtos.push("teste");
  }

  remover(index: number){
    this.produtos.splice(index,1)
    alert(index + " deletado")
  }

}
