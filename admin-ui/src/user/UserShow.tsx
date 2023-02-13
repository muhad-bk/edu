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

import { USER_TITLE_FIELD } from "./UserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Profile Pic URL" source="profilePicUrl" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Parent" target="UserId" label="Parents">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Staf" target="UserId" label="Stafs">
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
        <ReferenceManyField
          reference="Student"
          target="UserId"
          label="students"
        >
          <Datagrid rowClick="show">
            <TextField label="Address " source="address" />
            <TextField label="Contact Details" source="contactDetails" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="General Details" source="generalDetails" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="School"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="Student Id" source="studentId" />
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
