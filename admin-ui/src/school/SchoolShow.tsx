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

import { SCHOOL_TITLE_FIELD } from "./SchoolTitle";
import { STAF_TITLE_FIELD } from "../staf/StafTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";

export const SchoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Abbreviation" source="abbreviation" />
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Logo URL" source="logoUrl" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parents" source="parent.id" reference="Parent">
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
        <ReferenceManyField
          reference="ChartVist"
          target="SchoolId"
          label="Chart Vists"
        >
          <Datagrid rowClick="show">
            <TextField label="ChartType" source="chartType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="School"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Staf" source="staf.id" reference="Staf">
              <TextField source={STAF_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Time " source="startTime" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Student"
          target="SchoolId"
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
