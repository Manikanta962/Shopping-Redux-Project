import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { fireproducts } from "../firecommerce-products";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
  const [products, setProducts] = useState([]);

  const { cartItems } = useSelector((state) => state.cartReducer);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // CHANGE AGAIN
  useEffect(() => {
    getData();
  }, []);

  // ADD DATA TO FIREBASE BELOW- ADD DOC FUNC
  // async function adddata() {
  //   try {
  //     await addDoc(collection(fireDB, "users"), {
  //       name: "marry jane",
  //       age: "2004",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // GET OR RETRIVE DATA STORED IN FIREBASE BY BELOW CODE
  async function getData() {
    try {
      setLoading(true);

      const users = await getDocs(collection(fireDB, "products"));
      // IF U WANT TO STORE 4 DOCUMENTS IN AN ARRAY -- TAKE EMPTY ARRAY
      const productsArray = [];

      users.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);

        // TO HIDE LOADER KEEP --SETLOADING -- FALSE
        setLoading(false);
      });
      setProducts(productsArray);
      console.log(productsArray);
    } catch (error) {
      console.log(error);

      // TO HIDE LOADER KEEP --SETLOADING -- FALSE
      setLoading(false);
    }
  }
  // function addProductsData() {
  //   fireproducts.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });

  // }

  // WHENEVER THERE IS CHANGE IN CARTITEM(REDUCER) U HAVE TO UPDATE LOCAL STORAGE
  // TO AVOID LOSS OF CART DATA -- THIS CONDITION IS NECCESARY..IN HOMEPAGE.JS
  // AND IN STORE.JS --- WRITE INTIALSTORE
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <Layout loading={loading}>
      <div className="container mt-3">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        src={product.imageURL}
                        alt=""
                        className="product-img"
                      />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{product.price} RS-/</h2>
                    <div className="flex">
                      <button
                        className="mx-2"
                        onClick={() => addToCart(product)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/productinfo/${product.id}`);
                        }}
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={adddata}>Add Data to Firebase</button>
      <button onClick={getdata}>Retriveor get data from Firebase</button> */}
      {/* <button onClick={addProductsData}>Add Data to Firebase </button> */}
    </Layout>
  );
}

export default Homepage;
