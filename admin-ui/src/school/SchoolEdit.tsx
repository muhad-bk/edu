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

import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { ParentTitle } from "../parent/ParentTitle";
import { RoleTitle } from "../role/RoleTitle";
import { SchoolDistrictTitle } from "../schoolDistrict/SchoolDistrictTitle";
import { StafTitle } from "../staf/StafTitle";
import { StudentTitle } from "../student/StudentTitle";

export const SchoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Abbreviation" source="abbreviation" />
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="chartVists"
          reference="ChartVist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChartVistTitle} />
        </ReferenceArrayInput>
        <TextInput label="Logo URL" source="logoUrl" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parents">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="roles"
          reference="Role"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoleTitle} />
        </ReferenceArrayInput>
        <TextInput label="School Code" source="schoolCode" />
        <ReferenceInput
          source="schooldistrict.id"
          reference="SchoolDistrict"
          label="School district"
        >
          <SelectInput optionText={SchoolDistrictTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="stafs"
          reference="Staf"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StafTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="state"
          label="State"
          choices={[
            { label: "Sate1  ", value: "Sate_1" },
            { label: "State 2", value: "State_2" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Deactivate", value: "Deactivate" },
            { label: "Pending", value: "Pending" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="students"
          reference="Student"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="township"
          label="Township"
          choices={[
            { label: "T1", value: "T1" },
            { label: "T2", value: "T2" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
