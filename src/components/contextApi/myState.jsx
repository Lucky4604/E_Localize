import React, { useEffect, useState } from "react";
import myContext from "./myContext";

import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

function MyState(props) {
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  
  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }
    const productRef = collection(fireDB, "products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      setTimeout(()=>{

        window.location.href='/dashboard'
      },800)
      getProductData();
      setLoading(false);
      setProducts({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // ****** Get product data
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
    

  }, []);

 

  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      setTimeout(()=>{
        window.location.href = '/dashboard'
      },800)
      getProductData();
      setLoading(false)
     
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const [totalOrders, setTotalOrders] = useState(0); 
  const [totalProducts, setTotalProducts] = useState(0); // New state variable for total products
  const [totalUsers, setTotalUsers] = useState(0);

  const calculateTotalOrders = (ordersArray) => {
    setTotalOrders(ordersArray.length);
  };
  const calculateTotalProducts = (productsArray) => {
    setTotalProducts(productsArray.length);
  };

  // Function to calculate and set the total user count
  const calculateTotalUsers = (usersArray) => {
    setTotalUsers(usersArray.length);
  };

  useEffect(() => {
    calculateTotalOrders(order); 
  }, [order]);

  useEffect(() => {
    calculateTotalProducts(product); 
  }, [product]);

  
  useEffect(() => {
    calculateTotalUsers(user); 
  }, [user]);


  useEffect(() => {
    getOrderData();
    getUserData();

  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')
  

 

  
  

  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
         updateProduct, 
         deleteProduct,
         order,
         user,
         totalOrders,
         totalProducts,
         totalUsers,
         searchkey,
          setSearchkey,
          filterType, 
          setFilterType,
        filterPrice, 
        setFilterPrice
         
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
