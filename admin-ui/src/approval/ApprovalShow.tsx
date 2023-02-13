import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MEDICALRECORD_TITLE_FIELD } from "../medicalRecord/MedicalRecordTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ApprovalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Authorisation Letter" source="authorisationLetter" />
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
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
