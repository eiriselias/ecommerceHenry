
import Banner from "@/components/banner/banner";
import Categorias from "@/components/categorias/categorias";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="mt-40">
      <Categorias/>
      </div>
      <Banner />
      <Products/>
    </div>
  );
}
