import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SchoolList } from "./school/SchoolList";
import { SchoolCreate } from "./school/SchoolCreate";
import { SchoolEdit } from "./school/SchoolEdit";
import { SchoolShow } from "./school/SchoolShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { ConfigurableModuleList } from "./configurableModule/ConfigurableModuleList";
import { ConfigurableModuleCreate } from "./configurableModule/ConfigurableModuleCreate";
import { ConfigurableModuleEdit } from "./configurableModule/ConfigurableModuleEdit";
import { ConfigurableModuleShow } from "./configurableModule/ConfigurableModuleShow";
import { StafList } from "./staf/StafList";
import { StafCreate } from "./staf/StafCreate";
import { StafEdit } from "./staf/StafEdit";
import { StafShow } from "./staf/StafShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { PermissionList } from "./permission/PermissionList";
import { PermissionCreate } from "./permission/PermissionCreate";
import { PermissionEdit } from "./permission/PermissionEdit";
import { PermissionShow } from "./permission/PermissionShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { TreatmentList } from "./treatment/TreatmentList";
import { TreatmentCreate } from "./treatment/TreatmentCreate";
import { TreatmentEdit } from "./treatment/TreatmentEdit";
import { TreatmentShow } from "./treatment/TreatmentShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { SchoolDistrictList } from "./schoolDistrict/SchoolDistrictList";
import { SchoolDistrictCreate } from "./schoolDistrict/SchoolDistrictCreate";
import { SchoolDistrictEdit } from "./schoolDistrict/SchoolDistrictEdit";
import { SchoolDistrictShow } from "./schoolDistrict/SchoolDistrictShow";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { ChartVistList } from "./chartVist/ChartVistList";
import { ChartVistCreate } from "./chartVist/ChartVistCreate";
import { ChartVistEdit } from "./chartVist/ChartVistEdit";
import { ChartVistShow } from "./chartVist/ChartVistShow";
import { SubscriptionPlanList } from "./subscriptionPlan/SubscriptionPlanList";
import { SubscriptionPlanCreate } from "./subscriptionPlan/SubscriptionPlanCreate";
import { SubscriptionPlanEdit } from "./subscriptionPlan/SubscriptionPlanEdit";
import { SubscriptionPlanShow } from "./subscriptionPlan/SubscriptionPlanShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Base Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="School"
          list={SchoolList}
          edit={SchoolEdit}
          create={SchoolCreate}
          show={SchoolShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="ConfigurableModule"
          list={ConfigurableModuleList}
          edit={ConfigurableModuleEdit}
          create={ConfigurableModuleCreate}
          show={ConfigurableModuleShow}
        />
        <Resource
          name="Staf"
          list={StafList}
          edit={StafEdit}
          create={StafCreate}
          show={StafShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Permission"
          list={PermissionList}
          edit={PermissionEdit}
          create={PermissionCreate}
          show={PermissionShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Treatment"
          list={TreatmentList}
          edit={TreatmentEdit}
          create={TreatmentCreate}
          show={TreatmentShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="SchoolDistrict"
          list={SchoolDistrictList}
          edit={SchoolDistrictEdit}
          create={SchoolDistrictCreate}
          show={SchoolDistrictShow}
        />
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
        <Resource
          name="ChartVist"
          list={ChartVistList}
          edit={ChartVistEdit}
          create={ChartVistCreate}
          show={ChartVistShow}
        />
        <Resource
          name="SubscriptionPlan"
          list={SubscriptionPlanList}
          edit={SubscriptionPlanEdit}
          create={SubscriptionPlanCreate}
          show={SubscriptionPlanShow}
        />
      </Admin>
    </div>
  );
};

export default App;
