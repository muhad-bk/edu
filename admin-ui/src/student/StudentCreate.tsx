import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { RecordTitle } from "../record/RecordTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { UserTitle } from "../user/UserTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address " source="address" />
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
          reference="Record"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecordTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <TextInput label="Student Id" source="studentId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
