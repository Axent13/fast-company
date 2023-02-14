function isOutdated(date) {
<<<<<<< HEAD
    if (Date.now() - date > 10 * 60 * 100) {
=======
    if (Date.now() - date > 10 * 60 * 1000) {
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
        return true;
    }
    return false;
}
<<<<<<< HEAD
=======

>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
export default isOutdated;
