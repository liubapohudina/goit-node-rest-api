import multer from "multer";
import path from "path";
import HttpError from "../helpers/HttpError.js";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const limits = {
    fileSize: 1024 * 1024 * 5,
}

const fileFilter = (req, file, cb) => {
    const exention = file.originalname.split('.').pop();
    if (exention === 'exe') {
        return cb(HttpError(400, ".exe exention not allow"));
    }
    cb(null, true)
}

const upload = multer({
    storage,
    limits,
    fileFilter,
});
export default upload;