import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='blog';
  // isHomePage :boolean =false ;
  // pagetitle(){
  //   return 'hello from blog'};
  /////////////////////////
  defultemail= 'sogoud@gmail.com';
  isHomePage :boolean =true ;
  pagetitle(){
    return 'hello from blog'};
  
  isheader = false;
  headerClass(){
    return{
    header :this.isheader,
    italic:this.isheader,
    gold:!this.isheader,

  };
  }
  
  // singlestylebinding =this.isheader ? '4rem': '6rem' ;
// not woking
//   multiplestylebinding ={
//   fontsize :this.isheader ? '6rem' :'4rem',
//   fontweight:this.isheader ? 'bold': '200', 
// };

// not working
singlestylebinding(){
  return this.isheader ? '4rem': '6rem' ;
   
}
multiplestylebinding(){
  return{   fontsize :this.isheader ? '6rem' :'4rem',
  fontweight:this.isheader ? 'bold': '200', 
};
}
Toggleheaderstate(){
  this.isheader = !this.isheader
};
  
 }
