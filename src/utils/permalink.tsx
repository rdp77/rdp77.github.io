export const convertToPermalink = (title: string): string => {
    // Replacing spaces with signs "-"
    let permalink = title.toLowerCase().replace(/\s+/g, "-");

    // Replace characters other than letters, numbers, and signs "-" with empty characters ("")
    permalink = permalink.replace(/[^a-z0-9-]/g, "");

    return permalink;
};