import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-teteros',
  templateUrl: './teteros.component.html',
  styleUrls: ['./teteros.component.css']
})
export class TeterosComponent {
  OnInit():void{
  
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
