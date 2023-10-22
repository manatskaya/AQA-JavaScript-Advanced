// Task 1:
const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
    };

const serialization = JSON.stringify(userSettings);
    console.log(serialization);

    console.log('-------------------')
    
const deserialization = JSON.parse(serialization);
    console.log(deserialization);

    // Task 2:
    async function delayAndLog(message, milliseconds){
        await new Promise ((resolve) => {
            setTimeout(() => {
                resolve ('Done')
            }, milliseconds);
        })
        console.log(message);
    }
    delayAndLog("Hi there", 3000);

    // Task 3:
async function returnComments(id){
    const request = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const resultComments = request.json();
    return resultComments
}
const resultCommentsArray = Promise.all([returnComments(1), returnComments(2), returnComments(5)])
    resultCommentsArray.then((resultComments) => {
    console.log('Comments Array', resultComments)
});

const resultCommentsRace = Promise.race([returnComments(3), returnComments(4)])
    resultCommentsRace.then((resultComments) => {
    console.log('Comments Race', resultComments)
});

async function returnPosts(id){
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const resultPosts = request.json();
    return resultPosts
}
const resultPostArray = Promise.all([returnPosts(1), returnPosts(3), returnPosts(2)])
resultPostArray.then((resultPosts) => {
    console.log('Posts', resultPosts)
});

const resultPostsRace = Promise.race([returnPosts(2), returnPosts(4)])
    resultPostsRace.then((resultPosts) => {
    console.log('Posts Race', resultPosts)
});   