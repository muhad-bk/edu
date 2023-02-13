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

import { APPROVAL_TITLE_FIELD } from "../approval/ApprovalTitle";
import { CHARTVIST_TITLE_FIELD } from "./ChartVistTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { STAF_TITLE_FIELD } from "../staf/StafTitle";

export const ChartVistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ChartType" source="chartType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="School" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Staf" source="staf.id" reference="Staf">
          <TextField source={STAF_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Time " source="startTime" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MedicalRecord"
          target="ChartVistId"
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
