const doSomethingAsync = () => {
  return new Promise ((resolve, reject))
function ? setTimeout(() => resolve ('Do Something Async'), 3000)
: reject (new Error ('Test Error'))