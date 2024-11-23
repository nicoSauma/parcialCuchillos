import { Component, inject, OnInit } from '@angular/core';
import { CuchilloCardComponent } from '../cuchillo-card/cuchillo-card.component';
import { CuchilloService } from '../../service/cuchillo.service';
import { Cuchillo } from '../../types/cuchillo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuchillo-list',
  standalone: true,
  imports: [CuchilloCardComponent],
  templateUrl: './cuchillo-list.component.html',
  styleUrl: './cuchillo-list.component.css'
})
export class CuchilloListComponent implements OnInit {
ngOnInit(): void {
  this.getLista();
}

servicio=inject(CuchilloService);
listaCuchillos : Cuchillo[] = []; 
ruta = inject(Router);

getLista(){
  this.servicio.getCuchillos().subscribe({
    next:(lista)=>{
      this.listaCuchillos=lista;
    },
    error:(e:Error)=>{
      console.log(e.message);
    }
  })
}

eventoDetalle (id:string) {
  this.ruta.navigateByUrl(`detalle/${id}`)
}

eventoEliminar (id:string) {
  this.servicio.deleteCuchillo(id).subscribe({
    next : (cuchillo:Cuchillo) =>{
      console.log("cuchillo eliminado" , cuchillo);
      this.listaCuchillos.splice(this.listaCuchillos.findIndex(c=>c.id===id), 1);
    }
  })
}

}
