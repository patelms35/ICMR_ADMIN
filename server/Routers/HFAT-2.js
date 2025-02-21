import express from "express";
import bodyParser from "body-parser";
import {
  HFAT2Controller,
  HFAT2Get,
  HFAT2DownloadExcel,
  HFAT2DownloadCsv,
  HFAT2Delete,
  HFAT2AndAMBULANCEGet,
  HFAT2UpdateController,
} from "../controller/HFAT-2.js";
import { AuthenciatedUser } from "../Middleware/auth.js";
import { deleteHfat2 } from "../controller/delete/Haft_2_delete.js";

const router = express.Router();
const jsonparser = bodyParser.json();
router.post("/HFAT-2", jsonparser, HFAT2Controller);
router.get("/HFAT-2", jsonparser, AuthenciatedUser, HFAT2Get);
router.get("/HFAT-2WithAMB", jsonparser,AuthenciatedUser, HFAT2AndAMBULANCEGet);
router.get("/HFAT-2/Download", jsonparser, HFAT2DownloadCsv);
router.get("/HFAT-2/Excel", jsonparser, HFAT2DownloadExcel);
router.delete("/HFAT-2", jsonparser, HFAT2Delete);
router.put("/HFAT-2/update", jsonparser, AuthenciatedUser, HFAT2UpdateController);


router.delete("/HFAT-2/delete",AuthenciatedUser, deleteHfat2);

export default router;
