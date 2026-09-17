export const formatDate = (date:string | undefined) => {
    if (date) {
        return new Date(date).toLocaleDateString("fa-IR")
    }
}