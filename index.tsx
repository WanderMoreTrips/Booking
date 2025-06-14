/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    const redirectButton = document.getElementById('redirect-button') as HTMLButtonElement | null;
    const githubUrl = 'https://github.com';

    if (redirectButton) {
        redirectButton.addEventListener('click', () => {
            window.location.href = githubUrl;
        });

        // Add keyboard accessibility for Enter key
        redirectButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.href = githubUrl;
            }
        });
    } else {
        console.error('Redirect button not found.');
    }
});
