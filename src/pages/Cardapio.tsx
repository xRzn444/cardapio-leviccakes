import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
//import ProductModal from "src/components/ProductModal.tsx";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CardapioProps {
  onAddToCart: (product: Product) => void;
}

const Cardapio: React.FC<CardapioProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

 // const categories = [
 //   { id: 'bolos', name: 'Bolos' },
 //   { id: 'doces', name: 'Doces' },
 //   { id: 'salgados', name: 'Salgados' },
 //   { id: 'bebidas', name: 'Bebidas' }
 // ];
  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'bolo-de-pote', name:'Bolos de pote'},
    { id: 'bolo-fatia', name:'Bolos fatias'},
    { id: 'brownie', name: 'Brownie' },
    { id: 'tortas', name: 'Tortas' },
    { id: 'cone', name: 'Cones' },
    { id: 'copo-felicidade', name: 'Copos da felicidade' },
    { id: 'trufas', name: 'Trufas' },
    { id: 'acai', name: 'Açaí' },
    { id: 'salgados', name: 'Salgados' },
  ];
  const products: Product[] = [
   
    // Bolo de pote
    {
      id: '1',
      name: 'Bolo de pote - Chocolate gourmet com maracujá',
      description: 'Deliciosa massa de chocolate cacau 50% molhadinha com chocolate trufado e creme de maracujá gourmet, finalização com maracujá em cima! 250 ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-chocolate-maracuja.jpg',
      category: 'bolo-de-pote'
    },
    {
      id: '2',
      name: 'Bolo de pote - Chocolatudo',
      description: 'Deliciosa  massa de chocolate  molhadinha, com duas  camadas de recheio  chocolate gourmet,  finalização com raspa de chocolate! 250ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-chocolatudo.jpg',
      category: 'bolo-de-pote'
    },
    {
      id: '3',
      name: 'Bolo de pote - Ninho trufado com Chocolate branco, massa branca',
      description: 'Deliciosa massa branca molhadinha com recheio de creme de Ninho Trufado e recheio de Chocolate Gourmet Branco, finalização com raspas de Chocolate branco! 250ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-ninho-chocolate-branco-massa-branca.jpg',
      category: 'bolo-de-pote'
    },
    {
      id: '4',
      name: 'Bolo de pote - Ninho trufado com Chocolate, massa de chocolate',
      description: 'Deliciosa massa de chocolate molhadinha, com recheio de Creme de Ninho trufado e Chocolate gourmet, finalização com raspas de Chocolate! 250ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-ninho-chocolate-massa-chocolate.jpg',
      category: 'bolo-de-pote'
    },
    {
      id: '5',
      name: 'Bolo de pote - Ninho trufado com Maracujá, massa de chocolate',
      description: 'Deliciosa massa de chocolate molhadinha, creme de Ninho trufado e creme de maracujá gourmet, finalização com maracujá! 250 ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-ninho-maracuja-massa-chocolate.jpg',
      category: 'bolo-de-pote'
    },
    {
      id: '6',
      name: 'Bolo de pote - Prestígio com chocolate Gourmet',
      description: 'Deliciosa massa de chocolate molhadinha, com recheio de Prestígio de coco e creme de chocolate gourmet, finalização com coco ralado! 250 ml',
      price: 14.99,
      image: 'public/arquivos/produtos/bolo-de-pote/pote-prestigio-chocolate.jpg',
      category: 'bolo-de-pote'
    },
     
    // Bolo fatia
    {
      id: '7',
      name: 'Bolo de cenoura caseiro',
      description: 'Uma deliciosa fatia de bolo de cenoura com chocolate',
      price: 7.50,
      image: 'public/arquivos/produtos/bolos-fatias/bolo-cenoura-caseiro.jpg',
      category: 'bolo-fatia'
    },
    {
      id: '8',
      name: 'Bolo gelado de chocolate',
      description: 'Delicioso bolo de Chocolate feito com massa de chocolate e recheio cremoso de chocolate.',
      price: 15.00,
      image: '/arquivos/produtos/bolos-fatias/bolo-gelado-chocolate.jpg',
      category: 'bolo-fatia'
    },
    {
      id: '9',
      name: 'Bolo de Ninho com chocolate',
      description: 'Deliciosa massa de chocolate, com recheio cremoso de Ninho com chocolate.',
      price: 15.00,
      image: '/arquivos/produtos/bolos-fatias/bolo-ninho-chocolate.jpg',
      category: 'bolo-fatia'
    },
    {
      id: '10',
      name: 'Bolo de Ninho com morango',
      description: 'Massa fofinha branca, com recheio de ninho e pedaços de morango.',
      price: 15.00,
      image: '/arquivos/produtos/bolos-fatias/bolo-ninho-morango.jpg',
      category: 'bolo-fatia'
    },
   
    // Tortas
    {
      id: '11',
      name: 'Torta de Abacaxi com Ninho - 500g',
      description: 'Deliciosa torta de Abacaxi com Recheio de Ninho trufado, pedaços de abacaxi e biscoito maizena. Finalização com abacaxi e raspa de chocolate branco! ',
      price: 25.90,
      image: 'public/arquivos/produtos/tortas/torta-abacaxi-ninho.jpg',
      category: 'tortas'
    },
    {
      id: '12',
      name: 'Torta de Limão - 200ml',
      description: 'Tortinha de limão com um recheio super cremoso e delicioso, com o gostinho de limão! ',
      price: 10.90,
      image: 'public/arquivos/produtos/tortas/torta-limão.jpg',
      category: 'tortas'
    },
    {
      id: '13',
      name: 'Torta de Abacaxi - 250ml',
      description: 'Deliciosa torta de Abacaxi com Recheio de Ninho trufado, pedaços de abacaxi e biscoito maizena. Finalização com abacaxi e raspa de chocolate branco! ',
      price: 16.99,
      image: 'public/arquivos/produtos/tortas/torta-abacaxi.jpg',
      category: 'tortas'
    },
    
    // Salgados
    {
      id: '14',
      name: 'Empadão de Frango - 250g',
      description: 'Uma delicioco empadão de frango, com recheio de frango com milho. Finalização com tempero especial e queijo parmesão!',
      price: 9.90,
      image: 'public/arquivos/produtos/salgados/empadao-de-frango.jpg',
      category: 'salgados'
    },
    
    // Brownie
    {
      id: '15',
      name: 'Brownie recheado - Chocolate',
      description: 'Um delicioso brownie recheado com Chocolate gourmet!',
      price: 9.90,
      image: 'public/arquivos/produtos/brownie/brownie-chocolate.jpg',
      category: 'brownie'
    },
    {
      id: '16',
      name: 'Brownie recheado - Ninho com Nutella',
      description: 'Um delicioso brownie recheado com Ninho e Nutella!',
      price: 12.00,
      image: 'public/arquivos/produtos/brownie/brownie-ninho-nutella.jpg',
      category: 'brownie'
    },
    
    // Cones
    {
      id: '17',
      name: 'Cone - Chocolatudo',
      description: 'Cone trufado com chocolate meio amargo e recheio de chocolate gourmet',
      price: 11.90,
      image: 'public/arquivos/produtos/cone/cone-chocolatudo.jpg',
      category: 'cone'
    },
    {
      id: '18',
      name: 'Cone - Ninho com chocolate',
      description: 'Cone trufado com Ninho e chocolate gourmet',
      price: 11.90,
      image: 'public/arquivos/produtos/cone/cone-ninho-chocolate.jpg',
      category: 'cone'
    },
    {
      id: '19',
      name: 'Cone - Ouro branco',
      description: 'Cone trufado de chocolate branco e chocolate meio amargo, recheio de chocolate gourmet e ouro branco',
      price: 12.90,
      image: 'public/arquivos/produtos/cone/cone-ouro-branco.jpg',
      category: 'cone'
    },
    {
      id: '20',
      name: 'Cone - Prestígio',
      description: 'Delicioso cone trufado com recheio de coco cremoso e chocolate gourmet.',
      price: 12.00,
      image: 'public/arquivos/produtos/cone/cone-prestigio.jpg',
      category: 'cone'
    },
    
    // Copos da felicidade
    {
      id: '21',
      name: 'Copo da felicidade - Ninho com morango e brownie - 200ml',
      description: 'Copo da felicidade com recheio de Ninho, morango, brownie e chocolate!',
      price: 19.00,
      image: 'public/arquivos/produtos/copo-da-felicidade/copo-ninho-morango-brownie.jpg',
      category: 'copo-felicidade'
    },
    {
      id: '22',
      name: 'Copo da felicidade - Oreo e Brownie - 200ml',
      description: 'Copo da felicidade de Oreo com Brownie feito Primeira camada de Recheio Oreo cremoso trufado , Brownie Camada de Recheio Chocolate Preto Gourmet Camada de Recheio chocolate Branco trufado . Finalização biscoito Oreo brownie e raspa de chocolate branco.',
      price: 19.00,
      image: 'public/arquivos/produtos/copo-da-felicidade/copo-oreo-brownie.jpg',
      category: 'copo-felicidade'
    },
    {
      id: '23',
      name: 'Copo da felicidade - Ouro branco e Brownie - 200ml',
      description: 'Copo da felicidade feito Com uma camada de Ninho Trufado Brownie, Ouro Branco Uma camada de chocolate preto gourmet Uma camada de chocolate branco trufado. Finalização com Ouro Branco , Brownie e raspa de chocolate branco.',
      price: 19.00,
      image: 'public/arquivos/produtos/copo-da-felicidade/copo-ouro-branco-brownie.jpg',
      category: 'copo-felicidade'
    },
    
    // Trufas
    {
      id: '24',
      name: 'Trufa de chocolate gourmet',
      description: 'Trufa com recheio super cremoso de Chocolate gourmet e casquinha de chocolate meio amargo!',
      price: 5.00,
      image: 'public/arquivos/produtos/trufas/trufa-chocolate.jpg',
      category: 'trufas'
    },
    {
      id: '25',
      name: 'Trufa de Ninho com chocolate gourmet',
      description: 'Deliciosa trufa de chocolate meio amargo com recheio de Ninho e Chocolate Gourmet!',
      price: 5.00,
      image: 'public/arquivos/produtos/trufas/trufa-ninho-chocolate.jpg',
      category: 'trufas'
    },
    {
      id: '26',
      name: 'Trufa Sensação',
      description: 'Deliciosa trufa feita com chocolate ao leite, recheio de chocolate gourmet e moranguinho!',
      price: 5.00,
      image: 'public/arquivos/produtos/trufas/trufa-sensacao.jpg',
      category: 'trufas'
    },

    // Açaí
    {
      id: '27',
      name: 'Açaí tradicional',
      description: 'Delicioso açaí cremoso com acréscimo de leite condensado, leite em pó ,paçoca, banana e granola.',
      price: 16.00,
      image: 'public/arquivos/produtos/acai/acai-tradicional-500ml.jpg',
      category: 'acai'     
    },
    
    // Bebidas
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8 bg-confeitaria-creme">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-dancing font-bold text-confeitaria-chocolate mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-xl text-confeitaria-marrom">
            Delícias artesanais feitas com amor!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-confeitaria-marrom" size={20} />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa bg-white"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-confeitaria-rosa text-confeitaria-chocolate shadow-lg'
                  : 'bg-white text-confeitaria-marrom hover:bg-confeitaria-bege'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="card-confeitaria group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-dancing font-bold text-confeitaria-chocolate">
                  {product.name}
                </h3>
                <p className="text-sm text-confeitaria-marrom line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-confeitaria-chocolate">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-confeitaria-rosa hover:bg-confeitaria-rosa/90 text-confeitaria-chocolate p-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-confeitaria-marrom">
              Nenhum produto encontrado.
            </p>
            <p className="text-confeitaria-marrom mt-2">
              Tente uma busca diferente ou selecione outra categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardapio;
