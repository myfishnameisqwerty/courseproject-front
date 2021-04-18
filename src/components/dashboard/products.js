import * as React from "react";
import { db } from "../../firebase";
import axios from 'axios'
import {
  DateInput,
  useMutation,
  useRedirect,
  BooleanField,
  ArrayInput,
  ImageField,
  SimpleFormIterator,
  required,
  ExportButton,
  CreateButton,
  RefreshButton,
  BooleanInput,
  EditButton,
  ReferenceArrayField,
  Filter,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  List,
  Datagrid,
  TextField,
  DeleteButton,
  Create,
  CheckboxGroupInput,
  NumberInput,
  ImageInput,
  SingleFieldList,
  ChipField,
  ReferenceArrayInput,
} from "react-admin";
const ProductsActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <ExportButton {...props} />
    <CreateButton {...props} />
  </div>
);
const ProductsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Product" source="id" reference="Products" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ProductEdit = (props) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <DateInput disabled source="createdAt" />
      <BooleanInput label="available" source="available" />
      <TextInput source="name" />
      <TextInput
        multiline
        source="desc"
        label="Description"
        style={{ width: "100%" }}
      />
      <NumberInput validate={required()} source="price" />
      <NumberInput
        validate={required()}
        label="minimum order of"
        source="min"
      />
      <NumberInput
        validate={required()}
        label="maximum order of"
        source="max"
      />
      <ReferenceArrayInput label="Tags" source="tags.id"  reference="tags">

<CheckboxGroupInput source="name" />

</ReferenceArrayInput>
      {/* <CheckboxGroupInput
        validate={required()}
        source="tags"
        choices={[
          { id: "meat", name: "Meat" },
          { id: "kosher", name: "Kosher" },
          { id: "parve", name: "Parve" },
          { id: "fish", name: "Fish" },
          { id: "dairy", name: "Dairy" },
          { id: "salad", name: "Salad" },
          { id: "sweets", name: "Sweets" },
        ]}
      /> */}
      <ArrayInput source="alegens">
        <SimpleFormIterator>
          <TextInput label="Alergen" />
        </SimpleFormIterator>
      </ArrayInput>
      <ImageInput
        source="pictures"
        multiple={true}
        label="Pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export const ProductCreate = (props) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();

  const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {

      const reader = new FileReader();
      
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file.rawFile);
});

  return (
    <Create {...props} undoable={false}>
      <SimpleForm>
        <TextInput validate={required()} source="name" resettable />
        <TextInput
          multiline
          source="desc"
          label="Description"
          style={{ width: "100%" }}
        />
        <BooleanInput label="available" source="available" />
        <NumberInput validate={required()} source="price" />
        <NumberInput
          validate={required()}
          label="minimum order of"
          source="min"
        />
        <NumberInput
          validate={required()}
          label="maximum order of"
          source="max"
        />
        {/* <CheckboxGroupInput
          validate={required()}
          source="tags"
          choices={[
            { id: "meat", name: "Meat" },
            { id: "kosher", name: "Kosher" },
            { id: "parve", name: "Parve" },
            { id: "fish", name: "Fish" },
            { id: "dairy", name: "Dairy" },
            { id: "salad", name: "Salad" },
            { id: "sweets", name: "Sweets" },
          ]}
        /> */}
        <ReferenceArrayInput label="Tags" source="tags"  reference="tags">

                <CheckboxGroupInput source="name" />

            </ReferenceArrayInput>
        
        <ArrayInput source="alegens">
          <SimpleFormIterator>
            <TextInput label="Alergen" validate={required()} />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="additives">
          <SimpleFormIterator>
            <TextInput
              source="additive"
              validate={required()}
              label="Additive"
            />
            <NumberInput source="price" validate={required()} label="price" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="variations">
          <SimpleFormIterator>
            <TextInput
              source="variation"
              validate={required()}
              label="variation"
            />
            <NumberInput source="price" validate={required()} label="price" />
          </SimpleFormIterator>
        </ArrayInput>
       
        
       
        <ImageInput
          validate={required()}
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

export const ProdutcsList = (props) => (
  <List
    filters={<ProductsFilter />}
    actions={<ProductsActionsButtons />}
    {...props}
  >
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="price" />
      <BooleanField source="available" />
      <EditButton />
      <DeleteButton mutationMode={false} />
    </Datagrid>
  </List>
);
