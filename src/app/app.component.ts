// import { Component } from '@angular/core';
// import * as jsPDF from 'jspdf';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'afs';
//   USERS = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "email": "sincere@april.biz",
//       "phone": "1-770-736-8031 x56442"
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "email": "shanna@melissa.tv",
//       "phone": "010-692-6593 x09125"
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "email": "nathan@yesenia.net",
//       "phone": "1-463-123-4447",
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "email": "julianne@kory.org",
//       "phone": "493-170-9623 x156"
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "email": "lucio@annie.ca",
//       "phone": "(254)954-1289"
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis",
//       "email": "karley@jasper.info",
//       "phone": "1-477-935-8478 x6430"
//     }
//   ];

//   public convetToPDF()
//   {
    
//     var doc = new jsPDF();
//     var img = new Image()
//   img.src = 'assets/Logo.png'
//     doc.addImage(img, 'png', 10, 20, 12, 15)
//     doc.setFontSize(40);
//     doc.text("Octonyan loves jsPDF", 35, 25);
//     //doc.addImage("src/assets/Logo.png", "JPEG", 15, 40, 180, 180);
//     doc.save("obrz.pdf");
//   }
  
// }


import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('htmlData') htmlData:ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  constructor() { }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    var img = new Image()
    img.src = 'assets/Logo.png'
    doc.addImage(img, 'png', 10, 20, 40, 55)
    doc.fromHTML(DATA.innerHTML,85,55);
    doc.fromHTML(DATA.innerHTML,85,55,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
}