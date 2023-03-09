import {Button} from "@blueprintjs/core";
import { Icon, IconSize } from "@blueprintjs/core";
import { IconName, IconNames } from "@blueprintjs/icons";



export const iconMapping = {
    person : IconNames.Person,
    applications: IconNames.Applications,
    labTest: IconNames.LabTest,
    database:IconNames.Database,
    automaticUpdates:IconNames.AutomaticUpdates,
    dataconnection:IconNames.DataConnection,
    build:IconNames.Build,
    dashboard:IconNames.Dashboard
  };

export const sidebarJson = [
    {
        path:"/user-administration",
        name:"User Adminstration",
        icon: 'person',
    },
    {
        path:"/Environment-Setup",
        name:"Environment Setup",
        icon:'applications',
    },
    {
        path:"/Test-Data-Preperation",
        name:"Test Data Preperation",
        icon:'labTest',
    },
    {
        path:"/Data-Anonymization",
        name:"Data Anonymization",
        icon:'database',
    },
    {
        path:"/Data-Quality-Checks",
        name:"Data Quality Checks",
        icon:'automaticUpdates',
    },
    {
        path:"/Test-Assertion",
        name:"Test Assertion",
        icon:'dataconnection',
    },
    {
        path:"/Run-Regressions",
        name:'Run Regressions',
        icon:"build",
    },
    {
        path:"/Dashboards",
        name:'Dashboards',
        icon:"dashboard",
    },
]


