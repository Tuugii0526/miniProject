import Link from "next/link";

export const AddProduct = () => {
  return (
    <Link href={'/add'}>
    <button class="btn bg-green-400" >
        Add product
      </button>
    </Link>
  );
};
