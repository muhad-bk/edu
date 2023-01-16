import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApprovalTitle } from "../approval/ApprovalTitle";
import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { StudentTitle } from "../student/StudentTitle";

export const TreatmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="approval.id"
          reference="Approval"
          label="Approvals"
        >
          <SelectInput optionText={ApprovalTitle} />
        </ReferenceInput>
        <SelectInput
          source="category"
          label="Category"
          choices={[
            { label: "Immunisation", value: "Immunisation" },
            { label: "Treatment", value: "Treatment" },
            { label: "Medication", value: "Medication" },
            { label: "Mandatory Screening", value: "MandatoryScreening" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
    </Edit>
  );
};
