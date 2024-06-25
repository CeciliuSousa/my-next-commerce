import { formatPrice } from '@/lib/utils';
import { ProductType } from '@/types/ProductsType';
import ProductImage from './ProductImage';

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className='rounded-md   flex flex-col shadow-lg h-96 bg-slate-800 p-3 text-gray-300'>
      <div className='relative max-h-72 flex-1 '>
        <ProductImage product={product} fill></ProductImage>
      </div>

      <div className='flex justify-between font-bold my-3 gap-6 '>
        {' '}
        <p className='w-40 truncate'>{product.name} </p>
        <p className='text-md text-teal-600'>{formatPrice(product.price)}</p>
      </div>
      <button className='rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center'>
        {' '}
        Adicionar ao carrinho{' '}
      </button>
    </div>
  );
}
