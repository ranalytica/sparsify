/*
Copyright (c) 2021 - present / Neuralmagic, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { makeStyles } from "@material-ui/core/styles";

export default function makeBenchmarkComparisonStyles() {
  return makeStyles(
    (theme) => {
      return {
        root: {
          padding: theme.spacing(1, 4, 0),
          position: "relative",
        },
        header: {
          display: "flex",
          justifyContent: "flex-end",
        },
        metricsRoot: {},
        metric: {
          marginBottom: theme.spacing(2),
        },
        engineMetrics: {
          justifyContent: "center",
          marginLeft: theme.spacing(2),
        },
        engineInformation: {
          marginBottom: theme.spacing(2),
        },
        divider: {
          height: "250px",
        },
        editButton: {
          position: "absolute",
          right: theme.spacing(3),
          top: theme.spacing(2),
        },
        chart: {
          flex: "1 1 auto",
        },
        textButton: {
          textTransform: "none",
          justifyContent: "flex-start",
        },
        tabs: {
          flexGrow: 1,
          marginBottom: theme.spacing(1),
        },
      };
    },
    { name: "BenchmarkComparison" }
  );
}
