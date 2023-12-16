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
  NumberInput,
  ShowButton,
  SimpleShowLayout,
  Show,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";

export const ListSlider = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="link" />
      <TextField source="sort_order" />
      <TextField source="position" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
      <TextField source="image" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ShowSlider = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="name" />
      <TextField source="link" />
      <TextField source="sort_order" />
      <TextField source="position" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
      <TextField source="image" />  
    </SimpleShowLayout>
  </Show>
);

export const EditSlider = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="link" />
        <TextInput source="sort_order" />
        <TextInput source="position" />
        <TextInput source="image" />
        <TextInput source="createdAt" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <TextInput source="status" />
        <ImageUploadForm />
      </SimpleForm>
    </Edit>
  );
};

export const CreateSlider = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`Slider created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.image);
    }
    redirect("list", "sliders");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }} redirect="sliders">
      <SimpleForm>
        <TextInput source="name" /> 
        <TextInput source="link" />
        <NumberInput source="sort_order" />
        <NumberInput source="position" />
        <TextInput source="image" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="updatedAt" />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
        <ImageUploadForm endpoint="http://localhost:8081/api/sliders" ref={imageUploadFormRef} />
      </SimpleForm>
    </Create>
  );
};
