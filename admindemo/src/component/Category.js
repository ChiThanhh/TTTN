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
  NumberInput,
  useNotify,
  useRedirect,
  ImageField,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";



export const listCategory = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <ImageField source="image" />
      <TextField source="parentId" />
      <TextField source="sortOrder" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
      <ShowButton/>
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
export const ShowCategory = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <ImageField source="image" />
      <TextField source="parentId" />
      <TextField source="sortOrder" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const editCategory = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="image" />
      <NumberInput source="parentId" />
      <NumberInput source="sortOrder" />
      <TextInput source="metakey" />
      <TextInput source="metadesc" />
      <TextInput source="createdAt" />
      <TextInput source="updatedAt" />

      <NumberInput source="status" />
    </SimpleForm>
  </Edit>
);

export const CreateCategory = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  const onSuccess = (data) => {
    notify(`created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.image);
    }
    redirect("list", "categories");
  };
  return(
  <Create {...props} mutationOptions={{ onSuccess }} redirect="categories">
    <SimpleForm>
    <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="image" />
      <NumberInput source="parentId" />
      <NumberInput source="sortOrder" />
      <TextInput source="metakey" />
      <TextInput source="metadesc" />
      <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
      <NumberInput source="status" />
      <ImageUploadForm endpoint="http://localhost:8081/api/categories" ref={imageUploadFormRef} />
      
    </SimpleForm>
  </Create>
  );
};
