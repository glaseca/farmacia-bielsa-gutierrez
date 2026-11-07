import type { Service } from '../types';

export const site = {
  name: 'Farmacia Bielsa Gutiérrez',
  shortName: 'Bielsa Gutiérrez',
  tagline: 'Tu farmacia de barrio en Huesca.',
  description:
    'Medicinas, encargos, osteopatía, fisioterapia y parafarmacia en Huesca. Una farmacia cercana, profesional y sin prisas.',
  phoneDisplay: '974 12 34 56',
  phoneHref: '+34974123456',
  email: 'hola@farmaciabielsagutierrez.es',
  address: {
    street: 'Avenida de los Pirineos, 24',
    city: '22004 Huesca',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Avenida+de+los+Pirineos+24+22004+Huesca',
  instagram: {
    handle: '@farmaciabielsagutierrez',
    url: 'https://www.instagram.com/farmaciabielsagutierrez/',
  },
  hours: [
    { days: 'Lunes a viernes', value: '9:00 – 13:30 · 16:30 – 20:30' },
    { days: 'Sábado', value: '9:30 – 13:30' },
    { days: 'Domingo', value: 'Cerrado' },
  ],
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Osteopatía y fisio', href: '#especialidades' },
    { label: 'La farmacia', href: '#farmacia' },
    { label: 'Visítanos', href: '#visitanos' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;

export const services: Service[] = [
  {
    title: 'Medicinas y receta electrónica',
    description:
      'Tu medicación, siempre a mano. Te ayudamos con la receta electrónica y con el seguimiento de tu tratamiento.',
    icon: 'pill',
  },
  {
    title: 'Encargos y reservas',
    description:
      'Pídenos lo que necesites por teléfono o Instagram. Lo preparamos y te avisamos cuando esté listo.',
    icon: 'bag',
  },
  {
    title: 'Osteopatía',
    description:
      'Sesiones personalizadas para aliviar dolores de espalda, cuello y articulaciones. Sin prisas y sin listas eternas.',
    icon: 'spine',
  },
  {
    title: 'Fisioterapia',
    description:
      'Recupera el movimiento y evita recaídas con un plan adaptado a tu cuerpo y a tu día a día.',
    icon: 'activity',
  },
  {
    title: 'Farmacia infantil',
    description:
      'Consejo cercano para peques y familias: fiebre, lactancia, piel atópica, mocos y todas esas dudas de madrugada.',
    icon: 'baby',
  },
  {
    title: 'Parafarmacia y dermofarmacia',
    description:
      'Cosmética, nutrición y cuidado diario seleccionados por nuestro equipo. Lo que de verdad funciona.',
    icon: 'sparkles',
  },
];

export const specialties = [
  'Valoración inicial y diagnóstico funcional',
  'Tratamiento manual personalizado',
  'Cita en menos de 48 horas',
];

export const stats = [
  { value: '+25', label: 'años en el barrio' },
  { value: '8.000', label: 'vecinos cuidados' },
  { value: '4,9', label: 'valoración media', icon: 'star' as const },
];
