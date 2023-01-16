import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApprovalTitle } from "../approval/ApprovalTitle";
import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { StudentTitle } from "../student/StudentTitle";

export const TreatmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="approval.id"
          reference="Approval"
          label="Approvals"
        >
          <SelectInput optionText={ApprovalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="chartvist.id"
          reference="ChartVist"
          label="Chart Vist"
        >
          <SelectInput optionText={ChartVistTitle} />
        </ReferenceInput>
        <div />
        <div />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
