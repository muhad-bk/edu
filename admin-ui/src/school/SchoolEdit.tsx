import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { SchoolDistrictTitle } from "../schoolDistrict/SchoolDistrictTitle";

export const SchoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="ActiveSubscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="schooldistrict.id"
          reference="SchoolDistrict"
          label="SchoolDistrict"
        >
          <SelectInput optionText={SchoolDistrictTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="SubscriptionHistory"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
