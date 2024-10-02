import Image from "next/image";
import { ItemCard } from "./components/ItemCard";
const mockItem={
  name:'White t-shirt',
  category:'T-shirt',
  price:"200"
}
export default function Home() {
  return (
    <div className="w-full flex flex-wrap">
      <ItemCard item={mockItem}/>
        </div>
    );
}
