const today = new Date()
exports.getdate = function(){
    const options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    }
    return today.toLocaleDateString('hi-IN',options)
}
exports.getday = function(){
    const options = {
        month:'long'
    }
    return today.toLocaleDateString('hi-IN',options)
}