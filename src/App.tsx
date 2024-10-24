import React, { useState, useCallback } from "react";
import { useGetProductsQuery } from "./services/api";
import { useInView } from "react-intersection-observer";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";
import SearchBar from "./components/SearchBar";
import { Product } from "./types";

const PRODUCTS_PER_PAGE = 8;

const App: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
  });

  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    limit: PRODUCTS_PER_PAGE,
    offset: offset,
  });

  React.useEffect(() => {
    if (data.length > 0) {
      setDisplayedProducts((prev) => {
        const newProducts = data.filter(
          (newProduct) => !prev.some((p) => p.id === newProduct.id)
        );
        return [...prev, ...newProducts];
      });
    }
  }, [data]);

  React.useEffect(() => {
    if (
      inView &&
      !isLoading &&
      !isFetching &&
      data.length === PRODUCTS_PER_PAGE
    ) {
      setOffset((prev) => prev + PRODUCTS_PER_PAGE);
    }
  }, [inView, isLoading, isFetching, data.length]);

  const filteredProducts = displayedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term !== "") {
      setOffset(0);
      setDisplayedProducts([]);
    } else {
      setOffset(0);
      useGetProductsQuery({
        limit: PRODUCTS_PER_PAGE,
        offset: 0,
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <CartSummary />
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && !isLoading && !isFetching && (
        <div className="text-center text-gray-500 mt-8">No products found</div>
      )}

      {/* Loading indicator */}
      <div ref={ref} className="flex justify-center mt-8">
        {(isLoading || isFetching) && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        )}
      </div>

      {/* Debug info */}
      <div className="text-sm text-gray-500 text-center mt-4">
        Displayed Products: {displayedProducts.length}
      </div>
    </div>
  );
};

export default App;
