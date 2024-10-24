import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { updateQuantity, removeFromCart } from "../store/cartSlice";

const CartSummary: React.FC = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  if (isLoading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 opacity-75 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 w-full max-w-lg mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold">Cart Summary</h2>
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <span className="line-clamp-1">{item.title}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t flex justify-between">
              <p>Total Items: {itemCount}</p>
              <p className="font-bold text-blue-600">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CartSummary;
