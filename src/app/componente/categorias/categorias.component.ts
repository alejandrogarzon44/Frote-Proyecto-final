import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  ngOnInit(): void {
    this.ListarTodas
  }

 constructor(private peticion:PeticionService){}

  cod_cat:string =""
  nombre:string =""
  estado:number = 1
  datos:any[]=[]
  idseleccionado:string= ""

  ListarTodas(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/listar",
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

  AbrirModal(){
    this.cod_cat=""
    this.nombre=""
    this.estado= 1
    this.idseleccionado

    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/save",
      payload:{
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado,
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state == true){
          Swal.fire({
            title: "!Bien!",
            text: res.mensaje,
            icon: "exito"
          });

          $('#modalnuevo').modal('hide')
          this.ListarTodas()

          


        }
        
      }
    )

    
    

  }
  EditarId(id:string){
    
    this.idseleccionado=id
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/listarid",
      payload:{
        _id:id
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        this.cod_cat= res.data[0].cod_cat
        this.nombre= res.data[0].nombre
        this.estado= res.data[0].estado
        $('#modalnuevo').modal('show')

      }
    )

  }
  Eliminar(){
    
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/delete",
      payload:{
        _id:this.idseleccionado
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state== true){
          $('#modalnuevo').modal('hide')
          this.ListarTodas()
        }

       
      }
    )
  }
  Actualizar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/update",
      payload:{
        _id:this.idseleccionado,
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state == true){
          $('#modalnuevo').modal('hide')
          this.ListarTodas()

          


        }
        
      }
    )

  }

  
}


