import React from "react";
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
  ReferenceInput,
  SelectInput,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const ListProductOption = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ShowProductOption = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="name" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
export const EditProductOption = (props) => {
    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toISOString();
      };
      return(
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput
          label="ProductId"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
      <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
    </SimpleForm>
  </Edit>
  );
};

export const CreateProductOption = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <ReferenceInput
          label="ProductId"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="created_at" defaultValue={getCurrentDateTime()} />
      </SimpleForm>
    </Create>
  );
};
