import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ConfigurableModuleTitle } from "../configurableModule/ConfigurableModuleTitle";
import { SchoolTitle } from "../school/SchoolTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount " source="amount" />
        <ReferenceArrayInput
          source="configurableModules"
          reference="ConfigurableModule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConfigurableModuleTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
