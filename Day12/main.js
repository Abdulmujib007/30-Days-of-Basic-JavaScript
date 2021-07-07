
console.log(
    'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'.match(/\d+/g).reduce((acc,curr) => acc + Number(curr),0)
    )

    console.log(
        "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.".match(/-*(\d+)/g).reduce((acc,curr) => acc + parseInt(curr),0)
    )


    const isValidVariable = variable => {
        let validRegex = /^([a-zA-Z$ _])[a-zA-Z0-9$_]*$/    
        let validity = validRegex.test(variable)
        if(validity) return true 
        else return false
    }
    console.log(isValidVariable("validVariable"))


    const tenMostFrequentWords = (string,wordCount) => {
      const toArray = string.match(/[a-z]+/gi)
      const frequent = {}
        toArray.forEach(value => {
            if(frequent[value]) frequent[value]+= 1 
            else frequent[value] = 1        
        })

        const DividedFrequent = Object.entries(frequent)
       const frequently = DividedFrequent.map(item => {
            return {word:item[0],count:item[1]}
        })
       return  frequently.sort((a,b) => b.count-a.count).splice(0,wordCount)
    }
    console.log(tenMostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.` ))
    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    const cleanText = (p) => p.replace(/[^\w ]/g, '')
    console.log(cleanText(sentence))
    console.log(tenMostFrequentWords(cleanText(sentence))[0])


 