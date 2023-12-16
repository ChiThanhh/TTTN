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
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";

export const listUser = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="username" />
      <TextField source="password" />
      <TextField source="address" />
      <TextField source="image" />
      <TextField source="roles" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
      <TextField source="role" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ShowUser = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
    <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="username" />
      <TextField source="password" />
      <TextField source="address" />
      <TextField source="image" />
      <TextField source="roles" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);
export const editUser = (props) =>{
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return(
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="address" />
      <TextInput source="image" />
      <TextInput source="roles" />
      <TextInput source="status" />
      <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />

    </SimpleForm>
  </Edit>
  );
};

export const CreateUser = (props) => {
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
    redirect("list", "users");
  };
  return(
<Create {...props} mutationOptions={{ onSuccess }} redirect="users">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="address" />
      <TextInput source="image" />
      <TextInput source="roles" />
      <TextInput source="status" />
      <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
      <ImageUploadForm ref={imageUploadFormRef} />
    </SimpleForm>
  </Create>
  );
};
