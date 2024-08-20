import multer from 'multer';
import { v4 as uuid } from 'uuid';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads'); // Directory to save files
  },
  filename(req, file, cb) {
    const id = uuid();
    const extName = file.originalname.split('.').pop();
    const fileName = `${id}.${extName}`;
    cb(null, fileName); // Filename for the uploaded file
  },
});

export const uploadFiles = multer({ storage }).single('file'); // Field name is 'file'
