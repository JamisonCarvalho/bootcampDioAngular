import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
  ){
    
    //http://localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portifolio/1?{nome=jamison&token=123}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
    /*setInterval(() => {
      this.navegador.navigate(['/'])
    }, 3000)*/
  }

}
