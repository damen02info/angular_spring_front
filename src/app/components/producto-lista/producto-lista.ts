import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
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

export class ProductoLista implements OnInit {
  private readonly productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  // 1. Usamos un signal normal (RW) en lugar de toSignal
  public productos = signal<Producto[]>([]);

  ngOnInit() {
    this.cargarProductos();
  }

  // 2. Encapsulamos la carga en un método reutilizable
  cargarProductos() {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error('Error al cargar:', err)
    });
  }

  editarProducto(id: number) {
    this.enrutador.navigate(['/editar-producto', id]);
  }

  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro?')) {
      this.productoServicio.eliminarProducto(id).subscribe({
        next: () => {
          // 3. Simplemente volvemos a llamar a la carga
          this.cargarProductos();
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }
}