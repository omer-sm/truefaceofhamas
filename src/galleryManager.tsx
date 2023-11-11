import footageArr from "./Resources/data.json"
import Typography from "@mui/joy/Typography"

interface IFootage {
    details: string,
    path: string,
    level: number,
}

export let gallery: IFootage[][] = [[], [], [], [], [], [], [], [], [], []]

export const makeGallery = () => {
    footageArr.forEach(footage => {
        const level = footage.level
        if (level === -1) {
            return
        }
        gallery[level - 1].push(footage)
    })
    gallery = gallery.filter(lvl => lvl.length)

    for (let i = 0; i < gallery.length; i += 1) {
        gallery[i] = gallery[i].sort((a, b) => 0.5 - Math.random())
    }
}

const getExtension = (path: string) => {
    return (path.match(/\.[A-Za-z0-9]+/) || [" no extension found"])[0].slice(1)
}

enum footageType {
    Image,
    Video,
    Icon,
    Unknown,
    Invalid,
}

/**
 * @param path path to footage
 * @returns appropriate footageType for the footage
 */
const getFootageType = (path: string): footageType => {
    const extension = getExtension(path)
    if (extension === "no extension found") {
        console.error(`Error: Invalid file found (at ${path})`)
        return footageType.Invalid
    }
    const videoTypes: string[] = ["mkv", "mov", "mp4", "webv", "avi"]
    const imageTypes: string[] = ["png", "jpeg", "jpg", "webp"]
    if (videoTypes.includes(extension)) {
        return footageType.Video
    }
    if (imageTypes.includes(extension)) {
        return footageType.Image
    }
    if (extension === "svg") {
        return footageType.Icon
    }
    console.warn(`Warning: Unrecognized file extension: '${extension}'`)
    return footageType.Unknown
}

/**
 * returns an appropriate element to show the content in
 * @param footage footage to show
 * @returns element to show the content (either <img> or <vid>)
 */
export const makeElementForContent = (footage: IFootage) => {
    if (!footage){
        makeGallery()
        footage = gallery[0][0]
    }
    switch (getFootageType(footage.path)) {
        case footageType.Video:
            return (
                <video controls loop autoPlay id="footage" key={footage.path}>
                    <source src={footage.path} type={`video/${getExtension(footage.path)}`} />
                    Video could not be loaded
                </video>
            )
        case footageType.Image:
            return (
                <img src={footage.path} alt="footage from the 7.10 massacres" />
            )
        case footageType.Icon:
            return (
                <embed src={footage.path} />
            )
    }
    return (
        <Typography level="h2">Media could not be loaded.</Typography>
    )
}