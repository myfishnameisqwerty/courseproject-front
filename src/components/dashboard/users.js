import * as React from "react";
import auth from "../../auth";
import { useMutation, useRedirect, required, ExportButton, CreateButton, RefreshButton, BooleanInput, EditButton, Filter, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, EmailField, DeleteButton, Create, PasswordInput} from 'react-admin';
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
            <TextInput source="userName" />
            <BooleanInput label="Enabled" source="active" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'seller', name: 'seller' },
                { id: 'client', name: 'client' },
            ]} />
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
        <SimpleForm save={save}>
            <TextInput validate={required()} source="userName" />
            <EmailField validate={required()} source="email" />
            <PasswordInput validate={required()} source="pass"/>
            <BooleanInput label="Enabled" source="active" />
            <SelectInput validate={required()} source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'seller', name: 'seller' },
                { id: 'client', name: 'client' },
            ]} />
        </SimpleForm>
    </Create>
)};

export const UserList = props => (

    <List filters={<UserFilter/>} actions={<UserActionsButtons/>} {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="userName" />
            <TextField source="role"/>
            <TextField label="Enabled" source="active"/>
            <EmailField source="email" />
            
            <EditButton />
            <DeleteButton mutationMode={false}/>
        </Datagrid>
    </List>

);