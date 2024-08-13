import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal:any
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})



export class RegistroComponent implements OnInit {
  
  constructor(private peticion: PeticionService, private router: Router){}
  
  
  
  ngOnInit(): void {
    
  }

 nombre:string =""
 email:string = ""
 password:string = ""
 

  registrar() {
    var post = {

      Host:this.peticion.urlHost,
      paht:"/usuarios/save",
      payload:{
        
        nombre:this.nombre,
        email:this.email,
        password:this.password
  
      }

    }
      
    
    this.peticion.Post(post.Host +post.paht,post.payload).then((res:any) =>{
      console.log(res)
      if(res.state == true){
        Swal.fire({
          icon: "success",
          title: "OK",
          text: res.mensaje
          
        })
        
        this.router.navigate(["login"])
      }else{
        Swal.fire({
          icon: "error",
          title: "!No!.!No!",
          text: res.mensaje
          
          
        });
      }
    })
  }
    
}   

    
  


  
      


    
    
  

 
  
  

  

  

  
  
  
 

