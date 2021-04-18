import * as React from "react";
import {
  Create,
  CreateButton,
  Datagrid,
  Edit,
  ExportButton,
  List,
  RefreshButton,
  SimpleForm,
  TextField,
  TextInput,
  Filter,
  ReferenceInput,
  SelectInput,
  EditButton,
  DeleteButton
} from "react-admin";

const TagsActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <ExportButton {...props} />
    <CreateButton {...props} />
  </div>
);

const TagsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
    <ReferenceInput label="Tag" source="id" reference="tags" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
export const TagCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};
export const TagEdit = (props) => (
  <Edit actions={<TagsActionsButtons />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      
    </SimpleForm>
  </Edit>
);
export const TagsList = props =>(
    <List actions={<TagsActionsButtons/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <EditButton />
      <DeleteButton/>
        </Datagrid>
    </List>
)