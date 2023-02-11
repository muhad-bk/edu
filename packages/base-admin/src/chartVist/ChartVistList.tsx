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
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { STAF_TITLE_FIELD } from "../staf/StafTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ChartVistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Chart Vists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ChartType" source="chartType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="School" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Staf" source="staf.id" reference="Staf">
          <TextField source={STAF_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Time " source="startTime" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
