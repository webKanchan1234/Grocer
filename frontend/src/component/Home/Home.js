import React,{Fragment,useEffect} from 'react'
import "./Home.css";
import { CgMouse } from "react-icons/all";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import {useSelector,useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";



// const product = {
//     name:"Blue shirt",
//     images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
//     price:"3000",
//     _id:"kanchan"
// }
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products,productsCount } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      //dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


    return (
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Grocery</p>
            <h1>FIND AMAZING GROCERY PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
    )
}

export default Home
