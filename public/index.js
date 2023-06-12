const dataSection = document.querySelector('#data')

/**
 * {
 *     "data": {
 *         "requests": [
 *             1,
 *             2
 *         ]
 *     }
 * }
 */

dataSection.innerHTML = `
    <h2>
        Users: 
    </h2>
`

fetch('http://localhost:3000/data')
    .then((res) => res.json())
    .then(json => {
        json.data.requests.map(item => {
            return {
                userID: item,
            }
        }).forEach((item) => {
            dataSection.innerHTML += `
            <div>
                <span>UserID: ${JSON.stringify(item.userID)}</span>
            </div>
            `
        })
    })
    .catch((err) => console.error(err))