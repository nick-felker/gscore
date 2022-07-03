


interface PutFetchArguments{
    url: string;
    body: string;
}

export function putFetch({url, body}:PutFetchArguments){
    
    return fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: '4',
        },
        body,
    })
}