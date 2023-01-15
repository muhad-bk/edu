import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "./SchoolDistrictTitle";

export const SchoolDistrictShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="School"
          target="SchoolDistrictId"
          label="schools"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
