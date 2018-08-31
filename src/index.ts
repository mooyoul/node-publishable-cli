#!/usr/bin/env node

import * as meow from "meow";
import publishable = require("publishable");

// tslint:disable
const cli = meow(`
	Usage
	  $ publishable <package>

	Examples
	  $ publishable # current working directory
	  $ publishable workspace/my-npm-package # package path 
	  $ publishable ../package.json # relative package.json path
	  
  Exit codes
    0 - Publishable
    1 - Not publishable
    2 - Failed to read package.json
`);

// tslint:enable
import * as path from "path";

(async function main(location: string) {
  const packageLocation = (() => {
    const v = location || process.cwd();

    const absolutePath = path.isAbsolute(v) ? v : path.resolve(process.cwd(), v);

    return path.basename(absolutePath) === "package.json" ?
      absolutePath :
      path.resolve(absolutePath, "package.json");
  })();

  const { name, version } = require(packageLocation);

  return await publishable(name, version);
})(cli.input[0]).then((isPublishable) => {
  process.exitCode = isPublishable ? 0 : 1;
}).catch((e) => {
  console.error(e.message); // tslint:disable-line
  process.exitCode = 2;
});
