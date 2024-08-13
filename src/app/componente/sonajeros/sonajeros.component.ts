import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-sonajeros',
  templateUrl: './sonajeros.component.html',
  styleUrls: ['./sonajeros.component.css']
})
export class SonajerosComponet implements OnInit{
  
 ngOnInit():void{
  
  this.ListarTodas()
 }

  constructor(private peticion: PeticionService){}

  datos: any [] =[]
  
  ListarTodas(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/productos/listar",
      payload:{
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        this.datos=res.data
      }
    )

  }


}
