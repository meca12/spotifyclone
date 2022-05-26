import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

mainMenu :{
  defaultOptions: Array<any>,
  accesLink:Array<any>
} = {
  defaultOptions:[],
  accesLink:[]
}
customOptions: Array<any> =[]

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions =[
    {name: 'Home',
    icon : 'uil-estate',
    url : ['/']
    }, 
    {
      name: 'Buscar',
    icon : 'uil-search',
    url : ['/','history']
    },
  
    {
      name: 'Tu biblioteca',
    icon : 'uil-book',
    url : ['/','favorites']
    }
  
],
 this.mainMenu.accesLink = [
   {
     name : 'Crear lista',
     icon : 'uil-plus-circle'

   },
   {
     name:'Tus favoritos',
     icon:'uil-favorite'
   }
 ]

 this.customOptions = [
   {
     name : 'Mi lista °1', 
     router :['/'],

   },
   {
     name : 'Mi lista °2',
     router : ['/']
   },{
     name : 'Mi lista °3',
     router :['/']
   },
   {
     name : 'Mi lista °4', 
     router : ['/']
   }
 ]

  }

}
