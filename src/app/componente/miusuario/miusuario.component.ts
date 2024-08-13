import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal:any
@Component({
  selector: 'app-miusuario',
  templateUrl: './miusuario.component.html',
  styleUrls: ['./miusuario.component.css']
})
export class MiusuarioComponent implements OnInit {
  
  ngOnInit(): void {
    this.Cargar()
  } 
    

 constructor(private peticion:PeticionService){}

  
  
  nombre:string=""
  email:string=""
  password:string=""
  confirm:string=""
  estado:string = "0"
  rol: string ="2"

  Cargar(){
    
    let post ={
      Host:this.peticion. urlHost,
      path:"/usuario/miusuario",
      payload:{
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        this.nombre=res.data[0].nombre
        this.email=res.data[0].email
        this.estado=res.data[0].estado
        this.rol=res.data[0].rol
      }
    )

  }

  actulizarpass(){
    if(this.password != this.confirm){
      Swal.fire({
        icon: "error",
        title: "!No!.!No!",
        text: "Verificar el Password"
        
        
      });

    }else{
      let post ={
        Host:this.peticion. urlHost,
        path:"/usuario/miusuario",
        payload:{
          
        }
      }
  
      this.peticion.Post(post.Host+post.path, post.payload).then(
        (res:any) =>{
          console.log(res)
          if( res.state == true){
            Swal.fire({
              icon: "success",
              title: "!Bien!",
              text: res.mensaje
              
              
            });
      
          }else{
            Swal.fire({
              icon: "error",
              title: "!No!.!No!",
              text: res.mensaje
              
              
            });
      
          }

        }
      )

    }
  }

}
