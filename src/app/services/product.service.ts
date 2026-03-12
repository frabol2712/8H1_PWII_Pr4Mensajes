import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Audifonos Bluetooth Pro',
      price: 599,
      imageUrl: 'images/audifonos-bluetooth-pro.jpg',
      category: 'Audio',
      description:
        'Audifonos inalambricos de alta calidad con sonido envolvente y cancelación de ruido activa.',
      inStock: true,
    },
    {
      id: 2,
      name: 'Teclado Mecánico RGB',
      price: 1299,
      imageUrl: 'images/teclado-mecanico-rgb.jpg',
      category: 'Periféricos',
      description:
        'Teclado mecánico con switches táctiles, retroiluminación RGB por tecla y construcción en aluminio.',
      inStock: false,
    },
    {
      id: 3,
      name: 'Monitor 27" 144Hz',
      price: 4999,
      imageUrl: 'images/monitor-27-144hz.jpg',
      category: 'Monitores',
      description:
        'Monitor IPS de 27 pulgadas con resolución QHD, 144Hz de refresco y tiempo de respuesta de 1ms.',
      inStock: true,
    },
    {
      id: 4,
      name: 'Mouse Inalámbrico Ergonómico',
      price: 449,
      imageUrl: 'images/mouse-inalambrico-ergonomico.jpg',
      category: 'Periféricos',
      description:
        'Mouse ergonómico con sensor óptico de 1600 DPI, conexión USB o Bluetooth y batería de larga duración.',
      inStock: true,
    },
    {
      id: 5,
      name: 'Webcam Full HD',
      price: 799,
      imageUrl: 'images/webcam-full-hd.jpg',
      category: 'Video',
      description:
        'Cámara web 1080p con micrófono integrado, corrección automática de luz y campo de visión de 90°.',
      inStock: false,
    },
    {
      id: 6,
      name: 'SSD NVMe 1TB',
      price: 1850,
      imageUrl: 'images/ssd-nvme-1tb.jpg',
      category: 'Almacenamiento',
      description:
        'Unidad de estado sólido NVMe PCIe 4.0 con velocidades de lectura de hasta 7000 MB/s.',
      inStock: true,
    },
    {
      id: 7,
      name: 'Silla Gamer Pro',
      price: 3299,
      imageUrl: 'images/silla-gamer-pro.jpg',
      category: 'Mobiliario',
      description:
        'Silla ergonómica con soporte lumbar ajustable, reposabrazos 4D y recubrimiento en piel sintética.',
      inStock: true,
    },
    {
      id: 8,
      name: 'Hub USB-C 7 en 1',
      price: 649,
      imageUrl: 'images/hub-usb-c.jpg',
      category: 'Accesorios',
      description:
        'Concentrador USB-C con HDMI 4K, 3 puertos USB-A, lector de tarjetas SD y carga rápida de 100W.',
      inStock: false,
    },
  ];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }
}
