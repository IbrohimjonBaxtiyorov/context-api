import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";
export default function Home() {
  const { data, error, isPending } = useFetch(
    "https://json-api.uz/api/project/products-e/products"
  );
  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h2 className="loader">Loading...</h2>}
        {data && <ProductList products={data.data}/>}
      </div>
    </section>
  );
}
