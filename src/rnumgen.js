const random_num_array = () => {
    var arrayy = []
    Math.floor(Math.random() * 207)
    for(let i = 0; i < 4; i++)
    {
        var a = Math.floor(Math.random() * 206);
        if(arrayy.includes(a))
        {
            if(a === 208)
            {
                arrayy.push(a - Math.floor(Math.random() * 21))
            }
            else
            {
                arrayy.push(a + 1)
            }
        }
        else
        {
            arrayy.push(a)
        }   
    }
    return arrayy
}


export default random_num_array