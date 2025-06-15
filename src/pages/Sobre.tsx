
import React from 'react';
import { MapPin, Clock, User } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen py-8 bg-confeitaria-creme">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-dancing font-bold text-confeitaria-chocolate mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-confeitaria-marrom max-w-3xl mx-auto">
            Conheça a história da Levic Cakes e nossa paixão por criar momentos doces inesquecíveis
          </p>
        </div>

        {/* Nossa História */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-dancing font-bold text-confeitaria-chocolate">
                Nossa História
              </h2>
              <p className="text-lg text-confeitaria-marrom leading-relaxed">
                A Levic Cakes nasceu do sonho de levar alegria e sabor para a mesa das famílias. 
                Fundada em 2020, nossa confeitaria começou pequena, mas com um grande coração 
                e uma receita especial: ingredientes frescos, muito amor e dedicação em cada doce.
              </p>
              <p className="text-lg text-confeitaria-marrom leading-relaxed">
                O que começou como uma paixão familiar se transformou em um negócio que hoje 
                atende centenas de clientes satisfeitos. Cada bolo, cada doce, cada sorriso que 
                proporcionamos é resultado do nosso compromisso com a excelência.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Interior da confeitaria"
                  className="w-full h-80 object-cover"
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-confeitaria text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <User className="text-confeitaria-chocolate" size={28} />
              </div>
              <h3 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                Nossa Missão
              </h3>
              <p className="text-confeitaria-marrom">
                Proporcionar momentos especiais através de doces artesanais de qualidade, 
                feitos com ingredientes selecionados e muito carinho, criando memórias afetivas 
                que duram para sempre.
              </p>
            </div>

            <div className="card-confeitaria text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-confeitaria-chocolate" size={28} />
              </div>
              <h3 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                Nossa Visão
              </h3>
              <p className="text-confeitaria-marrom">
                Ser reconhecida como a melhor confeitaria da região, expandindo nosso alcance 
                para levar nossos sabores únicos e atendimento excepcional para ainda mais 
                famílias e momentos especiais.
              </p>
            </div>

            <div className="card-confeitaria text-center">
              <div className="bg-confeitaria-rosa rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-confeitaria-chocolate" size={28} />
              </div>
              <h3 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                Nossos Valores
              </h3>
              <p className="text-confeitaria-marrom">
                Qualidade, tradição, inovação e atendimento personalizado. Acreditamos que 
                cada cliente é único e merece uma experiência especial, desde o primeiro 
                contato até a última mordida.
              </p>
            </div>
          </div>
        </section>

        {/* Contato e Localização */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-dancing font-bold text-confeitaria-chocolate mb-6">
                Visite Nossa Loja
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-confeitaria-rosa rounded-lg p-3">
                    <MapPin className="text-confeitaria-chocolate" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-confeitaria-chocolate mb-1">Endereço</h4>
                    <p className="text-confeitaria-marrom">
                      R. Santa Maria, 20 <br />
                      Pedra Azul, Contagem-MG<br />
                      CEP 32183-180
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-confeitaria-rosa rounded-lg p-3">
                    <Clock className="text-confeitaria-chocolate" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-confeitaria-chocolate mb-1">Horário de Funcionamento</h4>
                    <div className="text-confeitaria-marrom space-y-1">
                      <p>Segunda a Sexta: 08:00 - 20:00</p>
                      <p>Sábado: 08:00 - 20:00</p>
                      <p>Domingo: 09:00 - 18:00</p>
                      <p className="text-sm text-confeitaria-rosa font-medium mt-2">
                        Entregas: 12:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <h4 className="font-bold text-confeitaria-chocolate">Entre em Contato</h4>
                  <div className="space-y-3">
                    <p className="text-confeitaria-marrom">
                      <strong>Telefone:</strong> (31) 99195-7486
                    </p>
                    <p className="text-confeitaria-marrom">
                      <strong>Email:</strong> contato@levicakes.com.br
                    </p>
                    <a 
                      href="https://wa.me/5531991957486" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-dancing font-bold text-confeitaria-chocolate">
                Nossa Galeria
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop"
                    alt="Produto da confeitaria"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop"
                    alt="Produto da confeitaria"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=200&fit=crop"
                    alt="Produto da confeitaria"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop"
                    alt="Produto da confeitaria"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
