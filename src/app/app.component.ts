import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './cover.letter.html',
//  template: `
//    <h1>{{title}}</h1>
//    <h2>My Heroes</h2>
//    <ul class="heroes">
//      <li *ngFor="let x of heroes"
//        [class.selected]="x === selectedHero"
//        (click)="onSelect(x)">
//        <span class="badge">{{x.id}}</span> {{x.name}}
//      </li>
//    </ul>
//    <div *ngIf="selectedHero">
//      <h2>{{selectedHero.name}} details!</h2>
//      <div><label>id: </label>{{selectedHero.id}}</div>
//      <div>
//        <label>name: </label>
//        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
//      </div>
//    </div>
//  `,
  styleUrls: ['./app.component.css','./animate.css']
})
export class AppComponent implements OnInit {
  title = 'Ida is back';
  mess =  `Dear [(Recruiter)],

I am interested in the [(new job)] position posted on [(new company)]'s website and I believe I am well suited for this position because my parents are secretly plotting to kill me and I have survived thus far as result of my analytical and running skills.

As the [(old job)] at [(old company)], I made sure that I didn't die while drowning in endless amount of work. I am the best team player [(new company)] will ever have simply because I am an entire team all by myself.

Bla bla bla, icecream icecream icecream, give me money ASAP before I die.

Regards,
Ida Hoo
`;

  edit = true;	
  data: Array<string> = [];
  answer = '';

  ngOnInit() {
    this.pullFromStorage();
  }
    // var reg = /\[\w+\s?\w+\]/gi then t.replace(/\[\(software\)\]/gi,'cook')
	//get cusor position in textarea element //ng.probe($0).nativeNode.selectionStart
	// get selection in textarea //window.getSelection().toString()
    
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  
  doIt = function(){
     let a =  this.mess.match(/\[\(\w+\s?\w+\)\]/gi);
	 let d = makeArray(this.data);
     let v = [];
      if(a !== null){
          a = checkArray(a);
          a.forEach(function(item){
              let b: any = {tag: '', adjust: ''};
              b.tag = item;
              b.adjust = (d[item] !== undefined)? d[item] : '';

              v.push(b);
          });
          this.data =  v;
          console.log(this.data);
      }
      
      function checkArray(z){
          //Eliminates duplicate within the array
          var basket = [];
          z.forEach(function(item){
              if(basket.indexOf(item) == -1){
                  basket.push(item);
              }
          });
          console.log(basket,'basket');
          return basket;
      }
	  
	  function makeArray(s){
		  var t = [];
		  s.forEach(function(item){
			  t[item.tag] = item.adjust;			  
		  });
		  
		  return t;
	  }
  }
  
  parseIt = function(){
      var a = this.mess;
      let b = this.data;
      if(b !== null){
          b.forEach(function(item){
              let v = item.tag.match(/\[\((.+)\)\]/)[1];
              let z = new RegExp('\\[\\(' + v + '\\)\\]','gi');
              a = a.replace(z,item.adjust);
          })
          this.answer = a;
		  localStorage.cover_string = this.mess;
		  this.edit = false;
          //console.log(a);
      }
  }
  
  getSelection = function(){
	  var word = window.getSelection().toString();
	  if(word !== '' && !word.includes('[(') && !word.includes(')]')){
		  var wordnew = '[(' + word +')]';
		  var textarea = this.mess;
		  var reg = new RegExp(word,'gi');
		  this.mess = textarea.replace(reg,wordnew);
		  this.doIt();
	  }
  }
  
  pullFromStorage = function(){
	  if(localStorage.hasOwnProperty('cover_string')){
		  this.mess = localStorage.cover_string;
		  if(this.mess !== ''){
			  this.doIt();
		  }
		  
	  }else{
		  this.doIt(); //defualt run original message
	  }
  }
  
  copyClipboard = function(elem){
	  //window.document.querySelectorAll('.' + elem)[0].select();
	  //document.execCommand('copy');
  }
    
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
