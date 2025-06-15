
import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-confeitaria-chocolate text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="\arquivos\Logos\logo1.png" 
                alt="Levic Cakes Logo" 
                className="h-24 w-34 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-dancing font-bold">Levic Cakes</h3>
                <p className="text-confeitaria-rosa text-sm">Doceria & Cafeteria</p>
              </div>
            </div>
            <p className="text-gray-300">
              A vida com mais sabor! Oferecemos as melhores delícias artesanais, 
              feitas com muito amor e ingredientes selecionados.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4">
            <h4 className="text-xl font-dancing font-bold text-confeitaria-rosa">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-confeitaria-rosa" />
                <div>
                  <p className="text-sm">R. Santa Maria, 20</p>
                  <p className="text-sm text-gray-300">Pedra Azul, Contagem</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={18} className="text-confeitaria-rosa" />
                <p className="text-sm">(31) 99195-7486</p>
              </div>
              <div className="flex space-x-4">
  <a 
    href="https://wa.me/5531991957486" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
  >
    WhatsApp
  </a>
  <a
    href="https://instagram.com/leviccakes/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-4 py-2 rounded-lg transition-colors"
  >
    Instagram
  </a>
</div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h4 className="text-xl font-dancing font-bold text-confeitaria-rosa">Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-confeitaria-rosa" />
                <span className="text-sm">Segunda a Sábado: 08:00 - 20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-confeitaria-rosa" />
                <span className="text-sm">Domingo: 09:00 - 18:00</span>
              </div>
              <div className="mt-3 p-3 bg-confeitaria-marrom rounded-lg">
                <p className="text-sm font-medium text-confeitaria-rosa">Entregas:</p>
                <p className="text-xs text-gray-300">Disponível das 12:00 às 20:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-confeitaria-marrom mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Levic Cakes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
