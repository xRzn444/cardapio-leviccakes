import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

interface Option {
  name: string;
  price: number;
  image?: string;
}


interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    basePrice: number;
    sizes: Option[];
    extras: Option[];
  };
  onAddToCart: (item: any) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = React.useState<Option | null>(null);
  const [selectedExtra, setSelectedExtra] = React.useState<Option | null>(null);
  const [quantity, setQuantity] = React.useState(1);

  const total = (selectedSize?.price || 0) + (selectedExtra?.price || 0);

  const handleAdd = () => {
    if (!selectedSize) return;
    onAddToCart({
      id: `${product.name}-${selectedSize.name}-${selectedExtra?.name || "none"}`,
      name: product.name,
      price: total,
      quantity,
      image: product.image,
      size: selectedSize.name,
      extra: selectedExtra?.name,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative bg-white rounded-lg max-w-2xl w-full p-6 z-50 overflow-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          <X />
        </button>

        <img src={product.image} alt={product.name} className="rounded-lg w-full max-h-64 object-cover mb-4" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <p className="font-medium mb-1">Escolha o tamanho (obrigatório):</p>
          {product.sizes.map(size => (
            <div key={size.name} className="flex items-center mb-2">
              <input
                type="radio"
                name="size"
                checked={selectedSize?.name === size.name}
                onChange={() => setSelectedSize(size)}
                className="mr-2"
              />
              <span>{size.name} - R$ {size.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-medium mb-1">Acréscimo (opcional):</p>
          {product.extras.map(extra => (
            <div key={extra.name} className="flex items-center mb-2">
              <input
                type="radio"
                name="extra"
                checked={selectedExtra?.name === extra.name}
                onChange={() => setSelectedExtra(extra)}
                className="mr-2"
              />
              <span>{extra.name} + R$ {extra.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 bg-gray-200 rounded">-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="p-2 bg-gray-200 rounded">+</button>
          </div>
          <button
            onClick={handleAdd}
            disabled={!selectedSize}
            className="bg-pink-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Adicionar R$ {(total * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
