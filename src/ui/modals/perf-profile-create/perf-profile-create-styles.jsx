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

export default function makePerfProfileCreateStyles() {
  return makeStyles(
    (theme) => {
      return {
        root: {
          width: "100%",
          // height: "30vh",
          height: "450px",
          display: "flex",
          flexDirection: "column",
        },
        dialog: {
          padding: theme.spacing(2),
        },
        loaderContainer: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        loaderText: {
          marginTop: theme.spacing(3),
        },
        profileBody: {
          marginTop: theme.spacing(1),
        },
        dialogContent: {
          height: "100%",
          flex: "1 1 auto",
          padding: theme.spacing(1, 3),
          overflowY: "hidden",
        },
        transitionGroup: {
          height: "100%",
        },
        textRow: {
          display: "flex",
          marginBottom: theme.spacing(2),
        },
        textLabel: {
          fontSize: "0.75rem",
          position: "relative",
          top: "-5px",
        },
        textSpacer: {
          width: theme.spacing(2),
        },
        cancelButton: {
          color: theme.palette.text.secondary,
        },
      };
    },
    { name: "PerfProfileCreateDialog" }
  );
}
