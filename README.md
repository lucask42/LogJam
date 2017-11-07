# LogJam

Given N log sources each comprised of a boolean and M log entry objects with a timestamp and message.  
```
{
  drained: <boolean>,
  [{ date: <randomDate>, msg: <randomString> }, { date: <randomDate>, msg: <randomString> }]
}
```
Where each log source is sorted chronologically by timestamp.

There are two types of log sources, syncLogSources and asyncLogSources

Each syncLogSource has a single method which returns a  LogEntry as an object of the form:
```
  date: Date,
  msg: String,
```

Each asyncLogSource will return a Promise

If no entries remain in the log source then the drained boolean will be set to true.

The boolean is a flag that will indicate when the log source contains no more entries.

This command line app will print out all of the entries, across all of the sources, in chronological order and then print some performance stats.

Questions:
* It is unknown how long each log source is.  What if it had millions of entries and was terabytes in size?  (In other words, reading the entirety of a log source into memory probably won’t work well.)
* Consider what would happen when you're asked to merge 1K log sources, or even 1M log sources.  Where might your bottlenecks arise?

## Running LogJam

Create a local clone the repo from your terminal
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
