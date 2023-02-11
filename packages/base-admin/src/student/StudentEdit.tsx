import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApprovalTitle } from "../approval/ApprovalTitle";
import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { ParentTitle } from "../parent/ParentTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { UserTitle } from "../user/UserTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address " source="address" />
        <ReferenceArrayInput
          source="approvals"
          reference="Approval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApprovalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="chartVists"
          reference="ChartVist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChartVistTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="parent"
          reference="Parent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="records"
          reference="MedicalRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MedicalRecordTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="school.id" reference="School" label="School">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Deactivate ", value: "Deactivate" },
            { label: "Pending", value: "Pending" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Student Id" source="studentId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
