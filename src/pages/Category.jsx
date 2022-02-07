import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  /* Since we'll been using async/await,
  we can't use it in useEffect directly.
  In this case, a new function is needed
  inside the useEffect hook. */

  useEffect(() => {
    const fetchListings = async () => {};
  });

  return <div>Category</div>;
}

export default Category;
