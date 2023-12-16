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
} from "react-admin";

export const ListOrderDetail = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Order Id" source="orderId.id" />
      <TextField label="Product Id" source="productId.title" />
      <TextField source="price" />
      <TextField source="qty" />
      <TextField source="amount" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const EditOrderDetail = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          label="Order Id"
          source="orderId.id"
          reference="orders"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          label="Product Id"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <NumberInput source="price" />
        <NumberInput source="qty" />
        <NumberInput source="amount" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateOrderDetail = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`OrderDetail created successfully`);
    redirect("list", "orderdetails");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <ReferenceInput
          label="Order Id"
          source="orderId.id"
          reference="orders"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ReferenceInput
          label="Product Id"
          source="productId.id"
          reference="products"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <NumberInput source="price" />
        <NumberInput source="qty" />
        <NumberInput source="amount" />
      </SimpleForm>
    </Create>
  );
};
