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

export const ListOrder = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="User Id" source="userId.name" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="note" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const EditOrder = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          label="User"
          source="userId.id"
          reference="users"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="address" />
        <TextInput source="note" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateOrder = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`Order created successfully`);
    redirect("list", "orders");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <ReferenceInput
          label="User"
          source="userId.id"
          reference="users"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="address" />
        <TextInput source="note" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
