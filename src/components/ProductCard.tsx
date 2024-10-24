import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { ProductCardProps } from "../types";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
