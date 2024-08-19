const exec = require("child_process").exec;

const serverUrl = "http://localhost:9000";
const token = "sqp_76fa26ab1c8e0688586fcbadd803560446ee18ae";
const projectKey = "samplewebapp";

const options = [
  `-Dsonar.host.url=${serverUrl}`,
  `-Dsonar.login=${token}`,
  `-Dsonar.projectKey=${projectKey}`,
  `-Dsonar.projectName=samplewebapp`,
  `-Dsonar.sources=.`,
  `-Dsonar.language=js`,
  `-Dsonar.sourceEncoding=UTF-8`,
].join(" ");

const command = `sonar-scanner ${options}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`SonarQube analysis complete: ${stdout}`);
});
