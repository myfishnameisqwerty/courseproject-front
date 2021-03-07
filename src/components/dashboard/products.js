import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { BooleanField, ArrayInput, ImageField, SimpleFormIterator, required, ExportButton, CreateButton, RefreshButton, BooleanInput, EditButton, Filter, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, EmailField, DeleteButton, Create, CheckboxGroupInput, ArrayField, NumberInput, ImageInput} from 'react-admin';
const ProductsActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
);
const ProductsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Product" source="id" reference="Products" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

    

export const ProductEdit = props => (
    <Edit {...props}  undoable={false}>
        <SimpleForm >
        <TextInput source="name" />
        {/* <RichTextInput source="desc" label="Description" /> */}
        <TextInput multiline source="desc" label="Description" style={{width: "100%"}}/>
        <NumberInput validate={required()} source="price"/>
            <NumberInput validate={required()} label="minimum order of" source="min"/>
            <NumberInput validate={required()} label="maximum order of" source="max"/>
            <CheckboxGroupInput  validate={required()} source="tags" choices={[
                { id: 'meat', name: 'Meat' },
                { id: 'kosher', name: 'Kosher' },
                { id: 'parve', name: 'Parve' },
                { id: 'fish', name: 'Fish' },
                { id: 'dairy', name: 'Dairy' },
                { id: 'salad', name: 'Salad' },
                { id: 'sweets', name: 'Sweets' },
            ]} />
            <ArrayInput source="alegens">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <ImageInput label="add images" source="pictures" />
        </SimpleForm>
    </Edit>
);
export const ProductCreate = props => (
    <Create {...props}  undoable={false}>
        <SimpleForm>
            <TextInput validate={required()} source="name" resettable/>
            <TextInput multiline source="desc" label="Description" style={{width: "100%"}}/>
            <NumberInput validate={required()} source="price"/>
            <NumberInput validate={required()} label="minimum order of" source="min"/>
            <NumberInput validate={required()} label="maximum order of" source="max"/>
            <CheckboxGroupInput  validate={required()} source="tags" choices={[
                { id: 'meat', name: 'Meat' },
                { id: 'kosher', name: 'Kosher' },
                { id: 'parve', name: 'Parve' },
                { id: 'fish', name: 'Fish' },
                { id: 'dairy', name: 'Dairy' },
                { id: 'salad', name: 'Salad' },
                { id: 'sweets', name: 'Sweets' },
            ]} />
            <ArrayInput source="alegens">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <BooleanInput  label="available" source="available" />
            
            <ImageInput accept="pictures/*"  multiple={false} validate={required()} label="add images" source="pictures">
            <ImageField source="src" />
                </ImageInput>
            
        </SimpleForm>
    </Create>
);

export const ProdutcsList = props => (

    <List filters={<ProductsFilter/>} actions={<ProductsActionsButtons/>} {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="name" />
            <TextField source="price" />
            <BooleanField source="available" />
            
            <EditButton />
            <DeleteButton mutationMode={false}/>
        </Datagrid>
    </List>

);