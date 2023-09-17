import fs from 'fs';
import path from 'path';

export function getPagesPaths(dir: string, pagesPath: string): string[] {
    const fileList: string[] = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (isDirectory) {
            fileList.push(...getPagesPaths(filePath, pagesPath));
        } else {
            const relativePath = path.relative(pagesPath, filePath);
            const pagePath = '/' + relativePath.replace(/\.tsx?$/, '').replace(/\\+/g, '/');
            fileList.push(pagePath === '/index' ? '/' : pagePath);
        }
    });

    return fileList;
}