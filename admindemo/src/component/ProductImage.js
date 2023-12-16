import React, { useRef } from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  DeleteButton,
  useNotify,
  useRedirect,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";

export const ListProductImage = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="image" />
      <TextField source="isPrimary" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ShowProductImage = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="image" />
      <TextField source="isPrimary" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
export const EditProductImage = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  return (
    <Edit {...props}>
      <SimpleForm>
      <ReferenceInput
          label="Product"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="image" />
        <NumberInput source="isPrimary" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
      </SimpleForm>
    </Edit>
  );
};

export const CreateProductImage = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`Product Image created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.image);
    }
    redirect("list", "productimages");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }} redirect="productimages">
      <SimpleForm>
      <ReferenceInput
          label="Product"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="image" />
        <NumberInput source="isPrimary" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <ImageUploadForm endpoint="http://localhost:8081/api/productimages" ref={imageUploadFormRef} />
      </SimpleForm>
    </Create>
  );
};
