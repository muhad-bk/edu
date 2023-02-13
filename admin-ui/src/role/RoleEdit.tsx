import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PermissionTitle } from "../permission/PermissionTitle";
import { SchoolDistrictTitle } from "../schoolDistrict/SchoolDistrictTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { StafTitle } from "../staf/StafTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="permissions"
          reference="Permission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schoolDistricts"
          reference="SchoolDistrict"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolDistrictTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schools"
          reference="School"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="stafs"
          reference="Staf"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StafTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
