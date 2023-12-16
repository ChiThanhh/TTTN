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
  Show,
  SimpleShowLayout,
} from "react-admin";


export const ListTopic = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="parent_id" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ShowTopic = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="parent_id" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const EditTopic = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="slug" />
        <NumberInput source="parent_id" />
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />

      </SimpleForm>
    </Edit>
  );
};

export const CreateTopic = (props) => {



  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };


  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="slug" />
        <NumberInput source="parent_id" />
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="updatedAt" />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
