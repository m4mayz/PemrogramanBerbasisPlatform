const checkCondition = (weather) =>{
    let h = weather["humidity"]
    let t = weather["temperature"]
    let s = weather["windSpeed"]
    if(t >= 20 && t <= 30){
        if(h > 50){
            if(s < 15){
                return `Ideal Condition`
            }
        }
    }
    return 'Not Ideal Condition'
}
module.exports = {checkCondition}