import * as React from "react";
import { db } from "../../firebase";
import RichTextInput from "ra-input-rich-text";
import {
    SimpleShowLayout,
  ExportButton,
  CreateButton,
  RefreshButton,
  SimpleFormIterator,
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
  ArrayInput,
  DateField,
  SelectField,
  ArrayField,
  Show,
  ShowButton,
} from "react-admin";
const OrdersActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <ExportButton {...props} />
    <CreateButton {...props} />
  </div>
);
const OrdersFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Order" source="id" reference="Orders" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
export  const ShowOrder = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="status"/>
            <h4>About order</h4>
            <TextField source="orderInfo.productId" />
            <TextField source="orderInfo.quantity" />
            <TextField source="orderInfo.variation" />
            {/* <ArrayInput source="orderInfo.additives">
        <SimpleFormIterator>
          <TextInput label="Alergen" />
        </SimpleFormIterator>
      </ArrayInput> */}
            <TextField
        multiline
        source="orderInfo.notations"
        
        style={{ width: "100%" }}
      />
            <DateField label="Order Date" source="orderDate" />
            <h4>Customer</h4>
            <EmailField source="customer.email" />
            <TextField source="customer.name" />
            <TextField source="customer.tel" />
            <h4>Address</h4>
            <TextField source="address.city" />
            <TextField source="address.street" />
            <TextField source="address.appartmant" /> 
        </SimpleShowLayout>
    </Show>
)
export const EditOrder = (props) => (
    <Edit {...props}  undoable={false}>
      <SimpleForm >
        <TextInput source="id" disabled/>
        <TextInput source="totalSum" disabled/>
        
        <SelectInput source="status" choices={[
                  { id: 'Unconfirmed', name: 'Unconfirmed' },
                  { id: 'Rejected', name: 'Rejected' },
                  { id: 'Confirmed', name: 'Confirmed' },
                  { id: 'InProgress', name: 'In progress' },
                  { id: 'OnTheWay', name: 'Ontheway' },
                  { id: 'Ready', name: 'Ready' }
              ]} />
          </SimpleForm >
          </Edit>
  );
export const ListOrders = (props) => (
  <List filters={<OrdersFilter />} actions={<OrdersActionsButtons />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="totalSum" />
      <TextField source="status" />
      {/* <SelectInput source="status" choices={[
                { id: 'Unconfirmed', name: 'Unconfirmed' },
                { id: 'Rejected', name: 'Rejected' },
                { id: 'Confirmed', name: 'Confirmed' },
                { id: 'InProgress', name: 'In progress' },
                { id: 'OnTheWay', name: 'Ontheway' },
                { id: 'Ready', name: 'Ready' }
            ]} /> */}
        <ShowButton/>    
        <EditButton />
    </Datagrid>
  </List>
);

