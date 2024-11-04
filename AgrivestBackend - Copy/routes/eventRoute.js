const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authenticateToken = require('../middleware/authMiddleware');
const adminauthenticateToken = require('../middleware/adminauthMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });


router.post('/createvent', adminauthenticateToken, eventController.createvent);
router.get('/getallevents', authenticateToken, eventController.getAllEvents);
router.get('/getoneevent/:id', adminauthenticateToken, eventController.getOneEvent);
router.get('/getviewevent/:id', adminauthenticateToken, eventController.getViewEvent);
router.get('/countfutureevents', adminauthenticateToken, eventController.countTomorrowFutureEvents);
router.get('/countevents6months', adminauthenticateToken,  eventController.getEventCountsForLastSixMonths);
router.put('/uploadpicture/:id', adminauthenticateToken, upload.single('picture'), eventController.uploadEventPicture);
router.put('/uploadpictures/:id', adminauthenticateToken, upload.array('pictures', 10), eventController.uploadEventPictures);
router.put('/updateevent/:id', adminauthenticateToken,  eventController.updateEvent);
router.delete('/deleteevent/:id', adminauthenticateToken,  eventController.deleteEvent);




module.exports = router;
