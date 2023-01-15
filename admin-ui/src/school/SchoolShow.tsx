import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";

export const SchoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="ActiveSubscription"
          source="subscription.id"
          reference="Subscription"
        >
          <TextField source={SUBSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="school district" source="schoolDistrict" />
        <TextField label="State" source="state" />
        <TextField label="Township" source="township" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
