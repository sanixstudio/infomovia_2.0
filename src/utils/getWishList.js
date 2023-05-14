import { supabase } from "../utils/supabaseClient";

export const getWishListFromSupabase = async () => {
  supabase
    .from("wishlist")
    .select("*")
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
