import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.scss'
})
export class CompAtributosComponent {
  estilo: string = ""
  item: string = ""
  lista: string[] = []

  constructor(){}

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

  adicionarLista(){
    this.lista.push(this.item)
  }
}
