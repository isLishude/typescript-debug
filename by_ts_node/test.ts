import { log } from "console";
import { argv, execArgv } from "process";

// node and current file
log("args", argv);
// -r ts-node/register
log("execArgv", execArgv);

log("over");
