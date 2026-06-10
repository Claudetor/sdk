#!/usr/bin/env node

import { startSession } from "./cli/start";
import { resumeSession } from "./cli/resume";

const command = process.argv[2];

switch (command) {
  case "start":
    startSession();
    break;

  case "resume":
    resumeSession();
    break;

  default:
    console.log("Claudetor CLI");
}
