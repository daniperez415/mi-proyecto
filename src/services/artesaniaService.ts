import { Artesano, Producto } from '../types/index';


export const artesanos: Artesano[] = [
  {
    id: 1,
    nombre: 'Pedro Talateca',
    especialidad: 'Cerámica Talavera',
    imagen: 'https://i.pinimg.com/originals/5f/27/73/5f27733ad0a4974efa8f071857b7081c.jp',
    ubicacion: 'Puebla, México',
  },
  {
    id: 2,
    nombre: 'Reyna Rayón Salinas',
    especialidad: 'Textiles Otomí',
    imagen: 'https://static.wixstatic.com/media/f8da71_0361c60ef673407984a253555e0cd066~mv2.png/v1/fill/w_713,h_713,al_c,lg_1,q_90/f8da71_0361c60ef673407984a253555e0cd066~mv2.png',
    ubicacion: 'Estado de México',
  },
  {
    id: 3,
    nombre: 'Rosa Hernández',
    especialidad: 'Alebrijes',
    imagen: 'https://cdn.shopify.com/s/files/1/0962/1578/products/Alebrije_Dragon_de_Cresta_3_1.png?v=1581614063',
    ubicacion: 'Oaxaca, México',
  },
];

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Jarrón Talavera Azul',
    descripcion: 'Jarrón hecho a mano con técnica tradicional de Talavera',
    imagen: 'https://i.pinimg.com/originals/5f/27/73/5f27733ad0a4974efa8f071857b7081c.jpg',
    precioInicial: 500,
    precioActual: 650,
    artesanoId: 1,
    fechaFin: '2026-07-01',
  },
  {
    id: 2,
    nombre: 'Mantel Bordado Otomí',
    descripcion: 'Mantel con bordado a mano con motivos de la cultura Otomí.',
    imagen: 'https://static.wixstatic.com/media/f8da71_0361c60ef673407984a253555e0cd066~mv2.png/v1/fill/w_713,h_713,al_c,lg_1,q_90/f8da71_0361c60ef673407984a253555e0cd066~mv2.png',
    precioInicial: 468,
    precioActual: 280,
    artesanoId: 2,
    fechaFin: '2026-07-05',
  },
  {
    id: 3,
    nombre: 'Alebrije Dragón',
    descripcion: 'Figura de madera pintada a mano representando un dragón.',
    imagen: 'https://cdn.shopify.com/s/files/1/0962/1578/products/Alebrije_Dragon_de_Cresta_3_1.png?v=1581614063',
    precioInicial: 1200,
    precioActual: 1200,
    artesanoId: 3,
    fechaFin: '2026-07-10',
  },
];
