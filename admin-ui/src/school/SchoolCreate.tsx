import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { ChartVistTitle } from "../chartVist/ChartVistTitle";
import { ParentTitle } from "../parent/ParentTitle";
import { RoleTitle } from "../role/RoleTitle";
import { SchoolDistrictTitle } from "../schoolDistrict/SchoolDistrictTitle";
import { StafTitle } from "../staf/StafTitle";
import { StudentTitle } from "../student/StudentTitle";

export const SchoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="ActiveSubscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="chartVists"
          reference="ChartVist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChartVistTitle} />
        </ReferenceArrayInput>
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
        <ReferenceInput
          source="schooldistrict.id"
          reference="SchoolDistrict"
          label="school district"
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
        <ReferenceArrayInput
          source="students"
          reference="Student"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="SubscriptionHistory"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
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
    </Create>
  );
};
