



interface PostFetchArguments{
    url: string;
    body: string;
}

export function postFetch({url, body}:PostFetchArguments){
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body,
    })
}