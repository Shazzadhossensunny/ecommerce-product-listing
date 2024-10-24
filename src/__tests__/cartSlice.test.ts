import { describe, test, expect } from "@jest/globals";
import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../store/cartSlice";
import type { CartState } from "../types";

const initialState: CartState = {
  items: [],
  total: 0,
};

describe("Cart Slice", () => {
  test("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle addToCart", () => {
    const sampleProduct = {
      id: 1,
      title: "Test Product",
      price: 10,
      description: "Test Description",
      category: "Test Category",
      image: "test.jpg",
      rating: { rate: 4.5, count: 10 },
    };

    const actual = cartReducer(initialState, addToCart(sampleProduct));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0].quantity).toBe(1);
    expect(actual.total).toBe(10);
  });
});
