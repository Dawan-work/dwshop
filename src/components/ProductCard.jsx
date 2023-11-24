import { ShoppingCart } from "react-feather"
import { useNavigate } from "react-router-dom"

export const ProductCard = ({product}) => {
    const navigate = useNavigate()

    const goToProduct = () => {
        navigate("/details/" + product.id)
    }
  return (
    <div className="card w-full  bg-base-100 shadow-xl shadow-neutral">
    <figure><img src={product.image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2
      onClick={goToProduct}
      className="card-title">
        {product.title}
        <div className="badge badge-neutral badge-lg">{product.price} $</div>
        </h2>
      <p>{product.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary">Buy Now <ShoppingCart /> </button>
      </div>
    </div>
  </div>
  )
}
