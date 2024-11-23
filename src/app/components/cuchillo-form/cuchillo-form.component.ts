import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuchilloService } from '../../service/cuchillo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuchillo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuchillo-form.component.html',
  styleUrl: './cuchillo-form.component.css'
})
export class CuchilloFormComponent {


  tipos:string[] = ["chef", "santoku","pan" ,"deshuesador","mondador", "fileteador", "chino","caza"]; 
  filos:string[] = ["liso","dentado"]; 
  materialHoja:string[] = ["acero inoxidable","acero al carbono","ceramica"]; 
  materialMango:string[] = ["madera","metal","plastico", "hueso"]
  
fb=inject(FormBuilder);
servicio=inject(CuchilloService);
route=inject(Router)


formulario=this.fb.nonNullable.group(
  {
    nombre : ["", [Validators.required]],
    tipo : ["", [Validators.required]], 
    filo : ["", [Validators.required]], 
    hoja : ["", [Validators.required]], 
    mango : ["", [Validators.required]], 
    longitudHoja : [0, [Validators.min(1)]], 
    longitudTotal : [0, [Validators.min(1)]], 
  }
)

addCuchillo(){
  if(this.formulario.invalid)return;

  const cuchillo=this.formulario.getRawValue();

  this.servicio.postCuchillo(cuchillo).subscribe({
    next: ()=>{
      console.log("cuchillo agregado correctamente", cuchillo);
        this.route.navigate(["lista"]);
    },
    error: (e: Error)=>{
console.log(e.message);
    }
  })
}
}
