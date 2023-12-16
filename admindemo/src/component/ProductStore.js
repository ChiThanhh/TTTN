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
  DateInput,
  useNotify,
  useRedirect,
  ReferenceInput,
  SelectInput,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const ListProductStore = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="productId.title" />
      <TextField source="quantityAdded" />
      <TextField source="entryDate" />
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
export const ShowProductStore = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField source="productId.title" />
      <TextField source="quantityAdded" />
      <TextField source="entryDate" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const EditProductStore = (props) => {
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
        <NumberInput source="quantityAdded" />
        <DateInput source="entryDate" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="createdBy" />
        <NumberInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateProductStore = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`ProductStore created successfully`);
    redirect("list", "productstore");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <ReferenceInput
          label="Product Id"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <NumberInput source="quantityAdded" />
        <DateInput source="entryDate" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="createdBy" />
        <NumberInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
