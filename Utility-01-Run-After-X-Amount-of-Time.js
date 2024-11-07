export default function DelayedExecution(functionToRun, delayTime=1000)
{
    var timeOut;
    clearTimeout(timeOut)   
    timeOut = setTimeout(functionToRun, delayTime);
}