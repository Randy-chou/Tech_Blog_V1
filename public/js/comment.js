const postFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-box').value.trim();
    const post_id = document.querySelector('#add-button').value.trim();

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/comment/${post_id}`);
        } else {
            alert('Failed to post');
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);