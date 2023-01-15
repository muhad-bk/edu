import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";

export const SchoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"schools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="ActiveSubscription"
          source="subscription.id"
          reference="Subscription"
        >
          <TextField source={SUBSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="SchoolDistrict"
          source="schooldistrict.id"
          reference="SchoolDistrict"
        >
          <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};