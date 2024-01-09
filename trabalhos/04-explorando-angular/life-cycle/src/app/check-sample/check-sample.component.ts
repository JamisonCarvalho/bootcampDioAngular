import { 
Component,
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.scss'
})
export class CheckSampleComponent 
implements  OnInit, 
            DoCheck,
            AfterContentChecked,
            AfterContentInit,
            AfterViewChecked,
            AfterViewInit,
            OnDestroy
{

  quantidade:number = 0

  constructor(){}
  
  adicionar(){
    this.quantidade++
  }
  
  decrementar(){
    this.quantidade--
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  
  ngOnDestroy(): void {
    console.log("GoodBye My Friend")
  }
}
