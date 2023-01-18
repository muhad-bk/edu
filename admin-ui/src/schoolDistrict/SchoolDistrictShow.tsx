import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "./SchoolDistrictTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";

export const SchoolDistrictShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="subscription"
          source="subscription.id"
          reference="Subscription"
        >
          <TextField source={SUBSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="School"
          target="SchoolDistrictId"
          label="schools"
        >
          <Datagrid rowClick="show">
            <TextField label="Abbreviation" source="abbreviation" />
            <TextField label="Address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Logo URL" source="logoUrl" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Parents"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="School Code" source="schoolCode" />
            <ReferenceField
              label="School district"
              source="schooldistrict.id"
              reference="SchoolDistrict"
            >
              <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <TextField label="Status" source="status" />
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
            <TextField label="Address" source="address" />
            <TextField label="Contact Details" source="contactDetails" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Destignation" source="destignation" />
            <TextField label="Full Name" source="fullName" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="Id Number" source="idNumber" />
            <TextField label="official Email" source="officialEmail" />
            <TextField label="Race" source="race" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="School Districts"
              source="schooldistrict.id"
              reference="SchoolDistrict"
            >
              <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
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
