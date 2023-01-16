import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPROVAL_TITLE_FIELD } from "../approval/ApprovalTitle";
import { CHARTVIST_TITLE_FIELD } from "../chartVist/ChartVistTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const TreatmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Timing Details" source="timingDetails" />
        <TextField label="Treatment Details" source="treatmentDetails" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
