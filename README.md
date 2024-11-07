# My-Utilities

### 1- Run After X Amount of Time

**File Name :**
```
    ./Utility-01-Run-After-X-Amount-of-Time.js
```

Function will wait for given amount of time before running the given function. If this function is called again during the waiting time it will reset the delayed time to new given time. It will make sure that function only runs once during the given time regardless of how many times it's called.


Accepts two arguments first is the function to run and second is the time before running the function(Second argumet is optional, if second argument is not provided it will automatically set delay time to one sec).

Import statement
```
    import DelayedExecution from 'Utility-01-Run-After-X-Amount-of-Time.js'
```


