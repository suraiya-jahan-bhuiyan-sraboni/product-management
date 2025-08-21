import Hero from "@/components/home components/Hero";
import ProductsHighLights from "@/components/home components/ProductsHighLights";
import Nav from "@/components/root component/Nav";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className=" space-y-20">
      <Hero/>
      <ProductsHighLights/>
    </div>
  );
}
