import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ApprovalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Approvals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Authorisation Letter" source="authorisationLetter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Record"
          source="treatment.id"
          reference="Treatment"
        >
          <TextField source={TREATMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
