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

export const ListProductOptionValue = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField label="Option Id" source="option.name" />
      <TextField source="value" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <ShowButton/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ShowProductOptionValue = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField label="Option Id" source="option.name" />
      <TextField source="value" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
export const EditProductOptionValue = (props) => {
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
        <ReferenceInput
          label="Option"
          source="option.id"
          reference="productoption"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="value" />
        <TextInput source="updated_at" defaultValue={getCurrentDateTime()} />
      </SimpleForm>
    </Edit>
  );
};

export const CreateProductOptionValue = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          label="Product Id"
          source="product_id.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput
          label="Option"
          source="option.title"
          reference="productoption"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="value" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
      </SimpleForm>
    </Create>
  );
};
