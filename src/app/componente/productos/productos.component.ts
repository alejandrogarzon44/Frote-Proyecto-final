import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ngOnInit(): void {
    this.ListarTodas(),
    this.ListarTodasCategorias()
  }

 constructor(private peticion:PeticionService){}

  cod_cat:string =""
  cod_prod:string =""
  nombre:string =""
  estado:number = 1
  imagen:string=""
  precio:number= 0
  datos:any[]=[]
  datoscategorias:any[]=[]
  idseleccionado:string= ""

  ListarTodasCategorias(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/categorias/listar",
      payload:{
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        this.datoscategorias = res.data
      }
    )

  }

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

  AbrirModal(){
    
    this.cod_prod=""
    this.nombre=""
    this.estado= 1
    this.imagen=""
    this.precio= 0
    this.idseleccionado

    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/productos/save",
      payload:{
        cod_cat:this.cod_cat,
        cod_prod:this.cod_prod,
        nombre:this.nombre,
        estado:this.estado,
        imagen:this.imagen,
        precio:this.precio
        
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
        else
        Swal.fire({
          title: "!No,No!",
          text: res.mensaje,
          icon: "error"
        });
        
      }
    )

    
    

  }
  EditarId(id:string){
    
    this.idseleccionado=id
    let post ={
      Host:this.peticion. urlHost,
      path:"/productos/listarid",
      payload:{
        _id:id
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.data != undefined){
         this.cod_cat= res.data[0].cod_cat
         this.cod_prod= res.data[0].cod_prod
         this.nombre= res.data[0].nombre
         this.estado= res.data[0].estado
         this.imagen= res.data[0].imagen
         this.precio= res.data[0].precio

         $('#modalnuevo').modal('show')
        }

      }
    )

  }
  Eliminar(){
    
    let post ={
      Host:this.peticion. urlHost,
      path:"/productos/delete",
      payload:{
        _id:this.idseleccionado
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state== true){
          Swal.fire({
            title: "Estas seguro de Eliminar este Producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
          }).then((res:any) => {
            
            if (res.mensaje) {
              Swal.fire({
                title: "!Bien!",
                text: "Eliminado Correctamente.",
                icon: "success"
              });
            }
          })
          $('#modalnuevo').modal('hide')
          this.ListarTodas()

          


        }
        else
        Swal.fire({
          title: "!No,No!",
          text: res.mensaje,
          icon: "error"
        })
        
         
       
      }
    )
  }
  Actualizar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/productos/update",
      payload:{
        _id:this.idseleccionado,
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado,
        imagen:this.imagen,
        precio:this.precio
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state == true){

          Swal.fire({
            title: "Quire actualizar este Producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Actulizar!"
          }).then((res:any) => {
            
            if (res.mensaje) {
              Swal.fire({
                title: "!Bien!",
                text: "Actualizado Correctamente.",
                icon: "success"
              });
            }
          });
          $('#modalnuevo').modal('hide')
          this.ListarTodas()

          


        }
        else
        Swal.fire({
          title: "!No,No!",
          text: res.mensaje,
          icon: "error"
        })
        
        
      }
    )

  }

  
}
