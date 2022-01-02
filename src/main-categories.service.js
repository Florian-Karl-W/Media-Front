import http from "./http-comon";

class MainCategoriesService {
  getMainCategories() {
    return http.get(`/MainCat`);
  }
}

export default new MainCategoriesService();
