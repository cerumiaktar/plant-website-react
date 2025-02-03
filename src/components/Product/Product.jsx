import { BsBasket } from "react-icons/bs";


const Product = ({ product }) => {

    const { img, title, price } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions">
                        <p className="text-xl font-medium">${price}</p>
                        <button className="btn bg-[#5AAC38] text-xl text-white"><BsBasket /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;