# DevSig
DevSig observes relevant habits as you interact with your machine. These habits include
how often you type on Slack, how often you type on Jira, how often you have your cameras on when on a Zoom call.
The purpose of this is to better understand engineers' habits with the end goal of being able to recommend
habits that may lead to success.

To use DevSig, you install it globally on your machine, get it started, and proceed to use your machine as you'd normally
use it. DevSig keeps running in the background, observing relevant habits, and keeping a log of its observations
locally on your machine. **DevSig never sends any data to any party.**

You can generate reports of these recorded observations in order to have an idea of the habits you exhibit
as you work on your machine.

**Again, DevSig never sends any data to any party. All observations are logged locally.**

## Getting Started
- Install globally `npm install --global devsig`
- Run `devsig start` to get the service up and running.
- Continue using your machine as usual while the service runs.
- To stop the service, use the `Ctrl + C` combination.
- Run `devsig report` to generate a report from all the data the service has gathered thus far.

## Getting Help
- Run `devsig --help` to see all available commands. The `--help` flag also gives you info about each command. For instance, to find out more about the `devsig start` command, run `devsig start --help`.
- If you encounter any runtime error (like `Cannot find module 'iohook'`), stop the service, run `devsig fix`, restart the service.
- You can always contact the LearnTech team for more assistance.

## Advanced Stuff

#### How DevSig Works
The DevSig service continually observes relevant interactions (like the use of Slack) and continually creates logs of these observations on the machine on which it is running. **These logs are not sent to any party or any remote repository.**

Below is what a log looks like:

![Jira logs](https://user-images.githubusercontent.com/6097630/64611794-276fbe80-d3ca-11e9-927f-18063abb5c4e.png)

Whenever you run `devsig report` DevSig takes a look at the log files currently on the machine and attempts to generate some sort of *summary* that you can share with anyone. DevSig ensures no specific data (like who you chat with) is captured in the reports. Just like with the logs, **these reports are never sent to any party or remote repository.**

Below is what a report looks like:

![Jira and Slack reports](https://user-images.githubusercontent.com/6097630/64611640-d95abb00-d3c9-11e9-974f-0c3c1fc0cda1.png)

#### Monitors
A monitor is a service that runs in the background, continually observes relevant interactions (like the use of Slack), and may create logs of these observations on the local machine.

- To see all monitors, run `devsig list`
- To start all monitors, run `devsig start`
- To start a particular monitor, run `devsig start {monitor}`
    - For instance, to run the Slack monitor, run `devsig start slack`

#### Logs
Monitors typically generate logs of relevant observations. These logs are typically rolling logs, meaning that a new log file is generated every hour. This makes it easy to inspect logs on an hourly basis. Logs are used by *reporters* to generate reports.

Logs are stored in the **logs/** folder, in the root directory of the application.

Below is what a log looks like:

![Jira logs](https://user-images.githubusercontent.com/6097630/64611794-276fbe80-d3ca-11e9-927f-18063abb5c4e.png)

#### Reporters
One of the goals of having DevSig running on your machine is the generation of reports that show relevant user habits. Such reports could contain info on how often you use work tools like Slack and Jira. Reports are generated by reporters.

A reporter is a service that, when run, goes through the logs generated by monitors, and produces a summary from that. Various summaries from various reporters are combined into a report.

- To generate a report from all reporters, run `devsig report`
- To generate a report from a particular reporter, run `devsig report {reporter}`
    - For instance, generate a report from the Slack reporter, run `devsig report slack`

Reports are stored in the **reports/** folder, in the root directory of the application.

Below is what a report looks like:

![Jira and Slack reports](https://user-images.githubusercontent.com/6097630/64611640-d95abb00-d3c9-11e9-974f-0c3c1fc0cda1.png)
