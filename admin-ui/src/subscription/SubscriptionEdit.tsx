import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { SchoolTitle } from "../school/SchoolTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount " source="amount" />
        <BooleanInput label="isStanderd " source="isStanderd" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="period"
          label="period"
          choices={[
            { label: "Monthly", value: "Monthly" },
            { label: "yearly", value: "Yearly" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="schools"
          reference="School"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="school.id"
          reference="School"
          label="School Subscription History"
        >
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
