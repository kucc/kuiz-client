import endpoints from "@/common/endpoints";
import CategoryModel from "@/common/model/category";
import axios from "../axios";

const categoryAPI = {
  getCategoryList: async () => {
    const { data: categoryList } = await axios.get<CategoryModel[]>(
      endpoints.CATEGORY_API
    );

    return categoryList;
  },
};

export default categoryAPI;
