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

import { ROLE_TITLE_FIELD } from "./RoleTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Permission"
          target="RoleId"
          label="Permissions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description " source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Staf" target="RoleId" label="Stafs">
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
