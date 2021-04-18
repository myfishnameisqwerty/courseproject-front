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
  DeleteButton,
  NumberInput,
  NumberField
} from "react-admin";

const UserRolesActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <ExportButton {...props} />
    <CreateButton {...props} />
  </div>
);

const UserRolesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
    <ReferenceInput label="Role" source="id" reference="UserRoles" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
export const UserRoleCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="rank" />
      </SimpleForm>
    </Create>
  );
};
export const UserRoleEdit = (props) => (
  <Edit actions={<UserRolesActionsButtons />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="rank" />
    </SimpleForm>
  </Edit>
);
export const UserRolesList = props =>(
    <List actions={<UserRolesActionsButtons/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <NumberField source="rank"/>
            <EditButton />
      <DeleteButton/>
        </Datagrid>
    </List>
)