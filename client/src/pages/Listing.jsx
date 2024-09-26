import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Listing = () => {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        console.log(data, "data");
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  return <div>Listing Page {listing?.name}</div>;
};

export default Listing;
