const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-post').value.trim();
    const content = document.querySelector('#content-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content}),
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