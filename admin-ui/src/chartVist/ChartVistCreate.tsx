import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SchoolTitle } from "../school/SchoolTitle";
import { StafTitle } from "../staf/StafTitle";
import { StudentTitle } from "../student/StudentTitle";
import { TreatmentTitle } from "../treatment/TreatmentTitle";

export const ChartVistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="chartType"
          label="ChartType"
          choices={[
            { label: "Type 1", value: "Type_1" },
            { label: "Type 2", value: "Type_2" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="End Time" source="endTime" />
        <ReferenceInput source="school.id" reference="School" label="School">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <ReferenceInput source="staf.id" reference="Staf" label="Staf">
          <SelectInput optionText={StafTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Time " source="startTime" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="treatments"
          reference="Treatment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TreatmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
