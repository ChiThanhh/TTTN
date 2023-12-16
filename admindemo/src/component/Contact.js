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

export const ListContact = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="User Id" source="userId.name" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="title" />
      <TextField source="content" />
      <TextField source="replayId" />
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
export const ShowContact = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField label="User Id" source="userId.name" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="title" />
      <TextField source="content" />
      <TextField source="replayId" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
      <TextField source="createdBy" />
      <TextField source="updatedBy" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
export const EditContact = (props) => {
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
        <TextInput source="title" />
        <TextInput source="content" />
        <TextInput source="replayId" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreateContact = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`Contact created successfully`);
    redirect("list", "contacts");
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
        <TextInput source="title" />
        <TextInput source="content" />
        <TextInput source="replayId" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <NumberInput source="status" />
      </SimpleForm>
    </Create>
  );
};
