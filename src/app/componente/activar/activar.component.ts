import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';
 declare var Swal:any
@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent implements OnInit{
  
  email:string = ""
  codigo:string= ""

  constructor(private actroute:ActivatedRoute, private peticion: PeticionService){}

  ngOnInit(): void {
    this.email= this.actroute.snapshot.params["correo"]
    this.codigo= this.actroute.snapshot.params["codigo"]
  }

  Activar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/usuarios/activar",
      payload:{
        email:this.email,
        codigoact:this.codigo

      
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        Swal.fire({
          icon: "success",
          title: "OK",
          text: res.mensaje
          
        })

      } 
    )
      
  


  }

}
