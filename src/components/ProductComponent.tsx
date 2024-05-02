interface ProductComponentProps {
  title: string;
  description: string;
  img: string;
}

const ProductComponent = ({ title, description, img }: ProductComponentProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p>{description}</p>
      <div className="mx-auto mt-6">
        <img src={img} alt="" className="w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default ProductComponent;
