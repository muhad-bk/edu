import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const ConfigurableModuleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description " multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="subscriptionsConfigModules"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
