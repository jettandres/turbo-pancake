import { exec } from "child_process"
import fs from "fs"

const testButlerApkPath = "./temp/test-butler-app.apk"

module.exports = async function (globalConfig, projectConfig) {
  try {
    if (!fs.existsSync(testButlerApkPath)) {
      console.log("no test-butler apk found!\ndownloading apk...")
      const process = exec(
        `curl -f -o ${testButlerApkPath} https://repo1.maven.org/maven2/com/linkedin/testbutler/test-butler-app/2.2.1/test-butler-app-2.2.1.apk`
      )

      process.stdout.on("data", (data) => {
        console.log(data.toString())
      })

      process.stderr.on("data", (data) => {
        console.error(data.toString())
      })
    } else {
      console.log("test-butler apk already downloaded")
    }
  } catch (err) {
    console.log("error in global jest", err)
  }
}
