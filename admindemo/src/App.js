import React from "react";
import { Admin, Resource } from "react-admin";
import AdminPanel from "./component/AdminPanel";
import {
  listCategory,
  editCategory,
  CreateCategory,
  ShowCategory,
} from "./component/Category";

import { listProduct, editProduct, CreateProduct, ShowProduct } from "./component/Product";

import dataProvider from "./component/customDataProvider";
import { CreateUser, ShowUser, editUser, listUser } from "./component/User";
import { CreateOrder, EditOrder, ListOrder, createOrder, editOrder, listOrder } from "./component/Order";
import { CreateBrand, EditBrand, ShowBrand, editBrand, listBrand } from "./component/Brand";
import { CreateMenu, EditMenu, ListMenu, ShowMenu } from "./component/Menu";
import { CreateSlider, EditSlider, ListSlider, ShowSlider } from "./component/Slider";
import { CreateTopic, EditTopic, ListTopic, ShowTopic } from "./component/Topic";
import { CreatePost, EditPost, ListPost, ShowPost } from "./component/Post";
import { CreateProductImage, EditProductImage, ListProductImage, ShowProductImage } from "./component/ProductImage";
import { CreateProductOption, EditProductOption, ListProductOption, ShowProductOption } from "./component/ProductOption";
import { CreateProductOptionValue, EditProductOptionValue, ListProductOptionValue, ShowProductOptionValue } from "./component/ProductOptionValue";
import { CreateProductSale, EditProductSale, ListProductSale, ShowProductSale } from "./component/ProductSale";
import { CreateProductStore, EditProductStore, ListProductStore, ShowProductStore } from "./component/ProductStore";
import { CreateContact, EditContact, ListContact, ShowContact } from "./component/Contact";
import { CreateOrderDetail, EditOrderDetail, ListOrderDetail } from "./component/OderDetail";

const App = () => (
  <Admin dashboard={AdminPanel} dataProvider={dataProvider}>
    <Resource
      name="menu"
      list={ListMenu}
      edit={EditMenu}
      create={CreateMenu}
      show={ShowMenu}
    />
    <Resource
      name="sliders"
      list={ListSlider}
      edit={EditSlider}
      create={CreateSlider}
      show={ShowSlider}
    />
    <Resource
      name="categories"
      list={listCategory}
      edit={editCategory}
      create={CreateCategory}
      show={ShowCategory}
    />
    <Resource
      name="brand"
      list={listBrand}
      edit={EditBrand}
      create={CreateBrand}
      show={ShowBrand}
    />
    <Resource
      name="products"
      list={listProduct}
      edit={editProduct}
      create={CreateProduct}
      show={ShowProduct}
    />
    <Resource
      name="productimages"
      list={ListProductImage}
      edit={EditProductImage}
      create={CreateProductImage}
      show={ShowProductImage}
    />
    <Resource
      name="productoption"
      list={ListProductOption}
      edit={EditProductOption}
      create={CreateProductOption}
      show={ShowProductOption}
    />
    <Resource
      name="productoptionvalue"
      list={ListProductOptionValue}
      edit={EditProductOptionValue}
      create={CreateProductOptionValue}
      show={ShowProductOptionValue}
    />
    <Resource
      name="productsale"
      list={ListProductSale}
      edit={EditProductSale}
      create={CreateProductSale}
      show={ShowProductSale}
    />
    <Resource
      name="productstore"
      list={ListProductStore}
      edit={EditProductStore}
      create={CreateProductStore}
      show={ShowProductStore}
    />
    <Resource
      name="topics"
      list={ListTopic}
      edit={EditTopic}
      create={CreateTopic}
      show={ShowTopic}
    />
    <Resource
      name="posts"
      list={ListPost}
      edit={EditPost}
      create={CreatePost}
      show={ShowPost}
    />
    <Resource
      name="users"
      list={listUser}
      edit={editUser}
      create={CreateUser}
      show={ShowUser}
    />
    <Resource
      name="orders"
      list={ListOrder}
      edit={EditOrder}
      create={CreateOrder}
    />
    <Resource
      name="orderdetails"
      list={ListOrderDetail}
      edit={EditOrderDetail}
      create={CreateOrderDetail}
    />
    <Resource
      name="contact"
      list={ListContact}
      edit={EditContact}
      create={CreateContact}
      show={ShowContact}
    />
  </Admin>
);

export default App;
