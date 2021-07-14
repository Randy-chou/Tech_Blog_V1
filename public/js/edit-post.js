const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-update').value.trim();
    const content = document.querySelector('#content-update').value.trim();
    const post_id = document.querySelector('#update-button').value.trim();

    if (title && content && post_id) {
        const response = await fetch('/api/posts', {
            method: 'PUT',
            body: JSON.stringify({ title, content, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed to post');
        }
    }
};

const deleteFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#update-button').value.trim();

    if (post_id) {
        const response = await fetch('/api/posts', {
            method: 'DELETE',
            body: JSON.stringify({post_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed to post');
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);

document
    .querySelector('#delete-button')
    .addEventListener('click', deleteFormHandler);