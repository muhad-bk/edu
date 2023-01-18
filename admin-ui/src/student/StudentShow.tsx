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

import { MEDICALRECORD_TITLE_FIELD } from "../medicalRecord/MedicalRecordTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { STAF_TITLE_FIELD } from "../staf/StafTitle";
import { APPROVAL_TITLE_FIELD } from "../approval/ApprovalTitle";
import { CHARTVIST_TITLE_FIELD } from "../chartVist/ChartVistTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address " source="address" />
        <TextField label="Contact Details" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="General Details" source="generalDetails" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="School" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="Student Id" source="studentId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Approval"
          target="StudentId"
          label="Approvals"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Authorisation Letter"
              source="authorisationLetter"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Record"
              source="medicalrecord.id"
              reference="MedicalRecord"
            >
              <TextField source={MEDICALRECORD_TITLE_FIELD} />
            </ReferenceField>
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
          reference="ChartVist"
          target="StudentId"
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
          reference="MedicalRecord"
          target="StudentId"
          label="MedicalRecords"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Approvals"
              source="approval.id"
              reference="Approval"
            >
              <TextField source={APPROVAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Category" source="category" />
            <ReferenceField
              label="Chart Vist"
              source="chartvist.id"
              reference="ChartVist"
            >
              <TextField source={CHARTVIST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="General details" source="generalDetails" />
            <TextField label="ID" source="id" />
            <TextField label="Medication Details" source="medicationDetails" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Timing Details" source="timingDetails" />
            <TextField label="Treatment Details" source="treatmentDetails" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
