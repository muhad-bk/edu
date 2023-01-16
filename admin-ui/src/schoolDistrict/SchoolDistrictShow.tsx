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
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "./SchoolDistrictTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SchoolDistrictShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
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
              label="Parents"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="school district"
              source="schooldistrict.id"
              reference="SchoolDistrict"
            >
              <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <TextField label="Township" source="township" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Staf"
          target="SchoolDistrictId"
          label="Stafs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="School Districts"
              source="schooldistrict.id"
              reference="SchoolDistrict"
            >
              <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
