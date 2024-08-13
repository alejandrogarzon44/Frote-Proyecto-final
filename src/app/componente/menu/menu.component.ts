import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal:any

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  constructor(private peticion: PeticionService, private router:Router){}

  ngOnInit(): void{
    this.cargarestado()
  
  }

  nombre: String= "Cargando"
  rol:String= "Cargamdo"
 
  cargarestado(){
    var post= {
      Host:this.peticion.urlHost,
      paht:"/usuarios/state",
      payload:{

      }
    }
    this.peticion.Post(post.Host +post.paht,post.payload).then((res:any) =>{
      console.log(res)
      if(res.nombre == "" || res.nombre == undefined){
        this.router.navigate(["/login"])
      }
      this.nombre= res.nombre
      this.rol= res.rol
      
    })
  }
  
  CerrarSession(){
    var post= {
      Host:this.peticion.urlHost,
      paht:"/usuarios/logut",
      payload:{

      }
    }
    this.peticion.Post(post.Host +post.paht,post.payload).then((res:any) =>{
      console.log(res)
      Swal.fire({
        icon: "success",
        title: "OK",
        text: res.mensaje
        
      })
      this.nombre= res.nombre
      this.rol= res.rol
      
    })
  }
 
}


