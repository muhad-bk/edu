import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { StafTitle } from "../staf/StafTitle";
import { StudentTitle } from "../student/StudentTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FullName" source="fullName" />
        <SelectInput
          source="language"
          label="Language"
          choices={[{ label: "English", value: "English" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="parents"
          reference="Parent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParentTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="Profile Pic URL" source="profilePicUrl" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="stafs"
          reference="Staf"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StafTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="students"
          reference="Student"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
