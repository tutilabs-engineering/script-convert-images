const path = require("path")
const fs = require('fs');
const sharp = require('sharp');


async function modificationImage(file, path_file) {
  console.log(path.resolve(__dirname, "..", path_file, file));
    try {
        const image = await sharp(path.resolve(__dirname, "..", path_file, file)).toFormat("webp").webp({ quality: 45 }).resize({ height: 600, width: 600, fit: "contain", background: {
            b: 255,g: 255,r: 255
        } }).toBuffer()
        
        // fs.writeFileSync(path.resolve(__dirname, "..", path_file, `${file.split(".jpg" || ".png" || ".jpeg")[0]}.webp`), image)
        fs.writeFileSync(path.resolve(__dirname, "..", path_file, `${file}.webp`), image)

    } catch (error) {
        console.log(error)
    }


   }
class SharpMiddleware {

    
       async optimizationImage(files) {
        // /layout_extracao
        await files.map(async (item)=>{
           await modificationImage(item, "uploads")
        })
    }

    
}


   module.exports = new SharpMiddleware()