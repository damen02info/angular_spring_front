import { Component, inject, OnInit, signal } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.html',
})
export class EditarProducto {
  // Inicializamos el Signal con un objeto vacío pero tipado
  public producto = signal<Producto>(new Producto());

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);
  private enrutador = inject(Router);
  private id: number = 0;
  
  ngOnInit() {
    this.id = Number(this.ruta.snapshot.params['id']);

    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (data) => {
        // .set() dispara la notificación a la vista automáticamente
        this.producto.set(data);
      },
      error: (err) => console.error('Error al cargar:', err)
    });
  }

  onSubmit() {
    this.editarProducto();
  }

  editarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto()).subscribe({
      next: () => this.irProductoLista(),
      error: (err) => console.error('Error al editar:', err)
    });
  }

  irProductoLista() {
    this.enrutador.navigate(['/productos']);
  }
}