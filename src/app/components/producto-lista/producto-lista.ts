import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule], // Añádelo aquí
  templateUrl: './producto-lista.html',
})

export class ProductoLista {
  private readonly productoServicio = inject(ProductoService);
  private enrutador = inject(Router)

  // toSignal gestiona la suscripción, la desuscripción y la reactividad por ti.
  // Se ejecuta inmediatamente al instanciar la clase.
  public productos = toSignal(this.productoServicio.obtenerProductosLista(), {
    initialValue: []
  });

  editarProducto(id: number) {
    this.enrutador.navigate(['/editar-producto', id]);
  }
}