import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { RoleTitle } from "../role/RoleTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { SchoolDistrictTitle } from "../schoolDistrict/SchoolDistrictTitle";
import { UserTitle } from "../user/UserTitle";

export const StafEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="chartVists"
          reference="ChartVist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChartVistTitle} />
        </ReferenceArrayInput>
        <TextInput label="Contact Details" source="contactDetails" />
        <TextInput label="Destignation" source="destignation" />
        <TextInput label="Full Name" source="fullName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Not Specified", value: "NotSpecified" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Id Number" source="idNumber" />
        <TextInput label="official Email" source="officialEmail" type="email" />
        <TextInput label="Race" source="race" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="school"
          reference="School"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="schooldistrict.id"
          reference="SchoolDistrict"
          label="School Districts"
        >
          <SelectInput optionText={SchoolDistrictTitle} />
        </ReferenceInput>
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
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
