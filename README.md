# LogJam

Given N log sources each composed of a boolean and M log entry objects with a timestamp and message in the following form:  
```
{
  drained: <boolean>,
  [{ date: <randomDate>, msg: <randomString> }, { date: <randomDate>, msg: <randomString> }, ...]
}
```
Where each log source is sorted chronologically by timestamp.

There are two types of log sources, syncLogSources and asyncLogSources

Each syncLogSource has a single method which returns a LogEntry as an object of the form:
```
{
  date: Date,
  msg: String,
}
```

Each asyncLogSource will return a Promise which returns a LogEntry.

If no entries remain in the log source then the drained boolean will be set to true.

This command line app will print out all of the entries, across all of the sources, in chronological order and then print some performance stats.

## Running LogJam

Create a local clone of the repo from your terminal
```
git clone https://github.com/lucask42/LogJam
```
Navigate to the new folder containing the project
```
cd LogJam
```
Install the project's dependencies
```
npm install
```
Run the app
```
npm start
```
