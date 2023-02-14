<<<<<<< HEAD
export function generetaAuthError(message) {
=======
export function generateAuthError(message) {
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    switch (message) {
        case "INVALID_PASSWORD":
            return "Email или пароль введены некорректно";
        case "EMAIL_EXISTS":
            return "Пользователь с таким Email уже существует";
        default:
<<<<<<< HEAD
            return "Слишком много попыток входа. Попробуйте позднее";
=======
            return "Слишком много попыток входа. Попробуйте позже";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    }
}
