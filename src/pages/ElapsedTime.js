

function timeElapsed(time) {
    const currentTime = Math.floor(Date.now() / 1000);
    const elapsedSeconds = currentTime - time; 
    if (elapsedSeconds < 60) {
    return `${elapsedSeconds} sec${elapsedSeconds !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 3600) {
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 86400) {
    const hours = Math.floor(elapsedSeconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 604800) {
    const days = Math.floor(elapsedSeconds / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 2419200) {
    const weeks = Math.floor(elapsedSeconds / 604800);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (elapsedSeconds < 29030400) {
    const months = Math.floor(elapsedSeconds / 2419200);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
    const years = Math.floor(elapsedSeconds / 29030400);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
}

export default timeElapsed;