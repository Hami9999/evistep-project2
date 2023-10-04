import {createStore} from "vuex";
import { user } from "./user.js";
import {products} from "./products.js";

const store = createStore({
   modules: {
       user,products
   }
});

export default store