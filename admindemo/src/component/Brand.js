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
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";



export const listBrand = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="image" />
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
export const ShowBrand = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="image" />
      <TextField source="sortOrder" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);

export const EditBrand = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  const onUpdate = (data) => {
    notify(`created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.image);
    }
    redirect("list", "brand");
  };
  return(
  <Edit {...props} mutationOptions={{ onUpdate }} redirect="brand">
    <SimpleForm>
    <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="image" />
      <NumberInput source="sortOrder" />
      <TextInput source="metakey" />
      <TextInput source="metadesc" />
      <TextInput source="updatedAt" defaultValue={getCurrentDateTime()}/>

      <NumberInput source="status" />
      <ImageUploadForm endpoint="http://localhost:8081/api/brand" ref={imageUploadFormRef} />
    </SimpleForm>
  </Edit>
  );
};

export const CreateBrand= (props) => {
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
    redirect("list", "brand");
  };
  return(
  <Create {...props} mutationOptions={{ onSuccess }} redirect="brand">
    <SimpleForm>
    <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="image" />
      <NumberInput source="sortOrder" />
      <TextInput source="metakey" />
      <TextInput source="metadesc" />
      <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
      <NumberInput source="status" />
      <ImageUploadForm endpoint="http://localhost:8081/api/brand" ref={imageUploadFormRef} />
    </SimpleForm>
  </Create>
  );
};
