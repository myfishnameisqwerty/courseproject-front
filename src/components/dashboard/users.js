import * as React from "react";
import auth from "../../auth";
import { useMutation, useRedirect, required, ExportButton, CreateButton, RefreshButton, BooleanInput, EditButton, Filter, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, EmailField, DeleteButton, Create, PasswordInput, ReferenceArrayInput, SelectArrayInput, BooleanField} from 'react-admin';
const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
);
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

    

export const UserEdit = props => (
    <Edit {...props}  undoable={false}>
        <SimpleForm >
            <TextInput disabled source="email" />
            <TextInput source="username" />
            <BooleanInput label="Enabled" source="active" />
            {/* <ReferenceInput label="role" source="role"  reference="userRoles" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput> */}
            <ReferenceArrayInput source="role.id" reference="userRoles">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>

        </SimpleForm>
    </Edit>
);
export const UserCreate = props => {
    const [mutate] = useMutation();
    const redirect = useRedirect()
    const save = React.useCallback(
        async (values) => {
            await auth.signup(values.email, values.pass, values.userName, values.roleId)
            redirect("/users")
        },
        [mutate],
    );
    return (
    <Create {...props}  undoable={false}>
        <SimpleForm>
            <TextInput validate={required()} source="userName" />
            <TextInput validate={required()} source="email" />
            <PasswordInput validate={required()} source="pass"/>
            <BooleanInput label="Enabled" source="active" />
            {/* <SelectInput validate={required()} source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'seller', name: 'seller' },
                { id: 'client', name: 'client' },
            ]} /> */}
            <ReferenceArrayInput source="role" reference="userRoles">
                <SelectInput optionText="name"/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
)};

export const UserList = props => (

    <List filters={<UserFilter/>} actions={<UserActionsButtons/>} {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="username" />
            <TextField label="Role" source="role"/>
            <BooleanField label="Enabled" source="active"/>
            
            <EmailField source="email" />
            
            <EditButton />
            <DeleteButton mutationMode={false}/>
        </Datagrid>
    </List>

);