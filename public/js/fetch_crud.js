const postIkku = document.querySelector('.postIkku');
const postBtn = document.querySelector('.postBtn');
const ikkulist = document.querySelector('.ikkuList');
const url = '/fetch';

const postFetch = () => {
    const formData = {
        ikku: postIkku.value
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        }
        console.log('ok!');
        console.log(response);
        return response.text();
    }).then((data)  => {
        console.log(data);
        alert(data);
    }).catch((error) => {
        console.log(error);
    });
};

postBtn.addEventListener('click', postFetch, false);
