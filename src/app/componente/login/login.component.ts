import { Component, Host, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private peticion: PeticionService, private router: Router){}

  email:string=""
  password:string=""
  
  ngOnInit(): void {
   
  } 
    
  login(){

    let post={
      Host:this.peticion.urlHost,
      paht:"/usuarios/login",
      payload:{
        email:this.email,
        password:this.password,
      }
    }
    this.peticion.Post(post.Host +post.paht,post.payload). then((res:any)  =>{
      console.log(res)
      if(res.state == true){
        Swal.fire({
          icon: "success",
          title: "OK",
          text: res.mensaje
          
        })

        this.router.navigate([""])

      }
      else{
        Swal.fire({
          icon: "error",
          title: "!No!,!No!",
          text: res.mensaje
          
          
        });
      }
    })

  }
}
