import { Component, computed, signal } from '@angular/core';
import { ProductCardComponent } from '../producto/product';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CarritoService } from '../../services/carrito.service';
import { CarritoComponent } from '../carrito/carrito';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, CarritoComponent],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css'],
})
export class CatalogComponent {
  products = signal<Product[]>([]);

  inStockCount = computed(() => this.products().filter(p => p.inStock).length);

  constructor(private ProductService: ProductService,
    private CarritoService: CarritoService
  ) {
    this.ProductService.getAll().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error("Error cargando XML: ", err)
    });
  }

  agregar(product: Product) {
    this.CarritoService.agregar(product);
  }

  
}
