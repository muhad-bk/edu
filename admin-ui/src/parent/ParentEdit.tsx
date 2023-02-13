import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApprovalTitle } from "../approval/ApprovalTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { StudentTitle } from "../student/StudentTitle";
import { UserTitle } from "../user/UserTitle";

export const ParentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="approvals"
          reference="Approval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApprovalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="schools"
          reference="School"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="students"
          reference="Student"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
