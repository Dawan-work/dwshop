const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/albums"
]

// Parallel , Sequencial , Race

const getData2 = async () => {
    try {
        const [result1, result2, result3] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())))     
        console.log(result1);
        console.log(result2);
        console.log(result3);

    } catch(e) {
        console.log(e);
    }
}

const getDataSequence = async () => {
    for(const url of urls) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
        } catch(e) {
            console.log(e);
        }
    }
}


const getDataRace = async () => {
    const promises = urls.map(url => fetch(url))
    const winner = await Promise.race(promises)
    console.log("The winner is ", winner); 
}