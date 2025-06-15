
import React, { useState } from 'react';
import { ShoppingCart, Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onAddToCart: (product: any) => void;
}

const Index: React.FC<HomeProps> = ({ onAddToCart }) => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Cone ouro branco',
      price: 12.90,
      image: '/arquivos/produtos/cone/cone-ouro-branco.jpg',
      description: 'Cone trufado de chocolate branco e chocolate meio amargo Recheio de chocolate gourmet e recheio cremoso de ouro branco'
    },
    {
      id: '2',
      name: 'Bolo de pote - Prestígio com chocolate Gourmet',
      price: 14.90,
      image: '/arquivos/produtos/bolo-de-pote/pote-prestigio-chocolate.jpg',
      description: 'Deliciosa massa de chocolate molhadinha, com recheio de Prestígio de coco e creme de chocolate gourmet, finalização com coco ralado!'
    },
    {
      id: '3',
      name: 'Açaí tradicional - 500ml',
      price: 16.00,
      image: '/arquivos/produtos/acai/acai-tradicional-500ml.jpg',
      description: 'Delicioso açaí cremoso com acréscimo de leite condensado, leite em pó ,paçoca, banana e granola.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      text: 'Os bolos mais deliciosos da cidade! Sempre frescos e saborosos.'
    },
    {
      name: 'João Santos',
      rating: 5,
      text: 'Atendimento excepcional e produtos de qualidade. Recomendo!'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      text: 'Meu lugar favorito para comprar doces. Nunca me decepciona!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-confeitaria-creme to-confeitaria-bege overflow-hidden">
  <div className="w-full flex flex-col lg:flex-row min-h-[400px]">
    {/* Imagem à esquerda, só em telas grandes */}
    <div className="relative w-full lg:w-[40%] min-h-[400px] h-full hidden lg:block">
      <img
        src="/arquivos/Fotos/Leni.png"
        alt="Levic Cakes"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    {/* Texto centralizado */}
    <div className="flex flex-col justify-center items-center w-full lg:w-[60%] px-8 py-12 z-10">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-dancing font-bold text-confeitaria-chocolate leading-tight text-center">
          Levic Cakes
        </h1>
        <h2 className="text-2xl lg:text-3xl font-dancing text-confeitaria-marrom text-center">
          Doceria & Cafeteria
        </h2>
        <p className="text-xl text-confeitaria-chocolate font-medium text-center">
          A vida com mais sabor!
        </p>
        <p className="text-lg text-confeitaria-marrom leading-relaxed text-center my-6">
          Delícias artesanais feitas com amor e ingredientes selecionados. 
          Cada mordida é uma experiência única que aquece o coração.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Link to="/cardapio" className="btn-primary text-center">
            Ver Cardápio
          </Link>
          <a 
            href="https://wa.me/5531991957486" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-dancing font-bold text-confeitaria-chocolate mb-4">
              Nossos Produtos em Destaque
            </h2>
            <p className="text-confeitaria-marrom text-lg max-w-2xl mx-auto">
              Conheça alguns dos nossos produtos mais queridos, feitos com ingredientes frescos e muito carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="card-confeitaria animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-dancing font-bold text-confeitaria-chocolate mb-2">
                  {product.name}
                </h3>
                <p className="text-confeitaria-marrom mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-confeitaria-chocolate">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-confeitaria-rosa hover:bg-confeitaria-rosa/90 text-confeitaria-chocolate p-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações da Loja */}
      <section className="py-16 bg-confeitaria-bege">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-confeitaria-chocolate" size={24} />
              </div>
              <h3 className="text-xl font-dancing font-bold text-confeitaria-chocolate mb-2">
                Localização
              </h3>
              <p className="text-confeitaria-marrom">
                R. Santa Maria, 20<br />
                Pedra Azul, Contagem - MG
              </p>
            </div>

            <div className="text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-confeitaria-chocolate" size={24} />
              </div>
              <h3 className="text-xl font-dancing font-bold text-confeitaria-chocolate mb-2">
                Horário de Funcionamento
              </h3>
              <p className="text-confeitaria-marrom">
                Segunda a Sábado: 12:00 - 20:00<br />
                Domingo: 11:00 - 18:00
              </p>
            </div>

            <div className="text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-confeitaria-chocolate" size={24} />
              </div>
              <h3 className="text-xl font-dancing font-bold text-confeitaria-chocolate mb-2">
                Entregas
              </h3>
              <p className="text-confeitaria-marrom">
                Disponível das 12:00 às 20:00<br />
                Taxa de entrega a combinar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-dancing font-bold text-confeitaria-chocolate mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card-confeitaria text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-confeitaria-marrom mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-bold text-confeitaria-chocolate">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
