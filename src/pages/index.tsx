import { useSelector } from 'react-redux';
import { setLoading, setCart, deleteCart } from '@/context/action';
import { State } from '@/context/reducer/type.types';

export default function Home() {
  const { isLoading, cart } = useSelector((state: State) => state);

  const cartManage = (input: string) => {
    if (cart.includes(input)) {
      setCart(cart.filter((item) => item !== input));
    } else {
      setCart([...cart, input]);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">{isLoading.toString()}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={() => setLoading(!isLoading)}>submit</button>
      <h1 className="mb-4">your cart is: {cart.map(item => <span key={item} className="cart-item bg-gray-200 px-2 py-1 rounded">{item}</span>)}</h1>

      <input
        checked={cart.includes('book')}
        onClick={() => cartManage('book')}
        type="checkbox"
        id="book"
        className="mr-2"
      />
      <label htmlFor="book" className="mr-4">book</label>
      <input
        checked={cart.includes('pencil')}
        onClick={() => cartManage('pencil')}
        type="checkbox"
        id="pencil"
        className="mr-2"
      />
      <label htmlFor="pencil" className="mr-4">pencil</label>
      <input
        checked={cart.includes('pen')}
        onClick={() => cartManage('pen')}
        type="checkbox"
        id="pen"
        className="mr-2"
      />
      <label htmlFor="pen" className="mr-4">pen</label>
      <p className="mt-4">delete</p>
      <button className="text-red-500 underline" onClick={() => deleteCart()}>delete cart</button>
    </main>
  );
}
