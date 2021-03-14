import * as React from "react";
import { db } from "../../firebase";
import RichTextInput from "ra-input-rich-text";
import {
  DateInput,
  useMutation,
  useRedirect,
  ImageField,
  required,
  ExportButton,
  CreateButton,
  RefreshButton,
  BooleanInput,
  EditButton,
  Filter,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  List,
  Datagrid,
  TextField,
  EmailField,
  DeleteButton,
  Create,
  ImageInput,
  DateField,
} from "react-admin";
const PostsActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <ExportButton {...props} />
    <CreateButton {...props} />
  </div>
);
const PostsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Post" source="id" reference="Posts" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const save = React.useCallback(
    (value) => {
      const today = new Date();
      const createdAt = `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`;
      const id = Math.floor(Math.random() * Date.now());
      console.log(value);
      db.ref("posts/" + id).set({
        createdAt,
        id,
        ...value,
      });
      redirect("/posts");
    },
    [mutate]
  );
  return (
    <Create {...props}>
      <SimpleForm save={save}>
        <TextInput validate={required()} source="header" resettable />
        <RichTextInput
          validate={required()}
          source="description"
          label="Description"
        />
        <ImageInput
          multiple={true}
          source="pictures"
          label="Pictures"
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
export const PostsList = (props) => (
  <List filters={<PostsFilter />} actions={<PostsActionsButtons />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="header" />
      <DateField source="createdAt" />
      <EditButton />
      <DeleteButton mutationMode={false} />
    </Datagrid>
  </List>
);
export const PostEdit = (props) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <DateInput disabled source="createdAt" />
      <TextInput source="header" />
      <RichTextInput source="description" label="Description" />
      <ImageInput
        multiple={true}
        source="pictures"
        label="Pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
