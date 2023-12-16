// import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login";
// import Product from "../pages/frontend/Product";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
// import ProductCategory from "../pages/frontend/ProductCategory";
// import Post from "../pages/frontend/Post";
// import PostTopic from "../pages/frontend/Post/PostTopic";
// import ProductBrand from "../pages/frontend/ProductBrand";
// import PostDetail from "../pages/frontend/Post/PostDetail";
// import Search from "../layouts/LayoutSite/Search";
// import Cart from "../pages/frontend/Cart";
// import About from "../pages/frontend/About";
// import CSMH from "../pages/frontend/CSMH";
// import CSBH from "../pages/frontend/CSBH";
// import CSVC from "../pages/frontend/CSVC";
// import CSDT from "../pages/frontend/CSDT";

const RouterPublic = [
     {path:'/',component:Home},
    // {path:'/product',component:Product},
    // {path:'/product/:page',component:Product},
    // {path:'/contact',component:Contact},
    {path:'/chi-tiet-san-pham',component:ProductDetail},
    // {path:'/danh-muc-san-pham/:slug',component:ProductCategory},
    // {path:'/bai-viet',component:Post},
    // {path:'/chu-de-bai-viet/:slug',component:PostTopic},
    // {path:'/thuong-hieu/:slug',component:ProductBrand},
    // {path:'/chi-tiet-bai-viet/:slug',component:PostDetail},
    // {path:'/tim-kiem/:key',component:Search},
    // {path:'/gio-hang',component:Cart},
    // {path:'/gioi-thieu',component:About},
    // {path:'/chinh-sach-mua-hang',component:CSMH},
    // {path:'/chinh-sach-bao-hanh',component:CSBH},
    // {path:'/chinh-sach-van-chuyen',component:CSVC},
    // {path:'/chinh-sach-doi-tra',component:CSDT},
    {path:'/login',component:Login},
]
export default RouterPublic;