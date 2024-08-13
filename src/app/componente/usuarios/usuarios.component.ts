import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal: any


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  ngOnInit(): void {
    this.ListarTodas()
    
  }

 constructor(private peticion:PeticionService){}

  
  nombre:string =""
  email:string = ""
  password:string= ""
  datos:any[]=[]
  estado:string= "0"
  rol:string= "2"
  idseleccionado:string= ""

  
  ListarTodas(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/usuarios/listar",
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
    
    
    this.nombre=""
    this.email= ""
    this.password=""
    this.rol="2"
    this.idseleccionado="0"


    $('#modalnuevo').modal('show')
  }
  
  Guardar(){
    let post ={
      Host:this.peticion. urlHost,
      path:"/usuarios/save",
      payload:{
        
        nombre:this.nombre,
        email:this.email,
        password:this.password,
        
        
        
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
      path:"/usuarios/listarid",
      payload:{
        _id:id
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.data != undefined){
         
         this.nombre= res.data[0].nombre
         this.email= res.data[0].email
         this.estado= res.data[0].estado
         this.rol= res.data[0].rol
        
         

         $('#modalnuevo').modal('show')
        }

      }
    )

  }

  Eliminar(){
    
    let post ={
      Host:this.peticion. urlHost,
      path:"/usuarios/delete",
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
      path:"/usuarios/update",
      payload:{
        _id:this.idseleccionado,
        nombre:this.nombre,
        estado:this.estado,
        rol:this.rol,
        
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) =>{
        console.log(res)
        if(res.state == true){

          Swal.fire({
            title: "Quire actualizar este Usuario?",
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

 


