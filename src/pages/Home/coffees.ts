import expresso from '../../assets/coffee/expresso.png';
import americano from '../../assets/coffee/americano.png';
import expressoCremoso from '../../assets/coffee/expresso_cremoso.png';
import cafeComLeite from '../../assets/coffee/cafe_com_leite.png';
import cafeGelado from '../../assets/coffee/cafe_gelado.png';
export const Coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    features: ['Tradicional'],
    value: 9.9,
    image: expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    features: ['Tradicional'],
    value: 9.9,
    image: americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    features: ['Tradicional'],
    value: 9.9,
    image: expressoCremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    features: ['Tradicional', 'Gelado'],
    value: 9.9,
    image: cafeGelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    features: ['Tradicional', 'Com leite'],
    value: 9.9,
    image: cafeComLeite,
  },
];
