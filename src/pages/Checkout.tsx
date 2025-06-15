
import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutProps {
  cartItems: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, onClearCart }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('pickup');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'cash'>('pix');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    complement: ''
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryMethod === 'delivery' ? 5.00 : 0;
  const finalTotal = total + deliveryFee;

  const currentHour = new Date().getHours();
  const isDeliveryAvailable = currentHour >= 12 && currentHour < 20;
  // Número do WhatsApp para receber pedidos
  const whatsappNumber = '5531973065491';

  const generateWhatsAppMessage = () => {
    let message = `🧁 *NOVO PEDIDO - LEVIC CAKES* 🧁\n\n`;
    message += `👤 *Cliente:* ${customerInfo.name}\n`;
    message += `📱 *WhatsApp:* ${customerInfo.phone}\n\n`;
    
    message += `🛍️ *PEDIDO:*\n`;
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *VALORES:*\n`;
    message += `Subtotal: R$ ${total.toFixed(2)}\n`;
    if (deliveryMethod === 'delivery') {
      message += `Taxa de entrega: R$ ${deliveryFee.toFixed(2)}\n`;
    }
    message += `*Total: R$ ${finalTotal.toFixed(2)}*\n\n`;
    
    message += `🚚 *ENTREGA:* ${deliveryMethod === 'delivery' ? 'Entrega em casa' : 'Retirada na loja'}\n`;
    
    if (deliveryMethod === 'delivery') {
      message += `📍 *Endereço:* ${customerInfo.address}, ${customerInfo.neighborhood}`;
      if (customerInfo.complement) {
        message += ` - ${customerInfo.complement}`;
      }
      message += `\n`;
    }
    
    const paymentText = {
      pix: 'PIX',
      card: 'Cartão (na entrega)',
      cash: 'Dinheiro (na entrega)'
    };
    message += `💳 *Pagamento:* ${paymentText[paymentMethod]}\n`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (deliveryMethod === 'delivery' && !isDeliveryAvailable) {
      alert('Entregas disponíveis apenas das 12:00 às 20:00');
      return;
    }

    // Gerar mensagem e enviar para WhatsApp
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho
    onClearCart();
    
    // Mostrar confirmação
    alert('Pedido enviado! Você será redirecionado para o WhatsApp.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8 bg-confeitaria-creme">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl font-dancing font-bold text-confeitaria-chocolate mb-4">
              Carrinho Vazio
            </h1>
            <p className="text-confeitaria-marrom mb-8">
              Adicione alguns produtos ao seu carrinho para continuar.
            </p>
            <Link to="/cardapio" className="btn-primary">
              Ver Cardápio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-confeitaria-creme">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/cardapio" className="mr-4 p-2 hover:bg-confeitaria-bege rounded-lg transition-colors">
            <ArrowLeft className="text-confeitaria-chocolate" size={24} />
          </Link>
          <h1 className="text-4xl font-dancing font-bold text-confeitaria-chocolate">
            Finalizar Pedido
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações do Cliente */}
              <div className="card-confeitaria">
                <h2 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                  Suas Informações
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-confeitaria-chocolate font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa"
                    />
                  </div>
                  <div>
                    <label className="block text-confeitaria-chocolate font-medium mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa"
                    />
                  </div>
                </div>
              </div>

              {/* Método de Entrega */}
              <div className="card-confeitaria">
                <h2 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                  Método de Entrega
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-confeitaria-rosa/30 rounded-lg cursor-pointer hover:bg-confeitaria-bege transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryMethod === 'pickup'}
                      onChange={(e) => setDeliveryMethod(e.target.value as 'pickup')}
                      className="mr-3"
                    />
                    <MapPin className="mr-3 text-confeitaria-chocolate" size={20} />
                    <div>
                      <div className="font-medium text-confeitaria-chocolate">Retirar na Loja</div>
                      <div className="text-sm text-confeitaria-marrom">R. Santa Maria, 20 - Pedra Azul, Contagem</div>
                    </div>
                  </label>

                  <label className={`flex items-center p-4 border border-confeitaria-rosa/30 rounded-lg cursor-pointer hover:bg-confeitaria-bege transition-colors ${!isDeliveryAvailable ? 'opacity-50' : ''}`}>
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={deliveryMethod === 'delivery'}
                      onChange={(e) => setDeliveryMethod(e.target.value as 'delivery')}
                      disabled={!isDeliveryAvailable}
                      className="mr-3"
                    />
                    <Clock className="mr-3 text-confeitaria-chocolate" size={20} />
                    <div>
                      <div className="font-medium text-confeitaria-chocolate">Entrega em Casa</div>
                      <div className="text-sm text-confeitaria-marrom">
                        Disponível das 12:00 às 20:00 - Taxa: R$ 5,00
                      </div>
                      {!isDeliveryAvailable && (
                        <div className="text-sm text-red-600">
                          Entrega indisponível neste horário
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {deliveryMethod === 'delivery' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-confeitaria-chocolate font-medium mb-2">
                        Endereço *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={customerInfo.address}
                        onChange={handleInputChange}
                        required={deliveryMethod === 'delivery'}
                        className="w-full px-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa"
                      />
                    </div>
                    <div>
                      <label className="block text-confeitaria-chocolate font-medium mb-2">
                        Bairro *
                      </label>
                      <input
                        type="text"
                        name="neighborhood"
                        value={customerInfo.neighborhood}
                        onChange={handleInputChange}
                        required={deliveryMethod === 'delivery'}
                        className="w-full px-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa"
                      />
                    </div>
                    <div>
                      <label className="block text-confeitaria-chocolate font-medium mb-2">
                        Complemento
                      </label>
                      <input
                        type="text"
                        name="complement"
                        value={customerInfo.complement}
                        onChange={handleInputChange}
                        placeholder="Apartamento, bloco, etc."
                        className="w-full px-4 py-3 border border-confeitaria-rosa/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-confeitaria-rosa"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Método de Pagamento */}
              <div className="card-confeitaria">
                <h2 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-4">
                  Forma de Pagamento
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-confeitaria-rosa/30 rounded-lg cursor-pointer hover:bg-confeitaria-bege transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'pix')}
                      className="mr-3"
                    />
                    <Smartphone className="mr-3 text-confeitaria-chocolate" size={20} />
                    <div>
                      <div className="font-medium text-confeitaria-chocolate">PIX</div>
                      <div className="text-sm text-confeitaria-marrom">Pagamento instantâneo</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-confeitaria-rosa/30 rounded-lg cursor-pointer hover:bg-confeitaria-bege transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                      className="mr-3"
                    />
                    <CreditCard className="mr-3 text-confeitaria-chocolate" size={20} />
                    <div>
                      <div className="font-medium text-confeitaria-chocolate">Cartão</div>
                      <div className="text-sm text-confeitaria-marrom">Crédito ou Débito na entrega</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-confeitaria-rosa/30 rounded-lg cursor-pointer hover:bg-confeitaria-bege transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                      className="mr-3"
                    />
                    <div className="mr-3 w-5 h-5 bg-confeitaria-chocolate rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-confeitaria-chocolate">Dinheiro</div>
                      <div className="text-sm text-confeitaria-marrom">Pagamento na entrega</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Confirmar Pedido
              </button>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div className="card-confeitaria h-fit">
            <h2 className="text-2xl font-dancing font-bold text-confeitaria-chocolate mb-6">
              Resumo do Pedido
            </h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-confeitaria-creme rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-confeitaria-chocolate">{item.name}</h3>
                    <p className="text-confeitaria-marrom">
                      {item.quantity}x R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-bold text-confeitaria-chocolate">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-confeitaria-rosa/20">
              <div className="flex justify-between">
                <span className="text-confeitaria-marrom">Subtotal:</span>
                <span className="text-confeitaria-chocolate">R$ {total.toFixed(2)}</span>
              </div>
              
              {deliveryMethod === 'delivery' && (
                <div className="flex justify-between">
                  <span className="text-confeitaria-marrom">Taxa de entrega:</span>
                  <span className="text-confeitaria-chocolate">R$ {deliveryFee.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between text-xl font-bold pt-3 border-t border-confeitaria-rosa/20">
                <span className="text-confeitaria-chocolate">Total:</span>
                <span className="text-confeitaria-chocolate">R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
