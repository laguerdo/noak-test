# Noak Clinic Queue Test - Michael

This is a simple test to see how long it takes to get through the queue.

## How to run

1. Clone the repository
2. Make sure you have Node.js installed
3. Run node index.js

## How it works

The script creates a clinic with two doctors and adds 11 patients to the queue. It then simulates 2 minutes of waiting time and calculates the estimated waiting time for each patient.

## Output

```
John's waiting time after Peter
> 0 minutes
John's waiting time after Jessica
> 2 minutes
John's waiting time after Astrid
> 3 minutes
John's waiting time after William
> 6 minutes
John's waiting time after Anna
> 6 minutes
John's waiting time after Jerry
> 9 minutes
John's waiting time after Mary
> 10 minutes
John's waiting time after Michael
> 12 minutes
John's waiting time after Sarah
> 14 minutes
John's waiting time after David
> 15 minutes

Estimated waiting time: 15 minutes
```

## Conclusion

By looping through the patients and select the shortest doctor's waiting time, we can estimate the waiting time for each patient. This is a simple and effective way to calculate the waiting time for a patient in a queue.
