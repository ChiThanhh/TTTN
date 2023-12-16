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

export const ListMenu = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="link" />
        <TextField source="parent_id" />
        <TextField source="type" />
        <TextField source="createdAt" />
        <TextField source="updatedAt" />
        <TextField source="status" />
        <TextField source="position" />
        <ShowButton/>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
  export const ShowMenu = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
        <TextField source="name" />
        <TextField source="link" />
        <TextField source="parent_id" />
        <TextField source="type" />
        <TextField source="createdAt" />
        <TextField source="updatedAt" />
        <TextField source="status" />
        <TextField source="position" />
      </SimpleShowLayout>
    </Show>
  );
  export const EditMenu = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="link" />
        <NumberInput source="parent_id" />
        <TextInput source="type" />
        <TextInput source="createdAt" />
        <TextInput source="updatedAt" />
        <NumberInput source="status" />
        <TextInput source="position" />
      </SimpleForm>
    </Edit>
  );
  
  export const CreateMenu = (props) => {
    const getCurrentDateTime = () => {
      const now = new Date();
      return now.toISOString();
    };
    return (
      <Create {...props} >
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="link" />
          <NumberInput source="parent_id" />
          <TextInput source="type" />
          <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />

          <NumberInput source="status" />
          <TextInput source="position" />
        </SimpleForm>
      </Create>
    );
  };
  

