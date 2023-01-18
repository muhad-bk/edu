import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";
import { StudentTitle } from "../student/StudentTitle";

export const ApprovalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="approvedBy"
          reference="Parent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Authorisation Letter" source="authorisationLetter" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="medicalrecord.id"
          reference="MedicalRecord"
          label="Record"
        >
          <SelectInput optionText={MedicalRecordTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
