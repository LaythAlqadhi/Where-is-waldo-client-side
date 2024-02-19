const formatDate = (dateByMS) => {
    const date = new Date(dateByMS);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
};

export default formatDate;
