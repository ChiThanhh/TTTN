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
  ReferenceInput,
  SelectInput,
  ShowButton,
  SimpleShowLayout,
  Show,
} from "react-admin";
import ImageUploadForm from "./ImageUploadForm";

export const ListPost = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Topic Id" source="topicId.name" />
      <TextField source="title" />
      <TextField source="slug" />
      <TextField source="detail" />
      <TextField source="image" />
      <TextField source="type" />
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
export const ShowPost = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source="id" />
      <TextField label="Topic Id" source="topicId.name" />
      <TextField source="title" />
      <TextField source="slug" />
      <TextField source="detail" />
      <TextField source="image" />
      <TextField source="type" />
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
export const EditPost = (props) => {
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };
  return (
    <Edit {...props}>
      <SimpleForm>
      <ReferenceInput
          label="TopicId"
          source="topicId.id"
          reference="topics"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="slug" />
        <TextInput source="detail" />
        <TextInput source="image" />
        <TextInput source="type" />
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="updatedAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export const CreatePost = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const imageUploadFormRef = useRef();
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString();
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`);

    if (imageUploadFormRef.current) {
      imageUploadFormRef.current.handleImageUpload(data.image);
    }
    redirect("list", "posts");
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess }} redirect="posts">
      <SimpleForm>
      <ReferenceInput
          label="TopicId"
          source="topicId.id"
          reference="topics"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="slug" />
        <TextInput source="detail" />
        <TextInput source="image" />
        <TextInput source="type" />
        <TextInput source="metakey" />
        <TextInput source="metadesc" />
        <TextInput source="createdAt" defaultValue={getCurrentDateTime()} />
        <TextInput source="createdBy" />
        <TextInput source="updatedBy" />
        <TextInput source="status" />
        <ImageUploadForm endpoint="http://localhost:8081/api/posts" ref={imageUploadFormRef} />
      </SimpleForm>
    </Create>
  );
};
