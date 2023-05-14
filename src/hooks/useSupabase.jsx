import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const useSupabase = () => {
  const [wishItems, setWishItems] = useState([]);
  useEffect(() => getWishItems, []);

  const getWishItems = async () => {
    const wishItems = await supabase.from("wishlist").select("*");
    setWishItems(wishItems.data);
  };
  return { wishItems };
};
