const path = require("path");
const { promises: fs } = require("fs");
const {
    default: getRouteFromAssetPath,
} = require("next/dist/shared/lib/router/utils/get-route-from-asset-path");
const generateSitemap = require("./generateSitemap");
const root = process.cwd();

const addStaticPages = async({ baseUrl, skipIndex }) => {
    const getDirents = (path) => fs.readdir(path, { withFileTypes: true });

    const direntsToRoutes = async(dirents, directory) => {
        const routes = [];

        for (dirent of dirents) {
            const { name } = dirent;
            const startChar = name.charAt(0);
            const isAPIDirectory = dirent.isDirectory() && name === "api";

            if ([".", "_", "["].includes(startChar) || isAPIDirectory) {
                continue;
            }

            if (dirent.isDirectory()) {
                const direntDirectory = path.resolve(directory, name);
                const directoryDirents = await getDirents(direntDirectory);
                const directoryRoutes = await direntsToRoutes(
                    directoryDirents,
                    direntDirectory
                );

                routes.push(...directoryRoutes);
            }

            const route = getRouteFromAssetPath(`/${name}`, ".tsx");
            const isNotIndexable = skipIndex.includes(route);

            if (isNotIndexable) {
                continue;
            }

            routes.push({ loc: `${baseUrl}${route}` });
        }

        return routes;
    };

    const directory = path.resolve(root, "src", "pages");
    const dirents = await getDirents(directory);

    return direntsToRoutes(dirents, directory);
};

/*
 * Get our api pages
 */
const addDynamicPages = async({ baseUrl }) => {
    const schema = await require(path.resolve(
        root,
        "src/pages/api/_content/schema.json"
    ));

    return Object.keys(schema).map((page) => ({ loc: `${baseUrl}/${page}` }));
};

module.exports = (...args) =>
    generateSitemap([addStaticPages, addDynamicPages], ...args);