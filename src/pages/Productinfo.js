import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";

import { useParams } from "react-router-dom";
function Productinfo() {
  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(false);

  const params = useParams();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      setLoading(true);
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      // IF U WANT TO STORE 4 DOCUMENTS IN AN ARRAY -- TAKE EMPTY ARRAY
      // const productsArray = [];

      // users.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   const obj = {
      //     id: doc.id,
      //     ...doc.data(),
      //   };
      //   productsArray.push(obj);
      // });
      console.log(productTemp.data());
      setProduct(productTemp.data());

      // TO HIDE LOADER KEEP --SETLOADING -- FALSE
      setLoading(false);
      // console.log(productsArray);
    } catch (error) {
      console.log(error);

      // TO HIDE LOADER KEEP --SETLOADING -- FALSE
      setLoading(false);
    }
  }
  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {product && (
              <div>
                <p>
                  <p>
                    {" "}
                    <b>{product.name}</b>
                  </p>
                  <img src={product.imageURL} className="product-info-img" />
                  <hr />
                  <p>{product.description}</p>
                  <div className="d-flex justify-content-end my-3">
                    <button>ADD TO CART</button>
                  </div>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Productinfo;
