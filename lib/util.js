// lib 工具函数 动态路由
import fs from 'fs';
import path from 'path';

const directory = path.join(process.cwd(), 'productData');

export function getProductDatas() {
    // Get file names under /productData
    const fileNames = fs.readdirSync(directory);
    const fileName = fileNames[0];
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const productDatas = JSON.parse(fileContents).products;

    // Combine the data with the id
    return productDatas;
}

// 动态路由
export function getAllProductIds() {
    const fileNames = fs.readdirSync(directory);
    const fileName = fileNames[0];
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const productDatas = JSON.parse(fileContents).products;

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 1
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return productDatas.map((product) => {

        /*
            Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the 
            params key and contain an object with the 
            id key (because we’re using 
            [id] in the file name). Otherwise, getStaticPaths will fail.
        */
        return {
            params: {
                id: product.id,
            },
        };
    });
}

// fetch necessary data to render the post with the given id.
export function getProductData(id) {
    const productDatas = getProductDatas();
    // Combine the data with the id
    return {
        id,
        productData: productDatas.filter(product => product.id == id)[0],
    };
}