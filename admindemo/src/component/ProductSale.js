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

export const ListProductSale = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="salePrice" />
      <TextField source="quantitySold" />
      <TextField source="dateStart" />
      <TextField source="dateEnd" />
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
export const ShowProductSale = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="salePrice" />
      <TextField source="quantitySold" />
      <TextField source="dateStart" />
      <TextField source="dateEnd" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const EditProductSale = (props) => {
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
        <NumberInput source="salePrice" />
        <NumberInput source="quantitySold" />
        <DateInput source="dateStart" />
        <DateInput source="dateEnd" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="createdBy" />
        <NumberInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateProductSale = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`ProductSale created successfully`);
    redirect("list", "productsale");
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
        <NumberInput source="salePrice" />
        <NumberInput source="quantitySold" />
        <DateInput source="dateStart" />
        <DateInput source="dateEnd" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <NumberInput source="createdBy" />
        <NumberInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
