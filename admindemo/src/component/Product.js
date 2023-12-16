import React, { useRef } from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  NumberInput,
  Create,
  ReferenceInput,
  SelectInput,
  useNotify,
  useRedirect,
  DeleteButton,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";


export const listProduct = (props) => (
  <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="slug" />
      <TextField source="price" />
      <TextField source="qty" />
      <TextField source="description" />
      <TextField source="category.name" />
      <TextField source="brandId.name" />
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
export const ShowProduct = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="title" />
      <TextField source="slug" />
      <TextField source="price" />
      <TextField source="qty" />
      <TextField source="description" />
      <TextField source="category.name" />
      <TextField source="brandId.name" />
      <TextField source="metakey" />
      <TextField source="metadesc" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const editProduct = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="slug" />
        <NumberInput source="price" />
        <NumberInput source="qty" />
        <TextInput source="description" multiline fullWidth />
        <ReferenceInput
          label="Category"
          source="category.id"
          reference="categories"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label="Brand"
          source="brandId.id"
          reference="brand"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateProduct = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Create {...props} >
      <SimpleForm>
      <TextInput source="title" />
        <TextInput source="slug" />
        <NumberInput source="price" />
        <NumberInput source="qty" />
        <TextInput source="description" multiline fullWidth />
        <ReferenceInput
          label="Category"
          source="category.id"
          reference="categories"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label="Brand"
          source="brandId.id"
          reference="brand"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
