import { Component,Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor(){
    console.log(`Constructor ${this.nome}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`On Changes ${this.nome}`)
  }

  ngOnInit(): void {
    console.log(`On Init ${this.nome}`)
  }

}
