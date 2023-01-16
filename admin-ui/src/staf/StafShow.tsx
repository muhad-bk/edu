import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { STAF_TITLE_FIELD } from "./StafTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { SCHOOLDISTRICT_TITLE_FIELD } from "../schoolDistrict/SchoolDistrictTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StafShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="School Districts"
          source="schooldistrict.id"
          reference="SchoolDistrict"
        >
          <TextField source={SCHOOLDISTRICT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ChartVist"
          target="StafId"
          label="Chart Vists"
        >
          <Datagrid rowClick="show">
            <TextField label="ChartType" source="chartType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="School"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Staf" source="staf.id" reference="Staf">
              <TextField source={STAF_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Time " source="startTime" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
